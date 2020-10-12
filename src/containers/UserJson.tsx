import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Header, Title, JsonWrapper } from '../components/Style';
import { Brace, KeyPair, JsonLink, Key, JsonPair, ErrorValue } from '../components/JsonPair';
import moment from 'moment';

type GithubUser = {
  bio?: string;
  blog?: string;
  company?: string;
  created_at: string;
  login: string;
  location?: string;
  name: string;
  twitter_username?: string;
};
type UserField = { pairKey: string; userInfoKey: keyof GithubUser };
type UserParam = { githubHandle: string };

export default function UserJson(props: any) {
  const { githubHandle } = useParams<UserParam>();
  const [userInfo, setUserInfo] = useState<GithubUser>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchUser(handle: string) {
      try {
        const response = await fetch(`https://api.github.com/users/${handle}`);
        if (response.status === 404) {
          setError(`Github user ${githubHandle} not found`);
        } else if (response.status !== 200) {
          setError(`Looks like there was a problem. Status Code: ${response.status}`);
        } else {
          const parsedData: GithubUser = await response.json();
          setUserInfo(parsedData);
        }
      } catch (err) {
        setError(err.message);
      }
    }
    if (githubHandle != null) {
      fetchUser(githubHandle);
    }
  }, [githubHandle]);

  if (userInfo == null && error == null) {
    return (
      <Container>
        <Key>Loading Data...</Key>
      </Container>
    );
  } else if (userInfo != null) {
    const userFields: UserField[] = [
      { pairKey: 'name', userInfoKey: 'name' },
      { pairKey: 'location', userInfoKey: 'location' },
      { pairKey: 'github_handle', userInfoKey: 'login' },
      { pairKey: 'about_me', userInfoKey: 'bio' },
      { pairKey: 'current_company', userInfoKey: 'company' },
      { pairKey: 'twitter', userInfoKey: 'twitter_username' },
    ];

    const infoExists = (key: keyof GithubUser) =>
      userInfo[key] != null && userInfo[key]!.length > 0;

    const [firstName, ...lastName] = userInfo.name.split(' ');
    const titleName = lastName.length === 0 ? firstName : lastName.join(' ');

    return (
      <Container>
        <Header>
          JSON <Title>{titleName}</Title>
        </Header>
        <JsonWrapper>
          <code style={{ whiteSpace: 'pre-wrap' }}>
            <Brace />
            {userFields.map((field) =>
              infoExists(field.userInfoKey) ? (
                <KeyPair
                  key={field.pairKey}
                  keyString={field.pairKey}
                  pairValue={userInfo[field.userInfoKey]!}
                />
              ) : null,
            )}
            <KeyPair
              noComma={!infoExists('blog')}
              keyString="years_experience"
              pairValue={moment(userInfo.created_at).fromNow(true)}
            />
            {infoExists('blog') ? (
              <JsonLink noComma={true} keyString="website" linkHref={userInfo.blog!} />
            ) : null}
            <Brace isClosing={true} />
          </code>
        </JsonWrapper>
      </Container>
    );
  } else {
    return (
      <Container>
        <Header>JSON Yourself</Header>
        <JsonWrapper>
          <code style={{ whiteSpace: 'pre-wrap' }}>
            <Brace />
            <JsonPair
              noComma={true}
              keyString="error"
              renderValue={() => <ErrorValue>{error}</ErrorValue>}
            />
            <Brace isClosing={true} />
          </code>
        </JsonWrapper>
      </Container>
    );
  }
}

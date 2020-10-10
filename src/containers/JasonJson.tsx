import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { KeyPair, JsonLink, KeyArray, Value, Brace } from '../components/JsonPair';
import { Container, Header, SmallTitle, Title, JsonWrapper, ActionText } from '../components/Style';
import ConsoleText from '../components/ConsoleText';

export default function JasonJson() {
  const [githubHandle, setGithubHandle] = useState<string>();

  if (githubHandle != null) {
    return <Redirect to={`/jsonify/${githubHandle}`} />;
  }

  return (
    <Container>
      <Header>
        J<SmallTitle>a</SmallTitle>SON <Title>SCHAPIRO</Title>
      </Header>
      <JsonWrapper>
        <code style={{ whiteSpace: 'pre-wrap' }}>
          <Brace />
          <KeyPair keyString="name" pairValue="Jason Schapiro" />
          <KeyPair keyString="location" pairValue="Amsterdam, Netherlands" />
          <KeyPair keyString="github_handle" pairValue="yono38" />
          <KeyPair keyString="current_position" pairValue="Head of Tech & Product" />
          <KeyPair keyString="current_company" pairValue="WorldCover" />
          <KeyPair keyString="years_experience" pairValue={9} />
          <KeyArray
            keyString="skills"
            arrayValues={[
              'typescript',
              'engineering team management',
              'node.js',
              'product roadmap development',
              'react',
              'airflow etls',
            ]}
          />
          <KeyArray
            keyString="interests"
            arrayValues={['concerts', 'rock climbing', 'cooking', 'learning dutch']}
          />
          <JsonLink keyString="website" linkHref="https://www.jasonschapiro.com" />
          <JsonLink
            noComma={true}
            keyString="more_info"
            linkHref="https://www.linkedin.com/in/jasonschapiro/"
          />
          <Brace isClosing={true} />
        </code>
      </JsonWrapper>
      <ActionText>
        <Value>---------------------------</Value>
        <br />
        <Value>JSONify Yourself!</Value>
        <br />
        <ConsoleText
          promptText="Enter your github handle"
          onSubmit={(handle) => setGithubHandle(handle)}
        />
      </ActionText>
    </Container>
  );
}

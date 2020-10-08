import React from "react"

import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Header>J<SmallTitle>a</SmallTitle>SON <Title>SCHAPIRO</Title></Header>
      <Json>
        <code style={{whiteSpace: 'pre-wrap'}}>
        <div>
          <span>
          {'{'}
          </span>
        </div>
        <KeyPair pairKey="name" pairValue="Jason Schapiro" />
        <KeyPair pairKey="location" pairValue="Amsterdam, Netherlands" />
        <KeyPair pairKey="current_position" pairValue="Head of Tech & Product" />
        <KeyPair pairKey="current_company" pairValue="WorldCover" />
        <KeyPair pairKey="years_experience" pairValue={8} />
        <KeyArray arrayKey="skills" arrayValues={["typescript", "engineering team management", "node.js", "product roadmap development", "react", "airflow etls"]} />
        <KeyArray arrayKey="interests" arrayValues={["concerts", "rock climbing", "cooking", "learning dutch"]} />
        <JsonPair keyString="more_info" renderValue={() => <JsonLink href="https://www.linkedin.com/in/jasonschapiro/">https://www.linkedin.com/in/jasonschapiro/</JsonLink>} />
        <div>
          <span>
          {'}'}
          </span>
        </div>
        </code>
      </Json>
    </Container>
  );
};

function KeyPair({ pairKey, pairValue }: { pairKey: string, pairValue: any }) {
  const formattedValue =  typeof pairValue === 'string' ? `"${pairValue}"` : pairValue;
  return (<JsonPair keyString={pairKey} renderValue={() => <Value>{formattedValue}</Value>} />);
}

function KeyArray({ arrayKey, arrayValues }: {arrayKey: string, arrayValues: any[]}) {
  return (<JsonPair keyString={arrayKey} renderValue={() => {
    const arrayContent = arrayValues.map((val, idx, arr) => {
      const formattedValue =  typeof val === 'string' ? `"${val}"` : val;
      const comma = idx !== arr.length - 1 ? ', ' : '';
      return (<><ArrayValue>{formattedValue}</ArrayValue>{comma}</>);
    });
    return <>[{arrayContent}]</>;
  }} />);
}

function JsonPair({ keyString, renderValue }: { keyString: string, renderValue(): void }) {
  return (
    <div>
      {'  '}
      <span>
        <Key>"{keyString}"</Key>: {renderValue()},
      </span>
    </div>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(0, 43, 54);
  margin: 20px;
`;

const Header = styled.h1`
  font-family: monospace;
  color: #eee8d5;
  font-size: 45px;
  margin: 10px;
`

const Title = styled.span`
  color: #859900;
  font-size: 40px;
`

const SmallTitle = styled(Title)`
  font-size: 25px;
`

const Json = styled.pre`
  font-size: 30px;
  color: rgb(131, 148, 150);
  font-family: monospace;
`

const Key = styled.span`
  color: rgb(181, 137, 0);
`

const Value = styled.span`
  color: rgb(42, 161, 152);
`

const ArrayValue = styled.span`
  color: rgb(133, 153, 0);
`

const JsonLink = styled.a`
  color: rgb(253, 246, 227);
  &:hover {
    color: #6c71c4;
  }
`
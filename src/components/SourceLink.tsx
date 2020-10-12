import React from 'react';

import styled from 'styled-components';

export default function HeaderActions() {
  return (
    <Wrapper>
      <Source href="https://github.com/yono38/yono38.github.io#jasonschapirocom">»Source</Source>
    </Wrapper>
  );
}

const Source = styled.a`
  color: #d33682;
`;

const Wrapper = styled.div`
  padding-right: 15px;
  float: right;
`;

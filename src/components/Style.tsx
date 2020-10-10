import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(0, 43, 54);
  margin: 20px;
`;

export const Header = styled.h1`
  font-family: monospace;
  color: rgb(253, 246, 227);
  font-size: 45px;
  margin: 10px;
`;

export const Title = styled.span`
  color: rgb(133, 153, 0);
  font-size: 40px;
`;

export const SmallTitle = styled(Title)`
  font-size: 25px;
`;

export const JsonWrapper = styled.pre`
  font-size: 30px;
  color: rgb(131, 148, 150);
  font-family: monospace;
`;

export const ActionText = styled.div`
  font-size: 30px;
`;

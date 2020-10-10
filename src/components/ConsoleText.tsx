import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

type ConsoleTextProps = {
  promptText: string;
  onSubmit(handle: string): void;
};
export default function ConsoleText({ promptText, onSubmit }: ConsoleTextProps) {
  const [command, setCommand] = useState('');

  function handleCommand(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log('in handlecommand!', (ev.target as any).value);
    setCommand((ev.target as HTMLInputElement).value);
  }

  function checkSubmit(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (ev.key === 'Enter') {
      onSubmit(command);
    }
    ev.preventDefault();
  }

  return (
    <TextLine>
      {promptText} {'>'}
      <Command autoFocus onKeyUp={checkSubmit} onChange={handleCommand} value={command} />
      {command}
    </TextLine>
  );
}

const blink = keyframes`
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
`;

const TextLine = styled.div`
  position: relative;
  display: inline-block;
  font-family: Monaco, Arial, Helvetica, sans-serif;
  line-height: 24px;
  font-size: 24px;
  color: #93a1a1;
  min-width: 360px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -15px;
    display: inline-block;
    background-color: #606060;
    vertical-align: top;
    width: 10px;
    /* Set height to the line height of .text */
    height: 24px;
    animation: ${blink} 1.5s infinite;
  }
`;

const Command = styled.input`
  outline: none;
  cursor: none;
  background-color: transparent;
  height: 24px;
  width: 5px;
  margin: 0;
  border: none;
  color: transparent;
`;

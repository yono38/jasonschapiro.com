import React from 'react';

import styled from 'styled-components';

type BasePairProps = {
  keyString: string;
  noComma?: boolean;
};
type JsonPairProps = BasePairProps & {
  renderValue(): void;
};
type KeyPairProps = BasePairProps & {
  pairValue: string | number;
};
type KeyArrayProps = BasePairProps & {
  arrayValues: Array<string | number>;
};
type JsonLinkProps = BasePairProps & {
  linkHref: string;
};

export function KeyPair({ pairValue, ...props }: KeyPairProps) {
  const formattedValue = typeof pairValue === 'string' ? `"${pairValue}"` : pairValue;
  return <JsonPair {...props} renderValue={() => <Value>{formattedValue}</Value>} />;
}

export function KeyArray({ arrayValues, ...props }: KeyArrayProps) {
  return (
    <JsonPair
      {...props}
      renderValue={() => {
        const arrayContent = arrayValues.map(
          (val: string | number, idx: number, arr: (string | number)[]) => {
            const formattedValue = typeof val === 'string' ? `"${val}"` : val;
            const comma = idx !== arr.length - 1 ? ', ' : '';
            return (
              <>
                <ArrayValue>{formattedValue}</ArrayValue>
                {comma}
              </>
            );
          },
        );
        return <>[{arrayContent}]</>;
      }}
    />
  );
}

export function JsonLink({ linkHref, ...props }: JsonLinkProps) {
  return (
    <JsonPair
      {...props}
      renderValue={() => <ConsoleLink href={linkHref}>{`"${linkHref}"`}</ConsoleLink>}
    />
  );
}

export function JsonPair({ keyString, renderValue, noComma }: JsonPairProps) {
  return (
    <div>
      {'  '}
      <span>
        <Key>"{keyString}"</Key>: {renderValue()}
        {noComma ? '' : ','}
      </span>
    </div>
  );
}

export function Brace({ isClosing = false }: { isClosing?: boolean }) {
  return (
    <div>
      <span>{isClosing ? '}' : '{'}</span>
    </div>
  );
}

export const Json = styled.pre`
  font-size: 30px;
  color: rgb(131, 148, 150);
  font-family: monospace;
`;

export const Key = styled.span`
  color: rgb(181, 137, 0);
`;

export const Value = styled.span`
  color: rgb(42, 161, 152);
`;

export const ArrayValue = styled.span`
  color: rgb(133, 153, 0);
`;

export const ErrorValue = styled.span`
  color: rgb(220, 50, 47);
`;

export const ConsoleLink = styled.a`
  color: rgb(253, 246, 227);
  &:hover {
    color: #6c71c4;
  }
`;

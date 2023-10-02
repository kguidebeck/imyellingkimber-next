import { Color, Weight } from '@/styles/constants';
import { Justify, flex, rem } from '@/styles/helpers';
import styled from 'styled-components';

export const Card = styled.article`
  --padding-x: ${rem(15)};
  border: 4px solid ${Color.green};
  border-radius: 30px;
  overflow: hidden;
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 410 / 215;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  color: ${Color.white};
  background: ${Color.green};
  padding: ${rem(10)} var(--padding-x) ${rem(13)};
  font-size: ${rem(18)};
`;

export const Body = styled.div`
  padding: ${rem(20)} var(--padding-x);
`;

export const Description = styled.p`
  margin: 0 0 ${rem(30)};
`;

export const Footer = styled.div`
  ${flex(Justify.BETWEEN)}
`;

export const Date = styled.p`
  margin: 0;

  span {
    font-weight: ${Weight.bold};
  }
`;

export const ConsoleTag = styled.span`
  color: ${Color.white};
  background: ${Color.orangeDark};
  padding: ${rem(3)} ${rem(10)};
  border-radius: ${rem(5)};
  text-transform: uppercase;
  font-weight: ${Weight.bold};
  font-size: ${rem(16)};
`;

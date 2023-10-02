import styled from 'styled-components';
import { rem } from '@/styles/helpers';

export const Section = styled.section`
  margin-top: ${rem(45)};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: ${rem(45)};
`;

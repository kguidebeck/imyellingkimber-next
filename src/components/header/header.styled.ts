import styled from 'styled-components';
import Link from 'next/link';
import { Justify, flex, rem, unstyledList } from '@/styles/helpers';
import { Color, Font } from '@/styles/constants';
import LogoSVG from '@/assets/svgs/logo';
import ContainerComp from '@/components/container';

export const Header = styled.header`
  padding: ${rem(15)} 0;
`;

export const Container = styled(ContainerComp)`
  ${flex(Justify.BETWEEN)}
`;

export const Logo = styled(LogoSVG)`
  width: ${rem(200)};
  margin-left: -11.4%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  ${unstyledList}
  ${flex(Justify.END)}
`;

export const NavItem = styled.li`
  &:not(:last-of-type) {
    margin-right: ${rem(40)};
  }
`;

export const NavLink = styled(Link)<{ active?: boolean; live?: boolean }>`
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }

  position: relative;
  font-family: ${Font.fries};
  text-transform: uppercase;
  color: ${Color.green};
  text-decoration: none;
  font-size: ${rem(24)};
  line-height: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0 ${rem(-10)} ${rem(-4)};
    border-radius: ${rem(7)};
    border: 3px solid ${Color.green};
    opacity: 0;
    transition: opacity 300ms ease;
  }

  &::after {
    --size: ${rem(12)};
    --position: calc(var(--size) / -3);
    top: var(--position);
    right: var(--position);
    width: var(--size);
    height: var(--size);
    background: ${Color.white};
    border: 2px solid ${Color.green};
    border-radius: 100%;
    opacity: 0;
  }

  svg {
    width: ${rem(25)};
  }

  ${({ active }) =>
    active &&
    `
    &::before {
      opacity: 1;
    }
  `}

  ${({ live }) =>
    live &&
    `
    display: block;
    border-radius: ${rem(7)};
    padding: ${rem(2)} ${rem(7)} ${rem(7)};
    color: ${Color.white};
    background: ${Color.green};

    &::after {
      opacity: 1;
      animation: blink-animation 2.5s steps(5, start) infinite;
    }

    span {
      display: block;
    }

    svg {
      display: none;
    }

    &::after {

    }
  `}
`;

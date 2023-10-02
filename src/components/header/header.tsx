import { useRouter } from 'next/router';
import Link from 'next/link';
import Twitch from '@/assets/svgs/twitch';
import * as Styled from './header.styled';

const Header = () => {
  const { asPath } = useRouter();
  return (
    <Styled.Header>
      <Styled.Container>
        <Link href="/">
          <Styled.Logo />
        </Link>

        <Styled.Nav aria-label="Primary">
          <Styled.NavList>
            <Styled.NavItem>
              <Styled.NavLink href="/about" active={asPath === '/about'}>
                About
              </Styled.NavLink>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink href="/games" active={asPath === '/games'}>
                Games
              </Styled.NavLink>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink
                href="https://www.twitch.tv/imyelling_kimber"
                target="_blank"
                live={true}
              >
                <span>Live</span>
                <Twitch />
              </Styled.NavLink>
            </Styled.NavItem>
          </Styled.NavList>
        </Styled.Nav>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;

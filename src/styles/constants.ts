import { Roboto_Condensed } from 'next/font/google';
import localFont from 'next/font/local';

const fries = localFont({ src: '../assets/fonts/FrenchFriesILTD-Regular.woff' })

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});


export const FIXED_NAVBAR_HEIGHT = 120;
export const BASE_FONT_SIZE = 16;

export const Color: { [char: string]: string } = {
  white: '#FFF',
  black: '#000',
  greenDark: '#0A1A14',
  green: '#203830',
  orangeDark: '#914E3D',
  orange: '#D57E51',
  pink: '#E3B5A8',
  pinkLight: '#F2DFD9'
};

export const Font = {
  fries: fries.style.fontFamily,
  roboto: roboto.style.fontFamily,
};

export const Weight = {
  regular: 400,
  bold: 700,
};

export const Screen = {
  mobile: '(max-width: 767px)',
  mobileUp: '(min-width: 768px)',
  portrait: '(max-width: 879px)',
  portraitUp: '(min-width: 880px)',
  tablet: '(max-width: 1079px)',
  tabletUp: '(min-width: 1080px)',
  laptopSm: '(max-width: 1239px)',
  lapotpSmUp: '(min-width: 1240px)',
  laptop: '(max-width: 1379px)',
  lapotpUp: '(min-width: 1380px)',
  desktopSm: '(max-width: 1439px)',
  desktopSmUp: '(min-width: 1440px)',
  desktop: '(max-width: 1679px)',
  desktopUp: '(min-width: 1680px)',
  desktopLg: '(max-width: 1799px)',
  desktopLgUp: '(min-width: 1800px)',
};

export const Ease = {
  out: `cubic-bezier(0, 0, 0, 1)`,
  outFast: `cubic-bezier(0.2, 1, 0.2, 1)`,
  duration: '0.2s',
};

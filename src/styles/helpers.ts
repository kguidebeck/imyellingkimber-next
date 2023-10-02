import styled from 'styled-components';
import { BASE_FONT_SIZE, Font } from './constants';

export const hover = (val: any) => `
  @media(hover: hover) {
    &:hover {
      ${val}
    }
  }
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  border: 0;
  white-space: nowrap;
`;

/**
 * Center the element with absolute positioning
 * Pass null to disable centering on a given axis
 * @param {number} offsetX The percentage to offset on the X axis
 * @param {number} offsetY The percentage to offset on the Y axis
 */
export const absoCenter = (offsetX = 0, offsetY = 0) => {
  let p = '';
  let trans = '';

  if (offsetX !== null) {
    p = `left: ${50 + offsetX}%;`;
    trans = 'translateX(-50%)';
  }

  if (offsetY !== null) {
    p = ` ${p} top: ${50 + offsetY}%;`;
    trans = `${trans} translateY(-50%)`;
  }

  return `
    position: absolute;
    ${p}
    transform: ${trans};
  `;
};

/**
 * @desc Converts px units to rems
 * @param px - Value in pixels
 * @returns {string}
 */
export const rem = (px: number) =>
  `${parseFloat((px / BASE_FONT_SIZE).toFixed(4))}rem`;

export const enum Justify {
  CENTER = 'center',
  START = 'flex-start',
  END = 'flex-end',
  BETWEEN = 'space-between',
  AROUND = 'space-around',
  EVENLY = 'space-evenly',
  STRETCH = 'stretch',
}

export const enum Align {
  CENTER = 'center',
  START = 'flex-start',
  END = 'flex-end',
}

export const flex = (
  justify: Justify = Justify.CENTER,
  align: Align = Align.CENTER
) =>
  `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
`;

export const unstyledList = () =>
  `
    margin: 0;
    padding: 0;
    list-style: none;
  `;

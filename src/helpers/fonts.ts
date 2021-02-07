import { randElement } from './helpers';

export const fonts = [
  'Annie Use Your Telescope',
  'Architects Daughter',
  'Cedarville Cursive',
  'Gaegu',
  'Handlee',
  'Indie Flower',
  'Kalam',
  'La Belle Aurore',
  'Reenie Beanie',
  'Schoolbell',
  'Shadows Into Light',
  'Shadows Into Light Two',
  'Sue Ellen Francisco',
  'Waiting for the Sunrise',
  'Zeyada',
];

export const fontSizeByFont: { [key: string]: number } = {
  'Annie Use Your Telescope': 4.5,
  'Architects Daughter': 4,
  'Cedarville Cursive': 4,
  Gaegu: 4.5,
  Handlee: 4,
  'Indie Flower': 4.5,
  Kalam: 4,
  'La Belle Aurore': 4,
  'Reenie Beanie': 5,
  Schoolbell: 4,
  'Shadows Into Light': 4,
  'Shadows Into Light Two': 4,
  'Sue Ellen Francisco': 4,
  'Waiting for the Sunrise': 4.5,
  Zeyada: 4,
};

export const getFontArr = (len: number) => new Array(len).fill(null).map((_) => randElement(fonts));

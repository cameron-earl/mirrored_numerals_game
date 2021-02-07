import SillyGooseError from './SillyGooseError';

export const getNumArr = (len: number = randInt(3, 9)): number[] => {
  let numArr;
  do {
    numArr = getFilledArr(len).map((_) => randInt());
  } while (numArr.every((n) => !isReversable(n)));
  while (numArr[0] === 0) {
    numArr = [...numArr.slice(1), randInt()];
  }
  return numArr;
};

export const getReversed = (numArr: number[]): boolean[] => {
  let reversedArr;
  do {
    reversedArr = [...numArr].map((n) => (isReversable(n) ? randBool() : false));
  } while (reversedArr.every((e) => !e));
  return reversedArr;
};

export const getFilledArr = <T>(len: number, val?: T): T[] => new Array(len).fill(val);

export const isReversable = (n: number): boolean => [2, 3, 4, 5, 6, 7, 9].includes(n);

export const randBool = (): boolean => Math.random() < 0.5;

export const randInt = (min: number = 0, max: number = 9): number => {
  if (max < min) throw new SillyGooseError('Max cannot be less than min, you silly goose.');
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randElement = <T>(a: T[]): T => a[randInt(0, a.length - 1)];

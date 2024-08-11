export type TTAbleData<T> = {
  [key in keyof T]: T[key];
}[];

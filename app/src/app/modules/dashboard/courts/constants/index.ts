export const COURT_TABLE_COLUMNS: string[] = ['From', 'To', 'Number', 'Enabled', 'Surface'];
export const COURT_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export enum COURT_SURFACES {
  HARD = 'Hard',
  CLAY = 'Clay',
}
export const COURT_SCHEDULES = Array.from({ length: 16 }, (_, i) => i + 8);

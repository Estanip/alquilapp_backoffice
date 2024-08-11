export enum AuthGuardTypes {
  CAN_ACTIVATE = 'CAN_ACTIVATE',
  CAN_DEACTIVATE = 'CAN_DEACTIVATE',
}

export type TApiResponse<T> = {
  data?: T;
  success: boolean;
};

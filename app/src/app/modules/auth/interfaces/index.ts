export interface IAuthUser {
  _id: string;
  email: string;
  identification_number: string;
  is_enabled: boolean;
  name: string;
  token: string;
}

export interface ILoginResponse {
  data: IAuthUser;
  success: boolean;
}

export interface IUser {
  email: string;
  password: string;
}

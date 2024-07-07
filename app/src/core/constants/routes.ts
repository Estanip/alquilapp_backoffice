enum AuthRoutes {
  LOGIN = 'login',
  REGISTER = 'register',
}

export enum RoutesPrefix {
  AUTH = 'auth',
}

export const RoutesPaths = {
  AUTH: {
    LOGIN: `${RoutesPrefix.AUTH}/${AuthRoutes.LOGIN}`,
    REGISTER: `${RoutesPrefix.AUTH}/${AuthRoutes.REGISTER}`,
  },
};

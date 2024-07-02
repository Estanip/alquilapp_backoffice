enum AuthRoutes {
  LOGIN = 'login',
}

export enum RoutesPrefix {
  AUTH = 'auth',
}

export const RoutesPaths = {
  AUTH: { LOGIN: `${RoutesPrefix.AUTH}/${AuthRoutes.LOGIN}` },
};

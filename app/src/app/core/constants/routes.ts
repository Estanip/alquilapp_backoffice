enum AuthRoutes {
  LOGIN = 'login',
  REGISTER = 'register',
}

enum DashboardRoutes {
  HOME = '',
  USERS = 'users',
  COURTS = 'courts',
}

export enum RoutesPrefix {
  AUTH = 'auth',
  DASHBOARD = 'dashboard',
}

export const RoutesPaths = {
  AUTH: {
    LOGIN: `${RoutesPrefix.AUTH}/${AuthRoutes.LOGIN}`,
    REGISTER: `${RoutesPrefix.AUTH}/${AuthRoutes.REGISTER}`,
  },
  DASHBOARD: {
    HOME: `${RoutesPrefix.DASHBOARD}/${DashboardRoutes.HOME}`,
    USERS: `${RoutesPrefix.DASHBOARD}/${DashboardRoutes.USERS}`,
    COURTS: `${RoutesPrefix.DASHBOARD}/${DashboardRoutes.COURTS}`,
  },
};

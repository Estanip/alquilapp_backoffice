import { IAuthUser } from '../auth/interfaces';
import { ICourtTableElement, ICourt } from '../dashboard/courts/interfaces';
import { IUserElement } from '../dashboard/users/interfaces';

export type TModuleElement = ICourtTableElement | IUserElement;
export type TDataApiResponse = ICourt | IAuthUser;

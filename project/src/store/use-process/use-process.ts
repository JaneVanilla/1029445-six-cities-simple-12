import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): string => state.authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state.authorizationStatus !== AuthorizationStatus.Unknown;

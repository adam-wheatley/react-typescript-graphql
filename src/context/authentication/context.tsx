import React from 'react'
import { getAccessToken } from '../../accessToken';

export interface AuthContextInterface {
    isAuthenticated?: boolean,
    updateAuth: Function,
}

const Context = React.createContext<AuthContextInterface>({
    isAuthenticated: !!getAccessToken(),
    updateAuth: () => {},
});

export default Context;

export const { Provider, Consumer } = Context;


import React, { useState } from 'react'
import { Provider } from './context'

interface Props {
    authenticated: boolean,
}

const AuthenticationContext: React.FC<Props> = ({ children, authenticated }) => {
    const [isAuthenticated, updateAuthState] = useState(authenticated);
    const updateAuth = (isAuth: boolean) => updateAuthState(isAuth); 
    return (
        <Provider value={{
            isAuthenticated,
            updateAuth, 
        }}>
            {children}
        </Provider>
    )
}

export default AuthenticationContext

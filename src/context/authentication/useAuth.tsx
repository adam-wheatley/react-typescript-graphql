import { useContext } from 'react'
import AuthenticationContext from './context';

const useAuth = () => {
    const AuthContext = useContext(AuthenticationContext);
    return AuthContext;
};

export default useAuth;

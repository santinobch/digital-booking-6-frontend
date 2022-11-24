import { useNavigate } from 'react-router-dom';

import { getStoreItem } from '../../storage/storage';
  
export default function ProtectedLoggedRoute(props) {

    const auth = getStoreItem('auth');

    const navigate = useNavigate();
    
    if (auth === undefined || auth.jwt === "") {
        navigate(props.redirect);
    } else {
        return props.children;
    }
};
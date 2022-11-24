import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getStoreItem } from '../../storage/storage';
  
export default function ProtectedLoggedRoute(props) {

    const auth = getStoreItem('auth');

    const [nav, setNav] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        navigate(nav);
    }, [nav])

    if (props.checkUnlogged === undefined && (auth === undefined || auth.jwt === "")) {
        setNav(props.redirect);
    } else if (props.checkUnlogged && auth !== null && auth !== undefined) {
        setNav(props.redirect);
    } else {
        return props.children;
    }

    
};
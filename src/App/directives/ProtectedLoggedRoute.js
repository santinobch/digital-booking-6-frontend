import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getStoreItem } from '../utils/storage';
  
export default function ProtectedLoggedRoute(props) {

    const auth = getStoreItem('auth');

    const navigate = useNavigate();

    useEffect(() => {
        if (props.checkUnlogged === undefined && (auth === undefined || auth.jwt === "")) {
            navigate(props.redirect);
        } else if (props.checkUnlogged && auth !== null && auth !== undefined) {
            navigate(props.redirect);
        }
    })

    return (
        <>
            {props.children}
        </>
    )
};
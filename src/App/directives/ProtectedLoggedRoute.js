import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import parseBool from '../utils/parseBool';
  
export default function ProtectedLoggedRoute(props) {

    const [cookie] = useCookies();

    const navigate = useNavigate();

    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        //Checks unlogged
        if (parseBool(props.checkUnlogged)) {
            if (parseBool(cookie.logged)) {
                setAllowed(false);
                navigate(props.redirect);
            } else {
                setAllowed(true);
            }
        }
        //Checks logged
        else {
            if (!parseBool(cookie.logged)) {
                setAllowed(false);
                navigate(props.redirect, {
                    state: { unlogged: true },
                    replace: true});
            } else {
                setAllowed(true);
            }
        }
    })

    if (allowed){
        return (
            <>
                {props.children}
            </>
        )
    }
};
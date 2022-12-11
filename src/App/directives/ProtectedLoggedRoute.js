import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import parseBool from '../utils/parseBool';
  
export default function ProtectedLoggedRoute(props) {

    const [cookie] = useCookies();

    const navigate = useNavigate();

    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        //Redirects if logged
        if (parseBool(props.checkUnlogged)) {
            if (parseBool(cookie.logged)) {
                setAllowed(false);
                navigate(props.redirect);
            } 
            else {
                setAllowed(true);
            }
        }
        //Redirects if unlogged
        else {
            if (!parseBool(cookie.logged)) {
                setAllowed(false);
                navigate(props.redirect, {
                    state: { unlogged: true },
                    replace: true});
            } 
            else {
                //Is logged, checking for roles
                if (props.role !== undefined) {
                    if (cookie.user.rol !== props.role) {
                        setAllowed(false);
                        navigate(props.redirect);
                    }
                } 

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
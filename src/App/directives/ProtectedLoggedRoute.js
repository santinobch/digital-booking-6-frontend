import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import parseBool from '../utils/parseBool';
  
export default function ProtectedLoggedRoute(props) {

    const [cookie] = useCookies();

    const navigate = useNavigate();

    useEffect(() => {
        //Redirects if unlogged
        if (props.checkUnlogged === undefined && !parseBool(cookie.logged)) {
            navigate(props.redirect);
        } 
        //Redirects if logged
        else if (props.checkUnlogged && parseBool(cookie.logged)) {
            navigate(props.redirect);
        } 
        //Redirects if not allowed by role
        else if (props.role !== undefined) {
            if (cookie.user.rol !== props.role) {
                navigate(props.redirect);
            }
        }
    })

    return (
        <>
            {props.children}
        </>
    )
};
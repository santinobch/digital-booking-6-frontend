import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import parseBool from '../utils/parseBool';
  
export default function ProtectedLoggedRoute(props) {

    const [cookie] = useCookies();

    const navigate = useNavigate();

    useEffect(() => {
        console.log(cookie.user);
        if (props.checkUnlogged === undefined && !parseBool(cookie.logged)) {
            navigate(props.redirect);
        } else if (props.checkUnlogged && parseBool(cookie.logged)) {
            navigate(props.redirect);
        } else if (props.role !== undefined) {
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
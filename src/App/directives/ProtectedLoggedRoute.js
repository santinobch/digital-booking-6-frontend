import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
  
export default function ProtectedLoggedRoute(props) {

    const [cookie] = useCookies();

    const navigate = useNavigate();

    useEffect(() => {
        if (props.checkUnlogged === undefined && !JSON.parse(cookie.logged)) {
            navigate(props.redirect);
        } else if (props.checkUnlogged && JSON.parse(cookie.logged)) {
            navigate(props.redirect);
        }
    })

    return (
        <>
            {props.children}
        </>
    )
};
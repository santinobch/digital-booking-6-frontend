//Assets
import styles from './userInfo.module.scss'
import avatar from "../../../imgs/icons/avatar.svg"

import { useCookies } from 'react-cookie';

import { Link } from "react-router-dom";

const UserInfo = ({section, handleLogout}) => {

  const [cookie] = useCookies();

    if (cookie.user !== undefined) {
        return (
            <div className={section === "drawer" ? styles.userLoggedDrawer : styles.userLoggedHeader}>
                <div className={styles.adminContainer}>
                    <Link to="/createProduct">Administración</Link>
                    <div className={styles.verticalRule}></div>
                </div>
                <div className={styles.avatar}>
                    <img src={avatar} alt = "Avatar usuario"></img>
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.greetingsSpan}>
                        <span style={{color: '#00000080', alignSelf: 'end'}}>Hola, </span>
                        <button onClick={handleLogout} className={section === "drawer" ? styles.logoutBtnDrawer : styles.logoutBtn}>X</button>
                    </div>
                    <span className={styles.userName}>{cookie.user.nombre} {cookie.user.apellido}</span>
                </div>
            </div>
        )
    }
}

export default UserInfo
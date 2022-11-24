import { useState } from 'react';

//Storage
import { getStoreItem } from '../../storage/storage';

//Assets
import styles from './userInfo.module.scss'
import avatar from "../../../imgs/icons/avatar.svg"


const UserInfo = ({section}) => {
    const [usuario, setUsuario] = useState(getStoreItem('usuario'));

    return (
        <div className={section === "drawer" ? styles.userLoggedDrawer : styles.userLoggedHeader}>
            <div>
            <img src={avatar} alt = "Avatar usuario"></img>
            </div>
            <div className={styles.userInfo}>
                <span>Hola, </span>
                <span className={styles.userName}>{usuario.nombre} {usuario.apellido}</span>
            </div>
        </div>
    )
}

export default UserInfo
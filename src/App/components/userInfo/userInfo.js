import React, {useContext} from 'react'
import styles from './userInfo.module.scss'
import avatar from "../../../imgs/icons/avatar.svg"
import UsuarioContext from "../../services/context";


const UserInfo = ({section}) => {
    const { usuario } = useContext(UsuarioContext)


  return (
    <div className={section === "drawer" ? styles.userLoggedDrawer : styles.userLoggedHeader}>
        <div>
        <img src={avatar} alt = "Avatar usuario"></img>
        </div>
        <div className={styles.userInfo}>
            <span>Hola, </span>
            <span className={styles.userName}>{usuario.nombre}</span>
        </div>
    </div>
  )
}

export default UserInfo
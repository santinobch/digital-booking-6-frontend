import React, {useContext} from 'react'
import styles from './userInfo.module.scss'
import avatar from "../../../imgs/icons/avatar.svg"
import {UsuarioContext} from "../../services/context";


const UserInfo = ({section, handleLogout}) => {
    const { usuario } = useContext(UsuarioContext)

  return (
    <div className={section === "drawer" ? styles.userLoggedDrawer : styles.userLoggedHeader}>
        <div className={styles.avatar}>
        <img src={avatar} alt = "Avatar usuario"></img>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.greetingsSpan}>
            <span style={{color: '#00000080', alignSelf: 'end'}}>Hola, </span>
            <button onClick={handleLogout} className={section === "drawer" ? styles.logoutBtnDrawer : styles.logoutBtn}>X</button>
          </div>
          <span className={styles.userName}>{usuario.nombre} {usuario.apellido}</span>
        </div>
    </div>
  )
}

export default UserInfo
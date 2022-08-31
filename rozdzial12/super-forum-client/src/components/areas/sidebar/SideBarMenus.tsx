import React, { useState, useEffect } from "react";
import { AppState } from "../../../store/AppState";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Registration from "../../auth/Registration";
import "./SideBarMenus.css";
import Login from "../../auth/Login";
import Logout from "../../auth/Logout";
import { Link } from "react-router-dom";

import { UserProfileSetType } from "../../../store/user/Reducer";

const SideBarMenus = () => { 
  const user = useSelector((state: AppState) => state.user);
  
  const [showRegister, setShowRegister] = useState(false);
  
  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  }; 

  const [showLogin, setShowLogin] = useState(false); 
  const onClickToggleLogin = () => {
    setShowLogin(!showLogin);
  }; 

  const [showLogout, setShowLogout] = useState(false);
  const onClickToggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <React.Fragment>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">
            <Link to={`/userprofile/${user?.id}`}>{user?.userName}</Link>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span onClick={onClickToggleRegister} className="menu-name">Rejestracja</span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />          
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickToggleLogin} className="menu-name">
            Logowanie
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>     
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onClickToggleLogout} className="menu-name">
            Wylogowanie
          </span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>

      </ul>
    </React.Fragment>
  );
};  

export default SideBarMenus;
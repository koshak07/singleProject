import React, { useState } from "react";
import navLogo from "../images/navlogo.svg";
import navlogo2 from "../images/navlogo2.jpg";
import burgerYellow from "../images/burgerYellow.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="container h-100">
          <div className="nav h-100">
            <div className="nav-left">
              <img src={navlogo2} alt="logo" />
              <span>fashion</span>
            </div>
            <div className="nav-right">
              <ul className="nav-list">
                <li className="nav-item">
                  <input type="text" placeholder="Поиск" />
                </li>
                <li className="nav-item">Главная</li>
                <li className="nav-item">Как приобрести</li>
                <li className="nav-item">Контакты</li>
                {/* <li className="nav-item">GitHub</li> */}
              </ul>
              <div className="nav-btn">
                <button onClick={()=>setOpen(!open)}>
                  <img src={burgerYellow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div className="navbar-mobile">
          <div className="container">
            <ul className="nav-list-mobile">
              <li className="nav-item-mobile">Главная</li>
              <li className="nav-item-mobile">Документация</li>
              <li className="nav-item-mobile">Добавить</li>
              <li className="nav-item-mobile">
                <input type="text" placeholder="Поиск" />
              </li>
              <li className="nav-item-mobile">GitHub</li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

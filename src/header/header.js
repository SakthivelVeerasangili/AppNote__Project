import React from "react";
import './header.css'
import Logo from "../assets/images/torch_icon.svg";

function header() {
  return (
    <div>
      <div className="global__header__containter">
        <div className="wrapper__containter">
          <div className="Keeper__containter">
            <div className="header__containter">
              <img className="logo__icon" src={Logo} alt="logo" />
              <h1 className="header__head">Keeper</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default header;

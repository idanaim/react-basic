import React from 'react'
import './Header.css';
import User from "../user/User";

const Header = () => (
    <header className="basic-header">
      Welcome <User />
    </header>
);

export default Header;
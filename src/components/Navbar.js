import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = (props) => {
    return (
        <div>
        <NavLink activeClassName="active" to="/">ADD</NavLink>&nbsp;&nbsp;
        <NavLink activeClassName="active" to="/list">LIST</NavLink>
        </div>
    );
}

export default Navbar;
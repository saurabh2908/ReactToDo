import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = (props) => {
    return (
        <div>
        <NavLink activeClassName="active" className="btn btn-primary" to="/">ADD</NavLink>&nbsp;&nbsp;
        <NavLink activeClassName="active" className="btn btn-info" to="/list">LIST</NavLink>
        </div>
    );
}

export default Navbar;
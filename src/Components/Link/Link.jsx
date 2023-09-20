import { NavLink } from "react-router-dom";
import './Link.css';
import PropTypes from 'prop-types';

const Link = ({ route, handleOpenCloseBtn }) => {
    return (
        <li onClick={() => handleOpenCloseBtn()} className="hover:text-yellow-800 py-2 px-5">
            <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={`${route.path}`}>{route.id}</NavLink>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
    handleOpenCloseBtn: PropTypes.func.isRequired
}

export default Link;
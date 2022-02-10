import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css'

const Menu = props => {
    return (
        <aside className='Menu'>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/useState">useState</Link>
                    </li>
                    <li>
                        <Link to="/useEffect">useEffect</Link>
                    </li>
                    <li>
                        <Link to="/useRel">useRel</Link>
                    </li>
                    <li>
                        <Link to="/useMemo">useMemo</Link>
                    </li>
                    <li>
                        <Link to="/useCallback">useCallback</Link>
                    </li>
                    <li>
                        <Link to="/useContext">useContext</Link>
                    </li>
                    <li>
                        <Link to="/useReducer">useReducer</Link>
                    </li>
                    <li>
                        <Link to="/useMyHook">useMyHook</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;
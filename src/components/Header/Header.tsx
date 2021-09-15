import React, {FC, useContext,} from 'react';
import './Header.scss';
import { Menu } from './Menu/Menu';
import { MenuContext } from 'MenuContext';

import './Header.scss';

export const Header:FC = () => {

	const { activeMenu, setMenuData } = useContext(MenuContext);

	return (
        <header className="header">
           <div className="container">
			   <Menu />
			   <div className="menu-trigger"
					onClick={() => setMenuData(!activeMenu)}
			   >
				   {activeMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
			   </div>
		   </div>
        </header>
    );
};
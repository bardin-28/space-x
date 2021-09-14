import React, {FC, useContext,} from 'react';
import './Header.scss';
import { Menu } from './Menu/Menu';

import './Header.scss';
import { MenuContext } from 'MenuContext';

export const Header:FC = () => {

	const { menuData, setMenuData } = useContext(MenuContext);

	return (
        <header className="header">
           <div className="container">
			   <Menu />
			   <i
				   className="fas fa-bars"
				   onClick={() => setMenuData({active: !menuData.active})}
			   ></i>
		   </div>
        </header>
    );
};
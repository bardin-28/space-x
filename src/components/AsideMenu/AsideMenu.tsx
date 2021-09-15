import React, { FC, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuContext } from 'MenuContext';

import './AsideMenu.scss';

import {
	LAUNCHES_PAGE_ROUTE,
	LAUNCHPADS_PAGE_ROUTE,
	SHIPS_PAGE_ROUTE
} from 'constants/routes';

const AsideMenu: FC = () => {
	const { activeMenu, setMenuData } = useContext(MenuContext);
	const [ menuActive, setMenuActive ] = useState(false);

	useEffect(() => {
		setMenuActive(activeMenu);
	}, [activeMenu])

	return (
		<aside className={`aside-menu ${menuActive ? 'active': ''}`} >
			<ul>
				<li><NavLink to={SHIPS_PAGE_ROUTE}>Ships</NavLink></li>
				<li><NavLink to={LAUNCHES_PAGE_ROUTE}>Launches</NavLink></li>
				<li><NavLink to={LAUNCHPADS_PAGE_ROUTE}>Launchpads</NavLink></li>
			</ul>
		</aside>
	);
};

export default AsideMenu;
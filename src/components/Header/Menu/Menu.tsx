import {HISTORIES_PAGE_ROUTE, HOME_PAGE_ROUTE, MISSIONS_PAGE_ROUTE, ROCKETS_PAGE_ROUTE } from 'constants/routes';
import React, { FC } from 'react';
import { NavLink } from "react-router-dom";

import './Menu.scss';

export const Menu: FC = () => {
	return (
		<nav className='main-menu-wrapper'>
			<ul className='main-menu'>
				<li><NavLink exact to={HOME_PAGE_ROUTE} activeClassName="active">Home</NavLink></li>
				<li><NavLink exact to={HISTORIES_PAGE_ROUTE} activeClassName="active">Histories</NavLink></li>
				<li><NavLink exact to={MISSIONS_PAGE_ROUTE} activeClassName="active">Missions</NavLink></li>
				<li><NavLink exact to={ROCKETS_PAGE_ROUTE} activeClassName="active">Rockets</NavLink></li>
			</ul>
		</nav>
	);
};
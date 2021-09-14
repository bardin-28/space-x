import React, { FC, useContext, useEffect, useState } from 'react';

import { MenuContext } from 'MenuContext';

import './AsideMenu.scss'

const AsideMenu: FC = () => {
	const { menuData, setMenuData } = useContext(MenuContext);
	const [ menuActive, setMenuActive ] = useState<boolean>(false);

	useEffect(() => {
		setMenuActive(menuData.active);
	}, [menuData])

	return (
		<aside className={`aside-menu ${menuActive ? 'active': ''}`} >
			<ul>
				<li>test1</li>
				<li>test2</li>
				<li>test3</li>
			</ul>
		</aside>
	);
};

export default AsideMenu;
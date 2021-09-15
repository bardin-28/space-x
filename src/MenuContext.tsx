import React, { useState, FC } from "react";

interface MenuProviderContext {
	activeMenu: boolean;
	setMenuData?: any;
}

const defaultState = {
	activeMenu: false,
};

export const MenuContext = React.createContext<MenuProviderContext>(defaultState);

export const MenuProvider: FC = ({ children }) => {
	const [activeMenu, setMenuData] = useState(defaultState.activeMenu);

	return (
		<MenuContext.Provider
			value={{
				activeMenu,
				setMenuData,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

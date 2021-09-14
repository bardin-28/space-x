import React, { useState, createContext } from "react";

interface basicObj  {
	active: boolean;
}

interface menuStage {
	menuData: basicObj,
	setMenuData: any
}

const obj: basicObj	 = {
	active: true,
}

export const MenuContext = createContext<any>({});

export const MenuProvider = (props: any) => {
	const [menuData, setMenuData] = useState<basicObj>({active : false});

	return (
		<MenuContext.Provider value={{menuData, setMenuData}}>
			{props.children}
		</MenuContext.Provider>
	);
};

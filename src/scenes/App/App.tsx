import React, {FC} from 'react';

import {Routes} from "scenes/App/routes";
import { Header } from 'components';
import './styles/index.scss';
import AsideMenu from 'components/AsideMenu/AsideMenu';

const App:FC = () => {

	return (
		<>
			<Header/>
			<main>
				<Routes/>
			</main>
			<AsideMenu />
		</>
	);
}

export default App;

import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import {
	HISTORIES_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	MISSIONS_PAGE_ROUTE,
	ROCKETS_PAGE_ROUTE
} from "constants/routes";

import  { Preloader } from "components";


const Home = lazy(() => import('scenes/Home/Home'));
const Histories = lazy(() => import('scenes/Histories/Histories'));
const Missions = lazy(() => import('scenes/Missions/Missions'));
const Rockets = lazy(() => import('scenes/Rockets/Rockets'));

export const Routes: FC = () => {
    return (
		 <Suspense fallback={<Preloader/>}>
            <Switch>
                <Route exact={true} path={HOME_PAGE_ROUTE} component={Home} />
				<Route exact={true} path={HISTORIES_PAGE_ROUTE} component={Histories} />
				<Route exact={true} path={MISSIONS_PAGE_ROUTE} component={Missions} />
				<Route exact={true} path={ROCKETS_PAGE_ROUTE} component={Rockets} />
			</Switch>
		 </Suspense>
    );
};

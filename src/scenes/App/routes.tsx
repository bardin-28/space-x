import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import {
	HISTORIES_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	LAUNCHES_PAGE_ROUTE,
	LAUNCHPADS_PAGE_ROUTE,
	MISSIONS_PAGE_ROUTE,
	ROCKETS_PAGE_ROUTE,
    SHIPS_PAGE_ROUTE
} from "constants/routes";

import  { Preloader } from "components";


const Home = lazy(() => import('scenes/Home/Home'));
const Histories = lazy(() => import('scenes/Histories/Histories'));
const Missions = lazy(() => import('scenes/Missions/Missions'));
const Rockets = lazy(() => import('scenes/Rockets/Rockets'));
const Launches = lazy(() => import('scenes/Launches/Launches'));
const Launchpads = lazy(() => import('scenes/Launchpads/Launchpads'));
const Ships = lazy(() => import('scenes/Ships/Ships'));

export const Routes: FC = () => {
    return (
		 <Suspense fallback={<Preloader/>}>
            <Switch>
                <Route exact={true} path={HOME_PAGE_ROUTE} component={Home} />
				<Route exact={true} path={HISTORIES_PAGE_ROUTE} component={Histories} />
				<Route exact={true} path={MISSIONS_PAGE_ROUTE} component={Missions} />
				<Route exact={true} path={ROCKETS_PAGE_ROUTE} component={Rockets} />
				<Route exact={true} path={LAUNCHES_PAGE_ROUTE} component={Launches} />
				<Route exact={true} path={LAUNCHPADS_PAGE_ROUTE} component={Launchpads} />
				<Route exact={true} path={SHIPS_PAGE_ROUTE} component={Ships} />
			</Switch>
		 </Suspense>
    );
};

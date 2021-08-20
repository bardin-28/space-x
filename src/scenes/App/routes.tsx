import React, {FC, lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {HOME_ROUTE} from "constants/routes";
import {Preloader} from "components";

const Home = lazy(() => import('../Home/index'))

export const Routes: FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Preloader/>}>
            <Switch>
                <Route exact={true} path={HOME_ROUTE} component={Home} />
            </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

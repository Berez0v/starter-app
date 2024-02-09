import Home from "./pages/Home";
import Charts from "./pages/Charts";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'charts-route',
        title: 'Charts',
        path: '/charts',
        enabled: true,
        component: Charts
    },
]
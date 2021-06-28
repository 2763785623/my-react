import Index from "../pages/home/Index";
import Login from "../pages/Login";
import List from "../pages/home/List";
import Redact from "../pages/home/Redact";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: PageNotFound
    }
]

export const adminRoutes = [
    {
        path: '/home/index',
        component: Index
    },
    {
        path: '/home/list',
        component: List,
        exact: true
    },
    {
        path: '/home/list/redact/:id',
        component: Redact
    }
]
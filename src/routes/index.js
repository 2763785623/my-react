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
        component: Index,
        isShow: true,
        title: "面板",
        icon: 'icon-Halloween-1'
    },
    {
        path: '/home/list',
        component: List,
        isShow: true,
        exact: true,
        title: "商品",
        icon: 'icon-pingguo'
    },
    {
        path: '/home/list/redact/:id',
        component: Redact,
        isShow: false
    }
]
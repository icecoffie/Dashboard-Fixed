import { lazy } from 'react';

const OrderManagement = lazy(() => import('../pages/OrderManagement'));
const CustomerDetails = lazy(() => import('../pages/CustomerDetails'));
const Categories = lazy(() => import('../pages/Categories'));
const Transaction = lazy(() => import('../pages/Transaction'));
const AddProduct = lazy(() => import('../pages/AddProduct'));
const AddType = lazy(() => import('../pages/AddTypeProduct'));
const AdminRole = lazy(() => import('../pages/AdminRole'));
const Settings = lazy(() => import('../pages/Settings'));

const coreRoutes = [
  {
    path: '/OrderManagement',
    title: 'OrderManagement',
    component: OrderManagement,
  },
  {
    path: '/CustomerDetails',
    title: 'CustomerDetails',
    component: CustomerDetails,
  },
  {
    path: '/Categories',
    title: 'Categories',
    component: Categories,
  },
  {
    path: '/Transaction',
    title: 'Transaction',
    component: Transaction,
  },
  {
    path: '/AddProduct',
    title: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/AddType',
    title: 'AddType',
    component: AddType,
  },
  {
    path: '/AdminRole',
    title: 'AdminRole',
    component: AdminRole,
  },
  {
    path: '/Settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;

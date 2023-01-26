/* eslint-disable  */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import OrderPages from '@/pages/OrderPages';
import OrderInfoPage from '@/pages/OrderInfoPage';

Vue.use(VueRouter);

const routes = [{
    name: 'main',
    component: MainPage,
    path: '/',
  },
  {
    name: 'product',
    component: ProductPage,
    path: '/product/:id',
  },
  {
    name: 'cart',
    component: CartPage,
    path: '/cart',
  },
  {
    name: 'order',
    component: OrderPages,
    path: '/order',
  },
  {
    name: 'orderinfo',
    component: OrderInfoPage,
    path: '/order/:id',
  },
  {
    name: 'notFound',
    component: NotFoundPage,
    path: '*',
  },

];

const router = new VueRouter({
  routes,
});

export default router;

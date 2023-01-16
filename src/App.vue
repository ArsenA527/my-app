<template>
  <component
    :is="currentPageComponent"
    :page-params="currentPageParams"
  />
</template>

<script>

import eventBus from './eventBus';
import MainPage from './pages/MainPage.vue';
import ProductPage from './pages/ProductPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {

  components: {
    MainPage,
    ProductPage,
    NotFoundPage,
  },

  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },

  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    };
  },

  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    },
  },

  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },
};
</script>

<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductsFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :color-value.sync="filterColor"
      />
      <section class="catalog">
        <ProductsList :products="products" />
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>
    </div>
  </main>
</template>

<script>

import products from './data/products';
import ProductsList from './components/ProductsList.vue';
import BasePagination from './components/BasePagination.vue';
import ProductsFilter from './components/ProductsFilter.vue';

export default {
  name: 'App',

  components: {
    ProductsList,
    BasePagination,
    ProductsFilter,
  },

  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: 0,

      page: 1,
      productsPerPage: 3,
    };
  },

  computed: {
    filteredProducts() {
      let filterProducts = products;
      if (this.filterPriceFrom > 0) {
        filterProducts = filterProducts.filter((product) => product.price > this.filterPriceFrom);
      }
      if (this.filterPriceTo > 0) {
        filterProducts = filterProducts.filter((product) => product.price < this.filterPriceTo);
      }
      if (this.filterCategoryId) {
        filterProducts = filterProducts.filter((product) => product.categoryId
          === this.filterCategoryId);
      }
      if (this.filterColor) {
        // eslint-disable-next-line max-len
        filterProducts = filterProducts.filter((product) => product.colors.includes(this.filterColor));
      }
      return filterProducts;
    },

    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>

<template>
  <section class="catalog">
  <ul class="catalog__list">
    <ProductsItem
        v-for="(product) in products"
        :key="product.id"
        :product="product"
      />
  </ul>
</section>
</template>

<script>

import ProductsItem from './ProductsItem.vue';

export default {
  components: {
    ProductsItem,
  },
  props: ['products'],
};
</script>

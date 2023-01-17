<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <li  class="catalog__item">
      <router-link
        href="#"
        class="catalog__pic"
        :to="{name: 'product', params: {id: product.id}}"
      >
        <img :src="product.imgsrc" :alt="product.title">
      </router-link>
      <div class="catalog__info">
        <h3 class="catalog__title">
          <a href="#">
            {{ product.title }}
          </a>
        </h3>
        <span class="catalog__price">
          {{ product.price | numberFormat}}
        </span>
      </div>

      <ul class="colors colors--black">
        <li class="colors__item" v-for="clr in product.colors" :key="clr.id">
          <label class="colors__label">
            <input type="radio" class="colors__radio sr-only" :value="clr.code" v-model="color">
            <span class="colors__value" :style="{'background-color': clr.code}"></span>
          </label>
        </li>
      </ul>
    </li>

  </div>
</template>

<script>

import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      color: '#73b6ea',
    };
  },

  filters: {
    numberFormat,
  },

  props: ['product'],

  methods: {
    gotoPage,
  },
};
</script>

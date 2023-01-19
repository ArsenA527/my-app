<!-- eslint-disable -->
<template>
  <div>
    <li class="cart__item product">
      <div class="product__pic">
        <img
          :src="item.product.imgsrc"
          width="120"
          height="120"
          :alt="item.product.title"
        >
      </div>
      <h3 class="product__title">
        {{ item.product.title }}
      </h3>
      <span class="product__code">
        Артикул: {{ item.product.id }}
      </span>
      <BaseAmountChanges
          :amount.sync="amount"
          class="product__counter"
        />
      <b class="product__price">
        {{ (item.amount * item.product.price) | numberFormat }} ₽
      </b>
      <button
        class="product__del button-del"
        type="button"
        aria-label="Удалить товар из корзины"
        @click.prevent="deleteProduct(item.productId)"
      >
        <svg width="20" height="20" fill="currentColor">
          <use xlink:href="#icon-close"></use>
        </svg>
      </button>
    </li>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex';
import numberFormat from '@/helpers/numberFormat';
import BaseAmountChanges from '@/components/BaseAmountChanges.vue';

export default {

  components: { BaseAmountChanges },
  props: ['item'],

  filters: {
    numberFormat,
  },

  computed: {
    amount: {
      get() {
        return this.item.amount;
      },

      set(value) {
        this.$store.dispatch('updateCartProductAmount', { productId: this.item.productId, amount: value });
      },
    },
  },

  methods: {
    ...mapActions(['deleteProductFromCart']),

    deleteProduct(productId) {
      this.deleteProductFromCart(productId);
    },

    increment() {
      this.amount++;
    },

    decrement() {
      this.amount--;
    },
  },
};
</script>

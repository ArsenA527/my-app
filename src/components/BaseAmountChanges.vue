<!-- eslint-disable -->
<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="computedAmount--">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model="computedAmount">

    <button type="button" aria-label="Добавить один товар" @click.prevent="computedAmount++">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  model: {
    prop: 'amount',
    event: 'count',
  },

  props: ['amount'],

  computed: {
    computedAmount: {
      get() {
        return this.amount;
      },

      set(value) {
        if (value > 0) {
          this.$emit('update:amount', value);
        }
      },
    },
  },

  methods: {
    decrementItem() {
      this.$emit('decrement');
    },
    incrementItem() {
      this.$emit('increment');
    },
  },
};
</script>

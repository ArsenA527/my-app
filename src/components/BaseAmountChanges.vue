<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="decrementItem">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model="amount">

    <button type="button" aria-label="Добавить один товар" @click.prevent="incrementItem">
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

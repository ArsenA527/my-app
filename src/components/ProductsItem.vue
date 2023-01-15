<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <a href="#" class="catalog__pic">
      <img :src="imgsrc" :alt="title">
    </a>
    <div class="catalog__info">
      <h3 class="catalog__title">
        <a href="#">
          {{ title }}
        </a>
      </h3>
      <span class="catalog__price">
        {{ price }}
      </span>
    </div>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="clr in colors" :key="clr.id">
        <label class="colors__label">
          <input type="radio" class="colors__radio sr-only" :value="clr.code" v-model="color">
          <span class="colors__value" :style="{'background-color': clr.code}"></span>
        </label>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#73b6ea',
    };
  },

  props: ['imgsrc', 'title', 'price', 'colors'],
};
</script>

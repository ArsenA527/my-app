<!-- eslint-disable -->
<template>
    <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="cart.html">
            Корзина
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        3 товара
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST" @submit.prevent="order">
        <div class="cart__field">
          <div class="cart__data">

            <BaseFormText
              v-model="formData.name"
              :error="formError.name"
              title="ФИО"
              placeholder="Введите ваше полное имя"
            />

            <BaseFormText
              v-model="formData.address"
              :error="formError.address"
              title="Адрес доставки"
              placeholder="Введите ваш адрес"
            />

            <BaseFormText
              v-model="formData.phone"
              :error="formError.phone"
              type="tel"
              title="Телефон"
              placeholder="Введите ваш телефон"
            />

            <BaseFormText
              v-model="formData.email"
              :error="formError.email"
              type="email"
              title="Email"
              placeholder="Введите ваш Email"
            />

            <BaseFormTextarea
              v-model="formData.comment"
              :error="formError.comment"
              title="Комментарий к заказу"
              placeholder="Ваши пожелания"
            />

          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="0" checked>
                  <span class="options__value">
                    Самовывоз <b>бесплатно</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                  <span class="options__value">
                    Курьером <b>500 ₽</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="card">
                  <span class="options__value">
                    Картой при получении
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                  <span class="options__value">
                    Наличными при получении
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li
              class="cart__order"
              v-for="product in products"
              :key="product.productId"
              >
              <h3> {{ product.product.title }} </h3>
              <b>{{ product.product.price | numberFormat }} ₽</b>
              <span>Артикул: {{ product.product.id }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>{{ totalAmount }}</b> товара на сумму <b>{{ totalPrice | numberFormat }} ₽</b></p>
          </div>

          <button
            class="cart__button button button--primery"
            type="submit"
          >
            <img v-if="spinnerLoader" src="img/spinner.gif" width="60px" height="60px"/>
            <span v-else>Оформить заказ</span>
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{ formErrorMessage }}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>

/* eslint-disable */
import { mapGetters } from 'vuex';
import axios from 'axios';
import {
  API_BASE_URL,
} from '@/config';
import BaseFormTextarea from '@/components/BaseFormTextarea.vue';
import BaseFormText from '@/components/BaseFormText.vue';
import numberFormat from '@/helpers/numberFormat';

export default {
  components: {
    BaseFormTextarea,
    BaseFormText,
  },

  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',

      spinnerLoader: false,
    };
  },

  computed: {
    ...mapGetters({ products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', totalAmount: 'cartTotalAmount' }),
    products() {
      return this.$store.getters.cartDetailProducts;
    },
  },

  filters: {
    numberFormat,
  },

  methods: {

    order() {
      this.spinnerLoader = true;
      this.formError = {};
      this.formErrorMessage = '';

      axios.post(`${API_BASE_URL}/api/orders`, {
        ...this.formData,
      }, {
        params: {
          userAccessKey: this.$store.state.userAccessKey,
        },
      })
      .then(response => {
        this.$store.commit('resetCart')
        this.$store.commit('updateOrderInfo', response.data);
        this.$router.push({name: 'orderinfo', params: { id: response.data.id } })
      })
      .catch(error => {
        this.formError = error.response.data.error.request || {};
        this.formErrorMessage = error.response.data.error.message || '';
      });
    },
  },
};
</script>

/* eslint-disable */
import BaseFormField from '@/components/BaseFormField.vue';

export default {
  components: {
    BaseFormField,
  },

  props: ['title', 'error', 'placeholder', 'value'],

  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', value);
      },
    },
  },
};

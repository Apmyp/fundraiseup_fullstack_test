<template>
  <Form
    :presets="presets"
    :currencies="currencies"
  ></Form>
</template>

<script>
import settings from "../../../common/settings.json";
import Form from "./Form.vue";

export default {
  components: { Form },
  computed: {
    presets: () => {
      return settings.presets;
    },
    currencies: () => {
      return settings.currencies;
    },
  }
}
</script>
<template>
  <Form
    :presets="presets"
    :currencies="currencies"
    @submit="handleSubmit"
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
  },
  methods: {
    handleSubmit: (data) => {
      fetch("/donate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      })
      .then(response => response.json())
      .then(() => alert("Thank you for your donation!"));
    }
  }
}
</script>
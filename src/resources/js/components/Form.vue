<template>
  <div class="form-wrapper">
    <form class="form">
      <div class="form__preset-buttons">
        <button 
        class="form__preset-button button button--default"
        v-for="preset in presets"
        :key="preset"
        >{{ preset }}</button>
      </div>

      <button class="form__submit-button button button--primary">Donate</button>
    </form>
  </div>
</template>

<script>
import settings from "../../../common/settings.json";

export default {
  computed: {
    presets: () => {
      return settings.presets;
    }
  }
}
</script>

<style>
  .form {
    width: 320px;
    border-radius: 5px;
    background: #f5f5f5;
    border: 1px solid #d4d4d4;
    padding: 28px;
  }

  .form__submit-button {
    margin-top: 24px;
  }

  .form__preset-buttons {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 33%;
    justify-content: space-between;
  }

  .form__preset-buttons .form__preset-button {
    width: calc(33% - 4px);
    margin-bottom: 8px;
  }
</style>
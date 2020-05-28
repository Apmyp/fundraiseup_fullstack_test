<template>
  <div class="form-wrapper">
    <form class="form">
      <div class="form__preset-buttons">
        <button 
        type="button"
        class="form__preset-button button"
        :class="presetClasses(preset)"
        v-for="preset in presets"
        :key="preset"
        @click="handlePresetClick(preset)"
        >{{ formatAmount(preset) }}</button>
      </div>
      <div class="form__input-wrapper">
        <label 
        class="form__currency-label"
        for="form__input"
        >{{ currency.symbol }}</label>
        <input 
          id="form__input" 
          class="form__input" 
          type="text"
          inputmode="numeric"
          placeholder="Other"
          @keypress="ignoreNotNumbers"
          @input="handleInput"
          :value="formattedSuggestion"
          >
        <select class="form__select">
          <option
            v-for="currency in currencies" 
            :key="currency.code" 
            :value="currency.code">{{ currency.code }}</option>
        </select>
      </div>

      <button type="button" class="form__submit-button button button--large button--primary">Donate</button>
    </form>
  </div>
</template>

<script>
import { formatAmount } from "../utils";

export default {
  props: {
    presets: {
      required: true
    },
    currencies: {
      required: true
    },
  },
  data() {
    return {
      currencyCode: "USD",
      suggestion: null
    };
  },
  computed: {
    currency() {
      return this.currencies.find(c => c.code === this.currencyCode);
    },
    formattedSuggestion() {
      return this.suggestion && formatAmount(this.suggestion);
    }
  },
  methods: {
    formatAmount(amount) {
      return this.currency.symbol + formatAmount(amount);
    },
    presetClasses(preset) {
      return {
        'button--primary': this.suggestion === preset,
        'button--default': this.suggestion !== preset,
      };
    },
    handlePresetClick(preset) {
      this.suggestion = preset;
    },
    handleInput(e) {
      const inputValue = e.target.value.replace(/[^\d]/g, "");
      this.suggestion = inputValue && Number(inputValue);
    },
    ignoreNotNumbers(e) {
      const numberCharCodes = e.keyCode >= 48 && e.keyCode <= 57;

      if (numberCharCodes) {
        return true;
      }

      e.preventDefault();
    },
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
    margin-top: 36px;
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

  .form__preset-button:hover, 
  .form__preset-button:focus {
    outline: none;
  }

  .form__input-wrapper {
    background: #fafafa;
    border: 1px solid #8d929f;
    border-radius: 5px;
    display: flex;
    margin-top: 6px;
  }

  .form__input-wrapper:focus-within {
    border-color: transparent;
    box-shadow: 0 0 0 2px #76a2e4;
  }

  .form__currency-label {
    cursor: pointer;
    padding: 10px 8px;
    font-size: 18px;
    line-height: 36px;
    color: #515151;
  }

  .form__input {
    cursor: pointer;
    border: none;
    background: none;
    flex-grow: 1;
    padding: 10px 4px;
    color: #4d86db;
    font-size: 30px;
    line-height: 30px;
    width: 100%;
    font-weight: bold;
  }

  .form__input:focus {
    outline: none;
  }

  .form__select {
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 10px 20px 10px 12px;
    font-size: 18px;
    line-height: 30px;
    color: #515151;

    background-image: url("data:image/svg+xml,%3Csvg width='8' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg' class='d-block'%3E%3Cpath d='M8 0H0l4 4 4-4z' fill='%23515151'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - 8px) calc(50% + 1px);
  }

  .form__select:focus {
    outline: none;
  }
</style>
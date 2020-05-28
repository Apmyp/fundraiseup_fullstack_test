<template>
  <div class="centered">
    <FormContainer></FormContainer>
  </div>
</template>

<script>
import FormContainer from "./FormContainer.vue";

export default {
  components: { FormContainer }
}
</script>

<style>
  .centered {
    width: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
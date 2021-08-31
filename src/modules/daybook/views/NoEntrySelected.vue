<template>
  <div class="d-flex justify-content-center">
    <h1 class="aling-self-center">
      No hay nada Seleccionado
    </h1>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("@/modules/daybook/components/Fab")),
  },
};
</script>

<style lang="scss">
div {
  height: 100%;
}
</style>

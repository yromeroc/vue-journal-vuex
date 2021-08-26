<template>
  <div
    class="mb-3 pointer p-2 entry-container"
    @click="$router.push({ name: 'entry-view', params: { id: 100 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-15 fw-bold">15</span>
      <span class=",x-1 fs-5">Julio</span>
      <span class="mx-2 fw-ligth">2021, Jueves</span>
    </div>
    <div class="entry-description">
      Exercitation in eiusmod dolor irure cupidatat cillum. Excepteur aliqua
      aliqua aute veniam sunt nulla. Laboris esse ex commodo dolore eu deserunt.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>

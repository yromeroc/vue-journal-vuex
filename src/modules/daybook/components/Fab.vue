<template>
  <button class="btn btn-primary">
    <i :class="!id ? 'fas fa-2x fa-plus' : 'fas fa-2x fa-save'"></i>
  </button>
</template>

<script>
export default {
  props: {
    id: { type: String, required: false },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 80px;
  position: fixed;
  right: 20px;
  width: 80px;
}
</style>

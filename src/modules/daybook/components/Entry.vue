<template>
  <div
    class="mb-3 pointer p-2 entry-container"
    @click="$router.push({ name: 'entry-view', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-15 fw-bold">{{ day }}</span>
      <span class=",x-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-ligth">{{ yearDay }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
export default {
  props: {
    entry: { type: Object, required: true },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      console.log(date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      console.log(date);
      return months[date.getMonth()];
    },
    yearDay() {
      const date = new Date(this.entry.date);
      console.log(date);
      return `${date.getFullYear()}, ${days[date.getDay()]}`;
    },
  },
};
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

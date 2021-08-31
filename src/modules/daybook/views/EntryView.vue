<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 f2-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <button class="btn btn-danger mx-2">
          Borrar <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Subir Foto <i class="fas fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
    </div>
    <img
      src="https://nintendosmash.com/wp-content/uploads/2020/10/cyber-punk-game-for-fan.jpg"
      alt="Cyber Punk"
      class="img-thumbnail"
    />
  </template>

  <Fab :id="$route.params.id" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import getMonthDayYear from "../helpers/getDayMonthYear";

export default {
  props: {
    id: { type: String, required: true },
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab")),
  },
  methods: {
    loadEntry() {
      const entry = this.getEntriesById(this.id);
      if (!entry) this.$router.push({ name: "no-entry" });
      this.entry = entry;
      console.log("ENTRY", entry);
    },
  },
  data() {
    return {
      entry: null,
    };
  },

  created() {
    this.loadEntry();
    return;
  },
  computed: {
    //BUSCAR EL JOURNAL
    ...mapGetters("journal", ["getEntriesById"]),
    day() {
      const { day } = getMonthDayYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getMonthDayYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getMonthDayYear(this.entry.date);
      return yearDay;
    },
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color: black, $alpha: 0.2);
}
</style>

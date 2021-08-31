<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
        v-model="term"
      />
    </div>
    <div class="entry-scrollarea">
      <Entry v-for="entry of entriesByTerm" :key="entry.id" :entry="entry" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry")),
  },
  computed: {
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
    ...mapGetters("journal", ["getEntriesByTerm"]),
  },
  data() {
    return {
      term: "",
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  height: 50px;
}
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow: scroll;
}
</style>

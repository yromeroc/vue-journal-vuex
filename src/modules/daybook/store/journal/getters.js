/* export const MyGetter = (state) => {
    return state.algo
} */

export const getEntriesByTerm = (state) => (term = "") => {
  if (term.length === 0) {
    return state.entries;
  }

  return state.entries.filter((entry) =>
    entry.text.toLowerCase().includes(term.toLocaleLowerCase())
  );
};

export const getEntriesById = (state) => (id) => {
  const entry = state.entries.find((entry) => entry.id === id);
  //! No puedo retornar el staet porque el state no se modifica
  //! Por ello se crea una variable que obtenga la referencia del state
  if (!entry) return;
  return { ...entry };
};

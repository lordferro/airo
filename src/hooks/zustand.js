import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const useRecepieStore = create(devtools((set, get) => ({
  recepies: [],
  checked: [],
  page: 1,
  currentRecepie: {},
  startIndex: 0,
  endIndex: 15,
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  increaseIndex: () =>
    set((state) => ({
      startIndex: state.startIndex + 5,
      endIndex: state.endIndex + 5,
    })),
  getRecepieById: (id) => {
    return get().recepies.find((el) => el.id === Number(id));
  },
  fetch: async () => {
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${get().page}`
    );
    set({ recepies: [...get().recepies, ...data] });
  },
})));

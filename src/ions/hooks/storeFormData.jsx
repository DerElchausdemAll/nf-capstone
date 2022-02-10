import create from "zustand";
import axios from "axios";

const useStore = create(set => {
	return {
		itemCards: [],
		setItemCards: items => set(state => ({ itemCards: [...state.itemCards, { ...items }] })),
		fetchData: async () => {
			console.log("attempting to fetch");
			const response = await axios.get("/api/cards");
			const result = response.data;

			set(() => ({ itemCards: result }));
		},
		updateData: async (_id, item) => {
			console.log("updating database");
			item.checked = !item.checked;
			const { data } = await axios.put(`/api/cards/${_id}`, item);

			set(state => {
				const update = [...state.itemCards];
				const index = update.findIndex(card => card.id === _id);
				update[index] = data;
				return {
					itemCards: update,
				};
			});
		},
	};
});

export default useStore;

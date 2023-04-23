import { createSlice } from "@reduxjs/toolkit";

const PackAddOns = createSlice({
	name: "PackAddOns",
	initialState: { value: <object[]>[] },
	reducers: {
		add_AddOn: (state, { payload }) => {
			const initial = state.value.filter((item) => item.id !== payload.id);

			state.value = [...initial, payload];
		},
		remove_AddOn: (state, { payload }) => {
			state.value = state.value.filter((item) => item.id !== payload);
		},
	},
});

export const { add_AddOn, remove_AddOn } = PackAddOns.actions;
export default PackAddOns.reducer;

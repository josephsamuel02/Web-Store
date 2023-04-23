import { configureStore } from "@reduxjs/toolkit";
import PacksSliceReducer from "./Redux/Reducers/PacksSlice";
import PackAddOnsReducer from "./Redux/Reducers/PackAddOns";

export const store = configureStore({
	reducer: {
		PacksSlice: PacksSliceReducer,
		PackAddOns: PackAddOnsReducer,
	},
});

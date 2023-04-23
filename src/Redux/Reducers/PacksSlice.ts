import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 0,
		pack_type: "Mini Pack",
		num_of_stores: 1,
		store_items: 15,
		email_notifications: false,
		WhatsApp: true,
		sms: false,
		hosting_months: 1,
		online_payments: false,
		logo_design: false,
		promot: false,
		price: 5000,
	},
	{
		id: 1,
		pack_type: "Starter Pack",
		num_of_stores: 1,
		store_items: 30,
		email_notifications: true,
		WhatsApp: true,
		sms: false,
		hosting_months: 3,
		online_payments: false,
		logo_design: false,
		promot: false,
		price: 10000,
	},
	{
		id: 2,
		pack_type: "Business Pack",
		num_of_stores: 2,
		store_items: 60,
		email_notifications: true,
		WhatsApp: true,
		sms: true,
		hosting_months: 6,
		online_payments: false,
		logo_design: false,
		promot: false,
		price: 40000,
	},
	{
		id: 3,
		pack_type: "Premium Pack",
		num_of_stores: 2,
		store_items: 100,
		email_notifications: true,
		WhatsApp: true,
		sms: true,
		hosting_months: "1 year",
		online_payments: false,
		logo_design: false,
		promot: false,
		price: 70000,
	},
];

const PacksSlice = createSlice({
	name: "packsSlice",
	initialState: { value: initialState },
	reducers: {},
});

export default PacksSlice.reducer;

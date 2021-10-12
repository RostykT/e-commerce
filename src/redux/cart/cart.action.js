import { cartActionType } from "./cart.types";

export const ToggleCartHidden = () => ({
	type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const AddItem = (item) => ({
	type: cartActionType.ADD_ITEM,
	payload: item,
});

import { govHandler } from "./Handlers/GovernorHandler.js";
import { facilityHandler } from "./Handlers/FacilityHandler.js";
import { mineralSelectionHandler } from "./Handlers/MineralSelectionHandler.js";
import { SpacePurchaseHandler } from "./Handlers/SpaceCartButtonHandler.js";
import { stateChangeHandler } from "./Handlers/StateChangeHandler.js";

export const createEventListeners = () => {
	document.addEventListener("change", govHandler);
	document.addEventListener("change", facilityHandler);
	document.addEventListener("change",mineralSelectionHandler);
	document.addEventListener("click", SpacePurchaseHandler);
	document.addEventListener("stateChanged", stateChangeHandler)
};






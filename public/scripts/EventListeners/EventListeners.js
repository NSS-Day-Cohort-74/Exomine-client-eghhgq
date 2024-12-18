import { genColonyHTML } from "../MineralsDisplay/ColonyMinerals.js";
import { genFacilityHTML } from "../MineralsDisplay/FacilityMinerals.js";

export const createEventListeners = () => {
	document.addEventListener("change", govHandler);
	document.addEventListener("change", facilityHandler);
};

const govHandler = async ({ target: { name, options } }) => {
	if (name === "governers") {
		console.log(options[options.selectedIndex].dataset.name);

		document.querySelector("#colony-minerals").innerHTML = await genColonyHTML(
			options[options.selectedIndex].dataset.colony_id,
		);
	}
};
const facilityHandler = async (event) => {
	if (event.target.name === "facilities") {
		console.log(
			event.target.options[event.target.options.selectedIndex].dataset.name,
		);
		document.querySelector("#facility-minerals").innerHTML =
			await genFacilityHTML(event.target.options.selectedIndex);
	}
};


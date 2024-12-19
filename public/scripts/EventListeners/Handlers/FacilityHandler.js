import { genFacilityHTML } from "../../MineralsDisplay/FacilityMinerals.js";
import { setFacility } from "../../TransientState.js";

export const facilityHandler = async (event) => {
	if (event.target.name === "facilities") {
		document.querySelector("#space-purchase").removeAttribute("disabled");
		document.querySelector("#facility-minerals").innerHTML =
			await genFacilityHTML(event.target.options.selectedIndex);
		if (parseInt(event.target.options.selectedIndex) === 0) {
			document
				.querySelector("#space-purchase")
				.setAttribute("disabled", "disabled");
		}
    setFacility(event.target.options[event.target.options.selectedIndex].value)
    }
};
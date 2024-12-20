import { genFacilityHTML } from "../../MineralsDisplay/FacilityMinerals.js";
import { setFacility } from "../../TransientState.js";



export const facilityHandler = async ({target: { options,name } }) => {
	if (name === "facilities") {
		document.querySelector("#facility-minerals").innerHTML =
			await genFacilityHTML(options.selectedIndex);
		if (parseInt(options.selectedIndex) === 0) {
			document.querySelector("#space-purchase").setAttribute("disabled", "disabled");
		} else if ( options[options.selectedIndex].dataset.status === "active") {
			document.querySelector("#space-purchase").removeAttribute("disabled");
		} else {
			document
			.querySelector("#space-purchase")
			.setAttribute("disabled", "disabled")
		}
		document.querySelector("#whatToBuy").innerHTML = ""
		
    setFacility(options[options.selectedIndex].value)
    }
	
};

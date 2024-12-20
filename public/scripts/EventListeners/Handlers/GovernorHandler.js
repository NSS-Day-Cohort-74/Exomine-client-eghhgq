import { genColonyHTML } from "../../MineralsDisplay/ColonyMinerals.js";
import { setColony } from "../../TransientState.js";

export const govHandler = async ({ target: { name, options } }) => {
	if (name === "governers") {
		if (options[options.selectedIndex].value === "NaN") {
			document
				.querySelector("#space-purchase")
				.setAttribute("disabled", "disabled");
		}
	

		document.querySelector("#colony-minerals").innerHTML = await genColonyHTML(
			options[options.selectedIndex].dataset.colony_id,
		);
		setColony(options[options.selectedIndex].dataset.colony_id);
	}
};


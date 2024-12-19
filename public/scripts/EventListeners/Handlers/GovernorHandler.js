import { genColonyHTML } from "../../MineralsDisplay/ColonyMinerals.js";
import { setColony } from "../../TransientState.js";

export const govHandler = async ({ target: { name, options } }) => {
	if (name === "governers") {
		console.log(options[options.selectedIndex].dataset.name);

		document.querySelector("#colony-minerals").innerHTML = await genColonyHTML(
			options[options.selectedIndex].dataset.colony_id,
		);
        setColony(options[options.selectedIndex].dataset.colony_id)
	}
};
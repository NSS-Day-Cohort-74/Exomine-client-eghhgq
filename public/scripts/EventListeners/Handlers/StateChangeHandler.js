import { genFacilityHTML } from "../../MineralsDisplay/FacilityMinerals.js"
import { getFacility, getColony } from "../../TransientState.js"
import { genColonyHTML } from "../../MineralsDisplay/ColonyMinerals.js"
export const stateChangeHandler = async () => {
    document.querySelector("#facility-minerals").innerHTML = await genFacilityHTML(getFacility())
    document.querySelector("#colony-minerals").innerHTML = await genColonyHTML(getColony())
}
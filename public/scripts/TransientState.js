import { genFacilityHTML } from "./MineralsDisplay/FacilityMinerals.js"
const state = {}

export const setColony = (colonyId) => {
    state.selectedColony = parseInt(colonyId)
    document.dispatchEvent(new CustomEvent("GovSelected"))
    console.log(state)
}
export const setFacility = (facId) => {
    state.selectedFacility = parseInt(facId)
    document.dispatchEvent(new CustomEvent("facilitySelected"))
    console.log(state)
}
export const setMineral = (minId) => {
    state.selectedMineral = parseInt(minId)
    document.dispatchEvent(new CustomEvent("mineralSelected"))
    console.log(state)
}


export const purchaseMineral = async () => {
    /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */
   updateFacilityMineral()
   document.querySelector("#facility-minerals").innerHTML = await genFacilityHTML(state.selectedFacility)

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

const updateFacilityMineral = async () => {
    const fetchfm = await fetch("http://localhost:3000/facilityMinerals")
    const fm = await fetchfm.json()

    const ffm = fm.filter((fm)=> fm.facilityId === state.selectedFacility)
    const obj = ffm.find((fm)=> fm.mineralId === state.selectedMineral)
    const endpointId = obj.id
    obj.amount--

    const res = await fetch("http://localhost:3000/facilityMinerals/"+ endpointId, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(obj),
    })
    return res
}

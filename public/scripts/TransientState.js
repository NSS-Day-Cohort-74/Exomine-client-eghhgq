
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
export const getFacility = () => state.selectedFacility

export const getColony = () => state.selectedColony

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
    await updateFacilityMineral()
    await updateColonyMinerals()


    document.dispatchEvent(new CustomEvent("stateChanged"))
}

const updateFacilityMineral = async () => {
    const fetchFacilityMinerals = await fetch("http://localhost:3000/facilityMinerals")
    const facilityMinerals = await fetchFacilityMinerals.json()

    const filteredFacilityMinerals = facilityMinerals.filter((fm) => fm.facilityId === state.selectedFacility)
    const obj = filteredFacilityMinerals.find((fm) => fm.mineralId === state.selectedMineral)
    const endpointId = obj.id
    obj.amount--

    const res = await fetch("http://localhost:3000/facilityMinerals/" + endpointId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    })
    return res
}

const updateColonyMinerals = async () => {
    const fetchColonyMinerals = await fetch("http://localhost:3000/colonyMinerals")
    const colonyMinerals = await fetchColonyMinerals.json()

    const filteredColonyMinerals = colonyMinerals.filter((cm) => cm.colonyId === state.selectedColony)
    let method = "POST"
    let object = {}

    if (!filteredColonyMinerals) {
        let endpoint = ""
        object = {
            "amount": 1,
            "colonyId": state.selectedColony,
            "mineralId": state.selectedMineral
        }
        placeObj(method, endpoint, object)
    } else {
        object = filteredColonyMinerals.find((fm) => fm.mineralId === state.selectedMineral)
        if (!object) {
            method = "POST"
            object = {
                "amount": 1,
                "colonyId": state.selectedColony,
                "mineralId": state.selectedMineral
            }
            placeObj(method, "", object)
        } else {
            method = "PUT"
            endpoint = object.id
            object.amount++
            placeObj(method, endpoint, object)
        }
    }
    return object
}
const placeObj = async (method, endpoint, object) => {
    const res = await fetch("http://localhost:3000/colonyMinerals/" + endpoint, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
    })
    return res

}
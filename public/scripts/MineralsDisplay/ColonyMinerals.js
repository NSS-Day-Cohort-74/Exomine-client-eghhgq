const fetchColonyMinerals = async () => {
    const res = await fetch("http://localhost:3000/colonyMinerals?_expand=mineral&_expand=colony")
    const data = await res.json()
    return data
}

export const genColonyHTML = async (colonyId) => {
    const colonyMinerals = await fetchColonyMinerals()
    const filtered = colonyMinerals.filter((obj)=> obj.colonyId === colonyId)
    let colonyMineralsHtml = `<header>
                                ${filtered.find((col)=> col.colonyId === colonyId).colony.name} Minerals</header>
                                <ul>`
    colonyMineralsHtml += filtered.map((mineral)=> `<li>${mineral.mineral.name} ${mineral.amount}</li>`).join("")
    colonyMineralsHtml += "</ul>"
    return colonyMineralsHtml
}
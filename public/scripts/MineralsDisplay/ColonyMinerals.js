const fetchColonyMinerals = async () => {
	const res = await fetch(
		"http://localhost:3000/colonyMinerals?_expand=mineral&_expand=colony",
	);
	const data = await res.json();
	return data;
};

const findColony = async (colonyId) => {
	const res = await fetch("http://localhost:3000/colonies");
	const data = await res.json();
	if (colonyId === undefined) {
		return "Colony";
	}
	return data.find((col) => col.id === parseInt(colonyId)).name;
};

export const genColonyHTML = async (colonyId) => {
	const colonyMinerals = await fetchColonyMinerals();
	const filtered = colonyMinerals.filter(
		(obj) => obj.colonyId === parseInt(colonyId),
	);
	let colonyMineralsHtml = `<h3>
                                ${await findColony(colonyId)} Minerals</h3>
                              <ul>`;
	if (filtered.length === 0) {
		return colonyMineralsHtml;
	}
	colonyMineralsHtml += filtered
		.map((mineral) => `<li>${mineral.mineral.name} ${mineral.amount}</li>`)
		.join("");
	colonyMineralsHtml += "</ul>";
	return colonyMineralsHtml;
};

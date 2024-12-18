/* 
api call to get minerals (fetch)
.filter(()=>{}) FacilityMinerals to only get minerals in a specific facility
create radio btns with data attribute based off filter data
*/

const fetchFacilityMinerals = async () => {
	const res = await fetch(
		"http://localhost:3000/facilityMinerals?_expand=mineral&_expand=facility",
	);
	const data = await res.json();
	return data;
};
const findFacility = async (facilityId) => {
	const res = await fetch("http://localhost:3000/facilities");
	const facilities = await res.json();
	const name = facilities.find(({ id }) => id === facilityId).name;
	console.log(name);
	return name;
};

export const genFacilityHTML = async (facilityId) => {
	const facilities = await fetchFacilityMinerals();
	const filtered = facilities.filter((facility) => facility.facilityId === facilityId);
	console.log(filtered);
	const radios = filtered
		.map((fac) => `<input type="radio"/>${fac.amount} tons of ${fac.mineral.name}`)
		.join("");

	return `<div><header>Facility Minerals for ${await findFacility(facilityId)}</header>${radios}</div>`;
};


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
	const facility = facilities.find(({ id }) => id === facilityId);
	if (facility === undefined) {
		return "";
	}
	return `for ${facility.name}`;
};

export const genFacilityHTML = async (facilityId) => {
	const facilities = await fetchFacilityMinerals();
	const filtered = facilities.filter(
		(facility) => facility.facilityId === facilityId,
	);
	console.log(filtered);
	const radios = filtered
		.map(
			(fac) =>
				`<div id="faMin"><input type="radio" name="facility-minerals" data-name="${fac.mineral.name}" data-id="${fac.mineral.id}"
			 />${fac.amount} tons of ${fac.mineral.name}</div>`,
		)
		.join("");

	return `<div><h3>Facility Minerals ${await findFacility(facilityId)}</h3>${radios}</div>`;
};


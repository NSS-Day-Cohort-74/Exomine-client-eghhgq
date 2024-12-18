/*
html gen for facility select menu
  1). fetch facilities from db
  2). map facilities to select opts
  3). join and return
*/

const fetchFacilities = async () => {
	const response = await fetch("http://localhost:3000/facilities");
	const facilities = await response.json();
	return facilities;
};

export const genFacilitiesSelectMenu = async () => {
	const facilities = await fetchFacilities();
	const facilitiesArray = facilities.map((facility) => {
		return `<option value = '${facility.id}'
        data-id = '${facility.id}'
        data-status = '${facility.status}'
        data-name = '${facility.name}'
        /> ${facility.name}`;
	});
	return `<p>Choose a facility</p>
          <select name="facilities">
            <option value="default"> Choose a facility...
            ${facilitiesArray.join("")}
          </select>`;
};

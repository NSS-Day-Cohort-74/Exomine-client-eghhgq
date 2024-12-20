/*
html gen for governer select menu
  1).fetch govs from database
  2). iterate over govs
        1). create select option for each gov and append to govhtml str
  3). return govhtml
*/

const fetchGovernors = () => {
	return fetch("http://localhost:3000/governors")
		.then((result) => result.json())
		.then((govs) => govs);
};

export const genGovernorSelectMenu = () =>
	fetchGovernors().then((govs) => {
		let govhtml = `<p>Choose a Governor</p>
                  <select name="governers">
                    <option value="NaN"> Choose a Governor... `;
		for (const gov of govs) {
			if (gov.status === "active") {
				govhtml += `
                <option value="${gov.id}"
                    data-id="${gov.id}"
                    data-name="${gov.name}"
                    data-status="${gov.status}"
                    data-colony_id="${gov.colonyId}"> ${gov.name}
                    `;
			}
		}
		govhtml += "</select>";
		return govhtml;
	});

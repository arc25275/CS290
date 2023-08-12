import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditTravelPageTable = ({ locationToEdit }) => {
	const [place, setPlace] = useState(locationToEdit.place);
	const [date, setDate] = useState(locationToEdit.date);
	const [length, setLength] = useState(locationToEdit.length);
	const cleandate = date ?? new Date().toISOString();
	const redirect = useNavigate();

	const editLocation = async () => {
		const response = await fetch(`/travel/${locationToEdit._id}`, {
			method: "PUT",
			body: JSON.stringify({
				place: place,
				date: cleandate,
				length: length,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.status === 200) {
			alert(`Edited location`);
		} else {
			const errMessage = await response.json();
			alert(
				`Editing location gave code ${response.status}. ${errMessage.Error}`
			);
		}
		redirect("/locations");
	};

	return (
		<>
			<article>
				<h2>Edit a location</h2>
				<p>Edit an existing location</p>
				<table id="location">
					<caption>Which location are you editing?</caption>
					<thead>
						<tr>
							<th>Place</th>
							<th>Date</th>
							<th>Length</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<label for="place">Location Name</label>
								<input
									type="text"
									placeholder={place}
									value={place}
									onChange={e => setPlace(e.target.value)}
									id="place"
								/>
							</td>

							<td>
								<label for="date">Trip Date</label>
								<input
									type="text"
									value={cleandate.slice(0, 10)}
									placeholder={cleandate}
									onChange={e => setDate(e.target.value)}
									id="date"
								/>
							</td>

							<td>
								<label for="length">Length of Trip</label>
								<input
									type="number"
									placeholder={length}
									value={length}
									onChange={e => setLength(e.target.value)}
									id="length"
								/>
							</td>

							<td>
								<label for="submit">Commit</label>
								<button type="submit" onClick={editLocation} id="submit">
									Edit
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</article>
		</>
	);
};
export default EditTravelPageTable;

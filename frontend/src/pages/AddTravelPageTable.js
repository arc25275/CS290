import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

export const AddTravelPageTable = () => {
	const [place, setPlace] = useState("");
	const [date, setDate] = useState("");
	const [length, setLength] = useState("");

	const redirect = useNavigate();

	const addLocation = async () => {
		const newLocation = { place: place, date: date, length: length };
		const response = await fetch("/travel", {
			method: "post",
			body: JSON.stringify(newLocation),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.status === 201) {
			alert(`Location added`);
		} else {
			alert(`Adding location gave code ${response.status}`);
		}
		redirect("/locations");
	};

	return (
		<>
			<article>
				<h2>Add a Location</h2>
				<p>Add a Trip name, date, and length of stay</p>

				<table id="locations">
					<caption>Which Trip are you adding?</caption>
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
									placeholder="City, Country"
									value={place}
									onChange={e => setPlace(e.target.value)}
									id="place"
								/>
							</td>

							<td>
								<label for="date">Trip Date</label>
								<input
									type="date"
									value={date}
									placeholder="Month, Year"
									onChange={e => setDate(e.target.value)}
									id="date"
								/>
							</td>

							<td>
								<label for="length">Length of Trip</label>
								<input
									type="number"
									placeholder="0"
									value={length}
									onChange={e => setLength(e.target.value)}
									id="length"
								/>
							</td>

							<td>
								<label for="submit">Commit</label>
								<button type="submit" onClick={addLocation} id="submit">
									Add
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</article>
		</>
	);
};

export default AddTravelPageTable;

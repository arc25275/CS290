import React from "react";
import Location from "./Location";

// Change the function names and parameters
// to fit your portfolio topic and schema.

function LocationList({ locations, onDelete, onEdit }) {
	return (
		<table id="locations">
			<caption>Add and Edit Locations</caption>
			<thead>
				<tr>
					<th>Place</th>
					<th>Date</th>
					<th>Length</th>
					<th>Delete</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
				{locations.map((location, i) => (
					<Location
						location={location}
						key={i}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
			</tbody>
		</table>
	);
}

export default LocationList;

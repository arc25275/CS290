import React from "react";

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

import { GrEdit, GrTrash } from "react-icons/gr";

function Location({ location, onEdit, onDelete }) {
	const date = location.date ?? new Date().toISOString();
	return (
		<tr>
			<td>{location.place}</td>
			<td>{date.slice(0, 10)}</td>
			<td>{location.length}</td>
			<td>
				<GrTrash onClick={() => onDelete(location._id)} />
			</td>
			<td>
				<GrEdit onClick={() => onEdit(location)} />
			</td>
		</tr>
	);
}

export default Location;

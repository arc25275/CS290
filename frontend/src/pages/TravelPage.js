import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";

import LocationList from "../components/LocationList";

function TravelPage({ setLocation }) {
	// Use the Navigate for redirection
	const redirect = useNavigate();

	// Use state to bring in the data
	const [locations, setLocations] = useState([]);

	// RETRIEVE the entire list of movies
	const loadLocations = async () => {
		const response = await fetch("/travel");
		const locations = await response.json();
		setLocations(locations);
	};

	const onCreateLocation = async => {
		redirect("/create");
	};

	// UPDATE a single movie
	const onEditLocation = async location => {
		setLocation(location);
		redirect("/update");
	};

	// DELETE a single movie
	const onDeleteLocation = async _id => {
		const response = await fetch(`/travel/${_id}`, { method: "DELETE" });
		if (response.status === 204) {
			const getResponse = await fetch("/travel");
			const locations = await getResponse.json();
			setLocations(locations);
		} else {
			console.error(`Deleting movie ${_id} gave response: ${response.status}`);
		}
		window.location.reload(false);
	};

	// LOAD all the movies
	useEffect(() => {
		loadLocations();
	}, []);

	// DISPLAY the movies
	return (
		<>
			<h2>List of Locations</h2>
			<p>
				List of trips that I have taken, showing their location, date, and trip
				length
			</p>
			Add Trip<span> </span>
			<GrAddCircle onClick={() => onCreateLocation()} />
			<LocationList
				locations={locations}
				onEdit={onEditLocation}
				onDelete={onDeleteLocation}
			/>
		</>
	);
}

export default TravelPage;

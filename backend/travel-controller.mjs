// Controllers for the Location Collection

import "dotenv/config";
import express from "express";
import * as locations from "./travel-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json()); // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post("/travel", (req, res) => {
	locations
		.createLocation(req.body.place, req.body.date, req.body.length)
		.then(location => {
			res.status(201).json(location);
		})
		.catch(error => {
			console.log(error);
			res.status(400).json({ error: "Bad request when creating controller." });
		});
});

// RETRIEVE controller ****************************************************
app.get("/travel", (req, res) => {
	locations
		.retrieveLocations()
		.then(location => {
			if (location !== null) {
				res.json(location);
			} else {
				res.status(404).json({ Error: "Controller not found." });
			}
		})
		.catch(error => {
			console.log(error);
			res
				.status(400)
				.json({ Error: "Bad request when retrieving controller." });
		});
});

// RETRIEVE by ID controller
app.get("/travel/:_id", (req, res) => {
	locations
		.retrieveLocationByID(req.params._id)
		.then(location => {
			if (location !== null) {
				res.json(location);
			} else {
				res
					.status(404)
					.json({ Error: `Controller ${req.params._id} not found.` });
			}
		})
		.catch(error => {
			console.log(error);
			res.status(400).json({
				Error: `Bad request when retrieving controller ${req.params._id}.`,
			});
		});
});

// UPDATE controller ************************************
app.put("/travel/:_id", (req, res) => {
	locations
		.updateLocation(
			req.params._id,
			req.body.place,
			req.body.date,
			req.body.length
		)
		.then(location => {
			res.json(location);
		})
		.catch(error => {
			console.log(error);
			res.status(400).json({
				error: `Bad request when updating controller ${req.params._id}`,
			});
		});
});

// DELETE Controller ******************************
app.delete("/travel/:_id", (req, res) => {
	locations
		.deleteLocationById(req.params._id)
		.then(deletedCount => {
			if (deletedCount === 1) {
				res.status(200).send({
					Success: `Delete was successful for controller ${req.params._id}.`,
				});
			} else {
				res.status(404).json({
					Error: `Controller ${req.params._id} was not found, and not able to be deleted`,
				});
			}
		})
		.catch(error => {
			console.error(error);
			res.send({ error: `Error deleting controller ${req.params._id}` });
		});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});

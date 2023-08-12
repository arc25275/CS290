// Models for the Location Collection

// Import dependencies.
import mongoose from "mongoose";
import "dotenv/config";

// Connect based on the .env file parameters.
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", err => {
	if (err) {
		res.status(500).json({
			error: "Encountered an unexpected error when connecting to the Database.",
		});
	} else {
		console.log("Connected to Database.");
	}
});

// SCHEMA: Define the collection's schema.
const locationSchema = mongoose.Schema({
	place: { type: String, required: true },
	date: { type: Date, required: true },
	length: { type: Number, required: true },
});

// Compile the model from the schema
// by defining the collection name "locations".
const locations = mongoose.model("Location", locationSchema);

// CREATE model *****************************************
const createLocation = async (place, date, length) => {
	const location = new locations({
		place: place,
		date: date,
		length: length,
	});
	return location.save();
};

// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveLocations = async () => {
	const query = locations.find();
	return query.exec();
};

// RETRIEVE by ID
const retrieveLocationByID = async _id => {
	const query = locations.findById({ _id: _id });
	return query.exec();
};

// DELETE model based on _id  *****************************************
const deleteLocationById = async _id => {
	const result = await locations.deleteOne({ _id: _id });
	return result.deletedCount;
};

// UPDATE model *****************************************************
const updateLocation = async (_id, place, date, length) => {
	const result = await locations.replaceOne(
		{ _id: _id },
		{
			place: place,
			date: date,
			length: length,
		}
	);
	return {
		_id: _id,
		title: place,
		date: date,
		length: length,
	};
};

// EXPORT the variables for use in the controller file.
export {
	createLocation,
	retrieveLocations,
	retrieveLocationByID,
	updateLocation,
	deleteLocationById,
};

// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

// import products from "./data/products.js";
import HomePage from "./pages/HomePage.js";
import TopicsPage from "./pages/TopicsPage.js";
import TravelPage from "./pages/TravelPage.js";
import AddTravelPageTable from "./pages/AddTravelPageTable";
import EditTravelPageTable from "./pages/EditTravelPageTable";
// import GalleryPage from "./pages/GalleryPage.js";
// import OrderPage from "./pages/OrderPage.js";
// import ContactPage from "./pages/ContactPage.js";

// Define the function that renders the content in Routes, using State.
function App() {
	const [location, setLocationToEdit] = useState([]);

	return (
		<>
			<BrowserRouter>
				<header>
					<img
						src={process.env.PUBLIC_URL + "/android-chrome-192x192.png"}
						alt="An icon of a toy robot head"
					></img>
					<h1>Alex Clark</h1>
				</header>
				<Navigation />
				<main>
					<section>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/topics" element={<TopicsPage />} />
							{/* <Route path="/gallery" element={<GalleryPage />} />
							<Route path="/order" element={<OrderPage />} />
							<Route path="/contact" element={<ContactPage />} /> */}
							<Route
								path="/locations"
								element={<TravelPage setLocation={setLocationToEdit} />}
							/>
							<Route
								path="/update"
								element={<EditTravelPageTable locationToEdit={location} />}
							/>
							<Route path="/create" element={<AddTravelPageTable />} />
						</Routes>
					</section>
				</main>

				<footer>
					<p>&#169; 2023 Alex Clark</p>
				</footer>
			</BrowserRouter>
		</>
	);
}

export default App;

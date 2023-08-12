import React from "react";

function HomePage() {
	return (
		<>
			<h2>Home</h2>
			<article>
				<h3>Career Goals</h3>
				<p>
					After getting my degree in Computer Science and Human Computer
					Interaction, I hope to work as a web developer or frontend designer.
					Many different types of fields interest me, and UI design can be
					applicable in all of them.
				</p>
			</article>
			<article>
				<h3>Technologies Used</h3>
				<p>
					This website uses MERN, meaning MongoDB, Express, React, and Node.js
				</p>
				<dl>
					<dt>MongoDB</dt>
					<dd>
						Mongodb is a NoSQL database system that relies on collections and
						documents instead of spreadsheets. This is used in the site as a
						backend for keeping track of Locations that I have traveled to.
					</dd>
					<dt>Express</dt>
					<dd>
						Express is a system that is used for listening to certain http
						routes, and can be used to send data as well. In this site, it is
						used for loading the different pages of the site.
					</dd>
					<dt>React</dt>
					<dd>
						React is a web development framework that allows you to create sites
						using components, rather than just HTML files. This allows sites to
						be much more responsive, and this is used in the site for building
						all of the pages.
					</dd>
					<dt>Node.js</dt>
					<dd>
						Node.js is a framework that allows javascript to be run as a server,
						and independently of HTML files if needed. It also allows the use of
						NPM, a package manager, that many different frameworks such as react
						can be installed with.
					</dd>
				</dl>
			</article>
		</>
	);
}

export default HomePage;

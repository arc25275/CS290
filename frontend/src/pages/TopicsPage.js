import React from "react";

function TopicsPage() {
	return (
		<>
			<h2>Web Development Concepts</h2>
			<nav class="local">
				<a href="#servers">Web Servers</a>
				<a href="#design">Frontend Design</a>
				<a href="#images">Optimizing Images</a>
				<a href="#favicons">Favicons</a>
				<a href="#css">Cascading Stylesheets</a>
				<a href="#forms">Forms</a>
				<a href="#express">Node, NPM, Express</a>
			</nav>
			<article id="servers">
				<h3>Web Servers</h3>
				<p>
					The <strong>index</strong> of a website often refers to the home page.
					This is usually called <code>index.html</code>, though it does not
					have to be, and can be named something else. This index page is what a
					website domain and server points to, and what is shown to users by
					default when opening the website.
					<br />
					<br />
					The main difference from the local website vs the website on the
					engineering server is the network tab. On the local website, no
					requests are made, and it is simply shown to you. On the engineering
					server, it is actually hosted elsewhere, and requests have to be made
					to access resources like the index and other files
					<br />
					<br />
					From looking at the network tab, it looks like if no favicon is
					provided, the engineering server one is used instead. This leads to it
					getting a 200 status, meaning it is fine, and the{" "}
					<strong>resource</strong> was accessed. <code>main.css</code>
					and
					<code>main.js</code> give 404 errors, meaning that the files were not
					found, which makes sense as the HTML is pointing to files that don't
					exist.
					<br />
					<br />
					The <strong>URL</strong> for my file is
					<code>https://web.engr.oregonstate.edu/~clarka8/a1-clarka8/</code>.
					The <strong>scheme</strong> of the url is <code>https://</code>{" "}
					meaning it a secure version of HTTP. The <strong>host</strong> is
					<code>web.engr.oregonstate.edu`, where `web.engr.</code> is the{" "}
					<strong>subdomain</strong>, and
					<code>oregonstate.edu</code> is the main domain. The{" "}
					<strong>path to the resource</strong> is
					<code>/~clarka8/a1-clarka8</code>, which shows that the file is within
					my user's
					<code>public_html</code> on the engineering server, and in a folder
					called a1-clarka8.
					<br />
				</p>
			</article>
			<article id="design">
				<h3>Frontend Design</h3>
				<p>
					<strong>Frontend</strong> design is the part of the website that users
					interact with. Because of this, it needs to be <strong>usable</strong>
					, and understandable to everyone. The frontend design is anything the
					user sees or hears, whether it be text, styling of the website, audio,
					or videos. Frontend design often also allows users to interact with
					the <strong>backend</strong> of the website, or the servers, and needs
					to appropriately be responsive and show the user what is happening.
				</p>
				<dl>
					<dt>Effective</dt>
					<dd>Does the design do what the user needs it to do?</dd>
					<dt>Efficient</dt>
					<dd>
						Does the design do what it needs to do in as few steps as possible,
						and without hassle?
					</dd>
					<dt>Easy to navigate</dt>
					<dd>
						Is the design intuitive and easy to understand from a brief look?
					</dd>
					<dt>Error-free</dt>
					<dd>
						Does the design work well, and can users run into issues when trying
						to do something?
					</dd>
					<dt>Enjoyable</dt>
					<dd>
						Does the design keep them interested, and make them want to use it
						again?
					</dd>
				</dl>
				<p>
					Instead of just using div tags to create a website, page layout tags
					can be an extremely helpful way to create and separate out different
					parts of a website. This can be on the website itself, but also the
					code, and can also make using css easier. It also is extremely
					important for directing screen readers where to go, and giving added
					context. They can also give search engine crawlers extra information
					about your site. In general, a <strong>main</strong> tag within the
					body will contain <strong>sections</strong>, which then contain{" "}
					<strong>articles</strong>. Sections will have h2 headers, while
					articles will have h3 headers
				</p>
				<ol>
					<li>
						To link external content, an &lt;a&gt; tag, or{" "}
						<strong>anchor</strong> can be used. This uses the full url of the
						site, and text inside the tag will become clickable and take you to
						the URL
					</li>
					<li>
						To link internal content, the &lt;link&gt; tag is used. This is most
						commonly used for linking other files to be used in the html, like
						css stylesheets or javascript code. It can also be used for other
						external things like icons, or fonts.
					</li>
					<li>
						To link between pages in a site, a &lt;nav&gt; tag is used, with
						anchors inside of it. When referring to other pages in a site, you
						can use <strong>relative file paths</strong>, rather than full file
						paths, which makes the link work, no matter the root the file is
						being stored in.
					</li>
				</ol>
			</article>
			<article id="images">
				<h3>Optimizing Images</h3>
				<p>
					The 6 main specifications used for images on the web exist for
					multiple reasons, including clarity, accessibility, search engine
					optimization, and general usability. These six specifications are as
					follows: Images should have descriptive file names, and you should be
					able to understand the context of the image just from the name. They
					should have small file size, to reduce load time. They should be more
					exact sizes, to also reduce load time, as images being larger than
					they need to can slow this down. They should also be the correct file
					format, so they can be displayed correctly and efficiently for the
					type of image that needs to be shown. If possible, providing images of
					multiple resolutions is ideal, as many different monitor sizes exist.
					Lastly, the color mode must be correct in order to display the image
					correctly and as intended.
				</p>
				<p>
					For photos, you can use JPG or PNG, depending on if transparency may
					be needed. Line art usually uses SVG, which can produce lines
					mathematically, GIF, if the line art is animated, or PNG if the line
					art has more detail or is derived from an image.
				</p>
			</article>
			<article id="favicons">
				<h3>Favicons</h3>
				<p>
					Browsers and devices use favicons as ways to display websites, and are
					ways for users to quickly identify where they need to go, and
					represent websites. On browsers, they usually show up in the tab next
					to the title, and on phones or other devices they can look more like
					app icons
				</p>
			</article>
			<article id="css">
				<h3>Cascading Stylesheets</h3>
				<p>
					Stylesheets are used in websites and apps for many reasons, with two
					main reasons being usability and aesthetics. Without CSS, many
					websites look the same, but companies and websites want to look
					unique, and have their own visual style. They also want users to like
					what they see, which oftentimes increases usability as well. Plain
					html can be hard to read, and it can be very difficult to tell
					different items apart. With css, things are more visually distinct,
					and you are able to tell what items are important or that the creator
					wanted you to see.
				</p>
				<p>
					To add CSS to your webpage, there are 5 different ways. First, you can
					link to it in html by using a<code>link</code> element, and providing
					the URL to the file, which is simple and most common. Second, you can
					import external stylesheets using <code>@import stylesheet.css</code>,
					which can be good if using a unified style or multiple files. Third,
					you can use inline style tags in HTML, which is typically used for
					single changes. Fourth, you can define a style for an element directly
					in it's tag, if you only need a single attribute changed. Lastly, you
					can use javascript and DOM manipulation, which is extremely useful and
					almost always required if you want any dynamic elements or styles in
					your webpage.
				</p>
			</article>
			<article id="forms">
				<h3>Forms</h3>
				<p>Goals of Accessible forms:</p>
				<ol>
					<li>
						Providing clear instructions, and making sure that each input has a
						label explaining what is needed.
					</li>
					<li>
						Showing users what information is required, and why the information
						is collected.
					</li>
					<li>
						Using autofocus, and allowing people to start typing without using
						your mouse.
					</li>
					<li>
						Making sure the whole form can be used only with the keyboard, with
						tab support to move in between inputs.
					</li>
					<li>
						Adding tab indexing, so that keyboard users can move throughout the
						form in the correct order.
					</li>
					<li>
						Making sure a response page is screen readable, and not using the
						built in browser messages
					</li>
				</ol>
				<p>Major Tags</p>
				<dl>
					<dt>form</dt>
					<dd>
						This is the overall tag for a form, and has information for where to
						send the data
					</dd>
					<dt>fieldset</dt>
					<dd>
						Fieldsets can separate different parts of the forms, and have
						legends to show what the section is for
					</dd>
					<dt>label</dt>
					<dd>
						Labels are text that usually parent some kind of input, and tell you
						what the input is looking for, or what kind of data to input.
					</dd>
					<dt>input</dt>
					<dd>
						Inputs are where data is entered in a form, and there are multiple
						types. First, there is a generic text input, where you can type
						something in. Next, there is an email input, where it validates a
						simple format for you to put in. After this is the checkbox, where
						you can have multiple different options, all clickable by the user.
						Similar to the checkbox is the radio, which has multiple options,
						but only one is able to be selected.
					</dd>
					<dt>select</dt>
					<dd>
						The select element is a dropdown menu that you can populate with
						other option elements.
					</dd>
					<dt>textarea</dt>
					<dd>
						The textarea is similar to the text input, but is meant for larger
						paragraphs, and is able to be resized.
					</dd>
					<dt>button</dt>
					<dd>
						The button is what is used to submit the form, and is usually at the
						very end.
					</dd>
				</dl>
				<p>
					In order to be accessible when making forms, there are a few things
					you can do to improve usability when styling. First, they should not
					be displayed in a table, as this can break tab navigation or
					screenreaders. Along with this, to make it clear what information in
					the form may be required, invalid, or otherwise different than other
					inputs, you can give these special styles to make them stand out and
					be obvious.
				</p>
			</article>
			<article id="express">
				<h3>Node, npm, and Express</h3>
				<p>
					Node is a framework allowing you to run javascript code independent of
					HTML, and instead on a server. It also allows you access to NPM, a
					package manager which lets you import certain packages to introduce
					additional functionality to your projects. One of the many available
					is called Express, which provides a simple way for you to send and
					listen for http requests on your node server. Combining lots of
					different packages can make development much simpler, and is key to
					managing your time. You might be able to implement something complex
					on your own, but if you can import it from npm, it makes it a much
					quicker process to work on what you really want to do.{" "}
				</p>
			</article>
		</>
	);
}

export default TopicsPage;

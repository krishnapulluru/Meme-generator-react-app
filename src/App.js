import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Practice from "./components/Pract";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<section>
				<Meme />
			</section>

			{/* <Practice /> */}
		</div>
	);
}

export default App;

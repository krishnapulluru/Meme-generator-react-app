import React from "react";
import memeImage from "../data/memeData";
export default function Meme() {
	function getRandomImage() {
		if (memeImage.success) {
			if (memeImage.data.memes.length > 0) {
				console.log(
					memeImage.data.memes[
						Math.floor(Math.random() * memeImage.data.memes.length)
					].url
				);
			} else {
				console.log("No data");
			}
		} else {
			console.log("Data not received");
		}
	}

	return (
		<div className="meme">
			<div class="meme-inputs">
				<input type="text " placeholder="Type Top Content" />
				<input type="text" placeholder="Type Bottom Content" />
			</div>
			<div>
				<button className="meme-btn bg-primary" onClick={getRandomImage}>
					Get a new meme image 🖼
				</button>
			</div>
		</div>
	);
}

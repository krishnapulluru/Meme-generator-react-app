import React from "react";
import memeImage from "../data/memeData";
export default function Meme() {
	const [memeImagea, serMemeImage] = React.useState("");
	const [memeImageAlt, serMemeImageAlt] = React.useState("");
	const [topContent, sertopContent] = React.useState("");
	const [bottomContent, serbottomContent] = React.useState("");

	function getRandomImage() {
		if (memeImage.success) {
			if (memeImage.data.memes.length > 0) {
				serMemeImage(
					memeImage.data.memes[
						Math.floor(Math.random() * memeImage.data.memes.length)
					].url
				);
				serMemeImageAlt(
					memeImage.data.memes[
						Math.floor(Math.random() * memeImage.data.memes.length)
					].name
				);
			} else {
				console.log("No data");
			}
		} else {
			console.log("Data not received");
		}
	}

	function onchnageToContent() {
		sertopContent((prevTopCont) => {
			console.log(prevTopCont);
			return prevTopCont + topContent;
		});
	}

	return (
		<div className="meme">
			<div className="meme-inputs">
				<input
					type="text "
					placeholder="Type Top Content"
					value={topContent}
					onChange={onchnageToContent}
				/>
				<input type="text" placeholder="Type Bottom Content" />
			</div>
			<div>
				<button className="meme-btn bg-primary" onClick={getRandomImage}>
					Get a new meme image 🖼
				</button>
			</div>

			<div className="meme--image">
				<h1>{topContent}</h1>
				<h1>{bottomContent}</h1>
				{memeImagea !== "" ? (
					<img src={memeImagea} alt={memeImageAlt} />
				) : (
					<h5 className="text-center">
						No Image please click button to bring up Image
					</h5>
				)}
			</div>
		</div>
	);
}

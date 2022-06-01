import React from "react";
import memeImage from "../data/memeData";
export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "",
		altcode: "",
	});

	function getRandomImage() {
		if (memeImage.success) {
			if (memeImage.data.memes.length > 0) {
				setMeme((prevMeme) => {
					return {
						...prevMeme,
						randomImage:
							memeImage.data.memes[
								Math.floor(Math.random() * memeImage.data.memes.length)
							].url,
						altcode:
							memeImage.data.memes[
								Math.floor(Math.random() * memeImage.data.memes.length)
							].name,
					};
				});
			} else {
				console.log("No data");
			}
		} else {
			console.log("Data not received");
		}
	}

	function onchnageTopContent(event) {
		setMeme((prevObj) => {
			return {
				...prevObj,
				topText: event.target.value,
			};
		});
	}

	function onchnageBottomContent(event) {
		setMeme((prevObj) => {
			return {
				...prevObj,
				bottomText: event.target.value,
			};
		});
	}

	return (
		<div className="meme">
			<div className="meme-inputs">
				<input
					type="text "
					placeholder="Type Top Content"
					value={meme.topText}
					onChange={onchnageTopContent}
				/>
				<input
					type="text"
					placeholder="Type Bottom Content"
					onChange={onchnageBottomContent}
					value={meme.bottomText}
				/>
			</div>
			<div>
				<button className="meme-btn bg-primary" onClick={getRandomImage}>
					Get a new meme image 🖼
				</button>
			</div>

			<div className="meme--image">
				<h1 className="top--text">{meme.topText}</h1>
				<h1 className="bottom--text">{meme.bottomText}</h1>
				{meme.randomImage !== "" ? (
					<img src={meme.randomImage} alt={meme.altcode} />
				) : (
					<h5 className="text-center">
						No Image please click button to bring up Image
					</h5>
				)}
			</div>
		</div>
	);
}

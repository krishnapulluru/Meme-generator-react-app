import React from "react";
export default function Meme() {
	const [memeImage, setMemeImage] = React.useState();
	React.useEffect(async () => {
		const res = await fetch("https://api.imgflip.com/get_memes");
		const memeData = await res.json();
		setMemeImage(memeData);
	}, []);

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

	function handeInput(event) {
		console.log(meme.getRandomImage);
		if (
			meme.randomImage !== null &&
			meme.randomImage !== undefined &&
			meme.randomImage !== ""
		) {
			const { name, value } = event.target;
			setMeme((preVal) => {
				return {
					...preVal,
					[name]: value,
				};
			});
		} else {
			alert("Please Select Image");
			return;
		}
	}

	return (
		<div className="meme">
			<div className="meme-inputs">
				<input
					type="text "
					placeholder="Type Top Content"
					name="topText"
					value={meme.topText}
					onChange={handeInput}
				/>
				<input
					type="text"
					name="bottomText"
					placeholder="Type Bottom Content"
					onChange={handeInput}
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

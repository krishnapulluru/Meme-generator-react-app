import React from "react";

export default function Practice() {
	const [objName, setObjName] = React.useState({
		fname: "krishna",
		lname: "pulluru",
		age: 25,
		gender: "male",
		isFav: true,
	});

	let setFav = objName.isFav ? "*" : "#";

	function toggleFav() {
		setObjName((prevObj) => {
			return {
				...prevObj,
				isFav: !prevObj.isFav,
			};
		});
	}

	return (
		<div>
			<h2 onClick={toggleFav}>{setFav}</h2>
			<h1>
				{objName.fname} {objName.lname}
			</h1>
			<h3>{objName.age}</h3>
			<h4>{objName.gender}</h4>
		</div>
	);
}

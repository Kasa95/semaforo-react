import React, { useState } from "react";

const TrafficLight = () => {
	const [highlight1, setHighlight1] = useState("");
	const [highlight2, setHighlight2] = useState("");
	const [highlight3, setHighlight3] = useState("");

	function brillar1() {
		highlight1 === "" ? setHighlight1("selected") : setHighlight1("");
	}
	function brillar2() {
		highlight2 === "" ? setHighlight2("selected") : setHighlight2("");
	}
	function brillar3() {
		highlight3 === "" ? setHighlight3("selected") : setHighlight3("");
	}

	return (
		<>
			<div className="trafficLight">
				<button
					className={"red " + highlight1}
					onClick={brillar1}></button>
				<button
					className={"yellow " + highlight2}
					onClick={brillar2}></button>
				<button
					className={"green " + highlight3}
					onClick={brillar3}></button>
			</div>
		</>
	);
};

export default TrafficLight;

import React, { useState } from "react";

const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("");

	return (
		<>
			<div className="trafficLight">
				<button
					className={
						"red " + (selectedColor === "red" ? "selected-red" : "")
					}
					onClick={() => setSelectedColor("red")}></button>
				<button
					className={
						"yellow " +
						(selectedColor === "yellow" ? "selected-yellow" : "")
					}
					onClick={() => setSelectedColor("yellow")}></button>
				<button
					className={
						"green " +
						(selectedColor === "green" ? "selected-green" : "")
					}
					onClick={() => setSelectedColor("green")}></button>
			</div>
		</>
	);
};

export default TrafficLight;

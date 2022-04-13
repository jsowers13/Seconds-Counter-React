import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
const Clock = () => {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="d-flex justify-content-center">
				<h1 className="text-white bg-dark p-2 rounded-pill">
					<FontAwesomeIcon icon="fa-solid fa-clock" />
					{" " + ("000000" + (time % 1000000)).slice(-6)}
				</h1>
			</div>
			<div>
				{!timerOn && time === 0 && (
					<button
						type="button"
						className="btn btn-success rounded-pill"
						onClick={() => setTimerOn(true)}>
						Start
					</button>
				)}
				{timerOn && (
					<button
						type="button"
						className="btn btn-danger rounded-pill"
						onClick={() => setTimerOn(false)}>
						Stop
					</button>
				)}
				{!timerOn && time !== 0 && (
					<button
						type="button"
						className="btn btn-success rounded-pill"
						onClick={() => setTimerOn(true)}>
						Resume
					</button>
				)}
				{!timerOn && time !== 0 && (
					<button
						type="button"
						className="btn btn-primary rounded-pill"
						onClick={() => setTime(0) && setTimerOn(false)}>
						Reset
					</button>
				)}
			</div>
		</div>
	);
};
// const Clock = (props) => {
// 	const { initialMinute = 0, initialSeconds = 0 } = props;
// 	const [minutes, setMinutes] = useState(initialMinute);
// 	const [seconds, setSeconds] = useState(initialSeconds);
// 	useEffect(() => {
// 		let myInterval = setInterval(() => {
// 			if (seconds > 0) {
// 				setSeconds(seconds - 1);
// 			}
// 			if (seconds === 0) {
// 				if (minutes === 0) {
// 					clearInterval(myInterval);
// 				} else {
// 					setMinutes(minutes - 1);
// 					setSeconds(59);
// 				}
// 			}
// 		}, 1000);
// 		return () => {
// 			clearInterval(myInterval);
// 		};
// 	});

// 	return (
// 		<div>
// 			{minutes === 0 && seconds === 0 ? null : (
// 				<h1>
// 					{" "}
// 					{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
// 				</h1>
// 			)}
// 		</div>
// 	);
// };

export default Clock;

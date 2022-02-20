import React, { useState, useEffect } from "react";
// import axios from "axios";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import styles from "./style.module.css";

const ImageSlider = ({ images }) => {
	// const [content, setContent] = useState([]);

	const [current, setCurrent] = useState(0);
	const length = images.length;

	// const test = content;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	console.log(current);

	// useEffect(() => {
	// 	const fetchItem = async () => {
	// 		const response = await axios.get(`/api/cards/`);
	// 		const result = response.data[5].images;
	// 		setContent(result);
	// 	};
	// 	fetchItem();
	// }, []);

	return (
		<div className={styles.slider}>
			<ArrowCircleLeftIcon className={styles.leftArrow} onClick={prevSlide} />
			<ArrowCircleRightIcon className={styles.rightArrow} onClick={nextSlide} />

			{images.map((slide, index) => {
				return (
					<div>
						{index === current && (
							<img src={slide} alt="huhu" className={styles.image} />
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ImageSlider;

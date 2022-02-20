import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import styles from "./style.module.css";

const ImageSlider = ({ images }) => {
	const [current, setCurrent] = useState(0);
	const length = images.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	console.log(current);

	if (images.length <= 0) {
		return null;
	}

	if (images.length === 1) {
		return (
			<img src={images} style={{ width: "300px", height: "300px", borderRadius: "10px" }} />
		);
	}

	return (
		<div className={styles.slider}>
			<ArrowCircleLeftIcon className={styles.leftArrow} onClick={prevSlide} />
			<ArrowCircleRightIcon className={styles.rightArrow} onClick={nextSlide} />

			{images.map((slide, index) => {
				return (
					<div key={images.id}>
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

import React, { useState } from "react";
import styles from "./style.module.css";
import { v4 as uuid } from "uuid";
import { StyledArrowCircleLeftIcon, StyledArrowCircleRightIcon } from "./styled";

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
			<StyledArrowCircleLeftIcon onClick={prevSlide} />
			<StyledArrowCircleRightIcon onClick={nextSlide} />

			{images.map((slide, index) => {
				return (
					<div key={uuid()}>
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

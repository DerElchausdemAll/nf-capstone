import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
	StyledArrowCircleLeftIcon,
	StyledArrowCircleRightIcon,
	StyledSlider,
	StyledImage,
} from "./styled";

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
		return <StyledImage src={images} />;
	}

	return (
		<StyledSlider>
			<StyledArrowCircleLeftIcon onClick={prevSlide} />
			<StyledArrowCircleRightIcon onClick={nextSlide} />

			{images.map((slide, index) => {
				return (
					<div key={uuid()}>
						{index === current && <StyledImage src={slide} alt="huhu" sx={{}} />}
					</div>
				);
			})}
		</StyledSlider>
	);
};

export default ImageSlider;

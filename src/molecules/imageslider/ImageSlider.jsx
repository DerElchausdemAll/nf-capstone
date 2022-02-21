import React, { useState } from "react";
import {
	StyledArrowBackIosNewIcon,
	StyledArrowForwardIosIcon,
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
		return (
			<StyledSlider>
				<StyledImage src={images} />
			</StyledSlider>
		);
	}

	return (
		<StyledSlider>
			<StyledArrowBackIosNewIcon fontSize="large" onClick={prevSlide} />
			<StyledArrowForwardIosIcon fontSize="large" onClick={nextSlide} />

			{images.map((slide, index) => {
				return (
					<div key={slide}>
						{index === current && <StyledImage src={slide} alt="huhu" sx={{}} />}
					</div>
				);
			})}
		</StyledSlider>
	);
};

export default ImageSlider;

import styled from "@emotion/styled";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const StyledArrowCircleLeftIcon = styled(ArrowCircleLeftIcon)`
	position: absolute;
	z-index: 10;
	color: black;
	top: 50%;
	left: 0.2rem;
	font-size: 2rem;
	cursor: pointer;
	user-select: none;
`;

export const StyledImage = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 10px;
`;

export const StyledSlider = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledArrowCircleRightIcon = styled(ArrowCircleRightIcon)`
	position: absolute;
	z-index: 10;
	color: black;
	top: 50%;
	right: 0.2rem;
	font-size: 2rem;
	cursor: pointer;
	user-select: none;
`;

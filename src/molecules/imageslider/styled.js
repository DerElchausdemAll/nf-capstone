import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const StyledArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
	position: absolute;
	z-index: 1;
	top: 50%;
	left: 0.2rem;
	color: black;
	font-size: 2rem;
	cursor: pointer;
	user-select: none;
`;

export const StyledImage = styled.img`
	width: 350px;
	height: 375px;
`;

export const StyledSlider = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
`;

export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
	position: absolute;
	z-index: 1;
	top: 50%;
	right: 0.2rem;
	color: black;
	font-size: 2rem;
	cursor: pointer;
	user-select: none;
`;

import styled from "@emotion/styled";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const StyledArrowCircleLeftIcon = styled(ArrowCircleLeftIcon)`
	position: absolute;
	top: 50%;
	left: 0.2rem;
	font-size: 2rem;
	color: black;
	z-index: 10;
	cursor: pointer;
	user-select: none;
`;

// export const StyledImage = styled(Image)`
// 	width: 300px;
// 	height: 300px;
// 	border-radius: 10px;
// `;

export const StyledArrowCircleRightIcon = styled(ArrowCircleRightIcon)`
	position: absolute;
	top: 50%;
	right: 0.2rem;
	font-size: 2rem;
	color: black;
	z-index: 10;
	cursor: pointer;
	user-select: none;
`;

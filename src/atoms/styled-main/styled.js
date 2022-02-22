import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export const move = keyframes`
	0% {
	transform: translateX(100vw);
	}
	100% {
	transform: translateX(0px);
	}
`;

export const moveHeadline = keyframes`
	0% {
	transform: translateX(-100vw);
	}
	100% {
	transform: translateX(0px);
	}
`;

export const StyledAnimationFixer = styled.div`
	grid-area: slogan;
	overflow: hidden;
`;

export const StyledText = styled(Typography)`
	margin-left: 20px;
	animation: ${move} 0.7s ease-out;
	font-weight: 800;
	text-decoration: underline #0059c3 7px solid;
	text-transform: uppercase;
`;

export const StyledHeadline = styled(Typography)`
	margin-left: 20px;
	grid-area: headline;
	animation: ${moveHeadline} 0.7s ease-out;
	font-weight: 800;
`;

export const StyledButton = styled(Button)`
	margin-bottom: 60px;
	grid-area: button;
	height: 60px;
	font-size: 20px;
	transform: translateX(-100vw);
	animation: ${moveHeadline} 0.7s ease-out forwards; /* 0.7s hinter 0.7s für delay */
`;

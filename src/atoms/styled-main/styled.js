import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export const move = keyframes`
	0% {
	transform: translateX(100vw);
	}
	100% {
	transform: translateX(0);
	}
`;

export const moveHeadline = keyframes`
	0% {
	transform: translateX(-100vw);
	}
	100% {
	transform: translateX(0);
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
	text-decoration: underline;
	a {
		-webkit-text-decoration: underline;
		-webkit-text-decoration-color: #1976d2;
		-webkit-text-decoration-thickness: 7px;
		-webkit-text-decoration-style: solid;
	}
	text-decoration-color: #1976d2;
	text-decoration-thickness: 7px;
	text-decoration-style: solid;
	text-transform: uppercase;
`;

export const StyledHeadline = styled(Typography)`
	grid-area: headline;
	margin-left: 20px;
	animation: ${moveHeadline} 0.7s ease-out;
	font-weight: 800;
`;

export const StyledButton = styled(Button)`
	grid-area: button;
	height: 60px;
	margin-bottom: -10px;
	transform: translateX(-100vw);
	animation: ${moveHeadline} 0.7s ease-out forwards;

	/* 0.7s hinter 0.7s für delay */

	font-size: 20px;
`;

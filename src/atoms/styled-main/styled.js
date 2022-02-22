import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export const move = keyframes`
	0% {
	transform: translateX(50px);

	}
	100% {
	transform: translateX(0px);
	}
`;

export const moveHeadline = keyframes`
	0% {
	transform: translateX(-50px);

	}
	100% {
	transform: translateX(0px);
	}
`;

export const StyledText = styled(Typography)`
	display: flex;
	font-weight: 800;
	text-decoration: underline #0059c3 8px solid;
	text-transform: uppercase;
	margin-left: 20px;

	will-change: opacity, scroll-position;
	animation: ${move} 0.7s ease-out;
`;

export const StyledHeadline = styled(Typography)`
	font-weight: 800;
	will-change: opacity, scroll-position;
	animation: ${moveHeadline} 0.7s ease-out;
`;

export const StyledButton = styled(Button)`
	font-size: 40px;
	will-change: opacity, scroll-position;
	animation: ${moveHeadline} 0.7s ease-out;
`;

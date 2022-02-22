import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

const spinning = keyframes`
	0% {
    transform: rotate(0deg)
 	 	}
  	50% {
    transform: rotate(180deg)
  		}
  	100% {
    transform: rotate(360deg)
  		}
`;

export const StyledInnerBall = styled.div`
	height: 20px;
	width: 20px;
	background: blue;
	position: absolute;
	left: 50px;
	top: 50px;
`;

export const StyledBall = styled.div`
	margin: 10px;
	background: #ff831a;
	border-radius: 50%;
	height: 100px;
	width: 100px;
	position: relative;
	animation: ${spinning} 2s linear infinite;

	&::after {
		content: "";
		height: 20px;
		width: 20px;
		background: red;
		position: absolute;
		left: 10px;
		top: 10px;
	}
`;

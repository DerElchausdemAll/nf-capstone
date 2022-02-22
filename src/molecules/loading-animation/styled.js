import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
	background: #ff831a;
	border-radius: 100%;
	height: 36px;
	width: 36px;
	position: absolute;
	top: 90px;
	left: 5px;
`;

export const StyledBall = styled.div`
	left: 35%;
	margin: 10px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	position: relative;
	background: white;
	animation: ${spinning} 2s linear infinite;

	/* ${spinning} */

	&::after {
		content: "";
		height: 20px;
		width: 0;
		height: 0;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		border-bottom: 36px solid #02a676;
		position: absolute;
		top: px;
		left: -10px;
	}

	&::before {
		content: "";
		width: 36px;
		height: 36px;
		margin: 10px;
		background: #c00000;
		position: absolute;
		top: 35px;
		left: 70px;
	}
`;

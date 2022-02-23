import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spinning = keyframes`
	0% {
    transform: rotate(0deg)
 	 	}
		  25% {
    transform: rotate(45deg)
 	 	}
  	50% {
    transform: rotate(90deg)
  		}
		  75% {
    transform: rotate(180deg)
 	 	}
  	100% {
    transform: rotate(360deg)
  		}
`;

export const StyledInnerBall = styled.div`
	position: absolute;
	top: 90px;
	left: 5px;
	width: 36px;
	height: 36px;
	border-radius: 100%;
	background: #ff831a;
`;

export const StyledBall = styled.div`
	position: relative;
	left: 35%;
	width: 100px;
	height: 100px;
	margin: 10px;
	animation: ${spinning} 2s linear infinite;
	border-radius: 50%;
	background: white;

	/* ${spinning} */

	&::after {
		content: "";
		position: absolute;
		top: px;
		left: -10px;
		width: 0;
		height: 20px;
		border-right: 25px solid transparent;
		border-bottom: 36px solid #02a676;
		border-left: 25px solid transparent;
	}

	&::before {
		content: "";
		position: absolute;
		top: 35px;
		left: 70px;
		width: 36px;
		height: 36px;
		margin: 10px;
		background: #c00000;
	}
`;

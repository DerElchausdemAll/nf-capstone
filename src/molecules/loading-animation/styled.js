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

export const StyledBall = styled.div`
	margin: 10px;
	background: #ff831a;
	border-radius: 12%;
	height: 100px;
	width: 100px;
	position: relative;
	animation: ${spinning} 2s linear infinite;

	&:after {
		height: 20px;
		width: 20px;
	}
`;

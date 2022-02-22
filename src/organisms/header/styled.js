import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";

export const StyledImage = styled.img`
	width: 36px;
	margin: 10px;
	border-radius: 50%;
`;

export const StyledTriangle = styled.div`
	width: 0;
	margin: 10px;
	height: 0;
	flex-direction: row;
	justify-content: space-between;
	border-right: 25px solid transparent;
	border-left: 25px solid transparent;
	border-bottom: 36px solid #02a676;
`;

export const StyledBall = styled.div`
	margin: 10px;
	flex-direction: row;
	justify-content: space-between;
	width: 36px;
	height: 36px;
	border-radius: 100%;
	background: #ff831a;
`;

export const StyledContainer = styled.div`
	display: flex;
	color: white;
	flex-direction: row;
	justify-content: space-between;
	position: fixed;
	z-index: 300;
	width: 100vw;
	background: white;
	top: 0;
	left: 0;

	/* border-bottom: 1.5px solid #02a676; */
`;

export const StyledSquare = styled.div`
	width: 36px;
	height: 36px;
	margin: 10px;
	flex-direction: row;
	justify-content: space-between;
	background: #c00000;
`;

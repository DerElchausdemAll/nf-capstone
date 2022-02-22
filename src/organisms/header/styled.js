import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";

export const StyledImage = styled.img`
	width: 44px;
	margin: 10px;
	border-radius: 50%;
`;

export const StyledTriangle = styled.div`
	margin: 10px;
	width: 0;
	height: 0;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-bottom: 36px solid #02a676;
	justify-content: space-between;
	flex-direction: row;
`;

export const StyledBall = styled.div`
	margin: 10px;
	background: #ff831a;
	border-radius: 100%;
	height: 36px;
	width: 36px;
	justify-content: space-between;
	flex-direction: row;
`;

export const StyledContainer = styled.div`
	color: white;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	background: white;
	width: 100vw;
	z-index: 300;
	position: fixed;
	top: 0;
	left: 0;
`;

export const StyledSquare = styled.div`
	width: 36px;
	height: 36px;
	margin: 10px;
	background: #c00000;
	justify-content: space-between;
	flex-direction: row;
	::after {
		height: 30px;
		width: 30px;
		background: green;
	}
`;

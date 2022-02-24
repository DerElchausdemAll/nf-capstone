import styled from "@emotion/styled";

export const StyledContainer = styled.div`
	display: flex;
	position: fixed;
	z-index: 300;
	top: 0;
	left: 0;
	flex-direction: row;
	justify-content: space-between;
	width: 100vw;
	background: white;
	color: white;

	/* border-bottom: 1.5px solid #02a676; */
`;

export const StyledSquare = styled.div`
	flex-direction: row;
	justify-content: space-between;
	width: 36px;
	height: 36px;
	margin: 10px;
	background: #1976d2;
`;

export const StyledBall = styled.div`
	flex-direction: row;
	justify-content: space-between;
	width: 36px;
	height: 36px;
	margin: 10px;
	border-radius: 100%;
	background: #ff831a;
`;

export const StyledTriangle = styled.div`
	flex-direction: row;
	justify-content: space-between;
	width: 0;
	height: 0;
	margin: 10px;
	border-right: 25px solid transparent;
	border-bottom: 36px solid #02a676;
	border-left: 25px solid transparent;
`;

export const StyledImage = styled.img`
	width: 44px;
	height: 44px;
	margin: 10px;
	border-radius: 50%;
`;

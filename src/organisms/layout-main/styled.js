import styled from "@emotion/styled";

export const StyledBackground = styled.div`
	display: grid;
	position: relative;
	grid-template-areas: ". headline ." ". button .";
	grid-template-columns: 1fr 1fr 1fr;
	height: 100%;
	margin-top: 68px;

	&::before {
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("https://images.unsplash.com/photo-1559149251-e9a1dc89981d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80");
		background-position: 81% 100%;
		background-size: cover;
		filter: brightness(1);
	}

	@media (min-height: 400px) {
		grid-template-areas: "headline headline ." "slogan slogan slogan" ". button .";
	}
`;

import { css } from "@emotion/react";

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		height: 100%;
		font-size: 16px;
	}

	body {
		margin: 0;
		display: flex;
		height: 100%;
		font-size: 1rem;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		flex-direction: column;
	}

	#__next {
		display: contents;
	}
`;

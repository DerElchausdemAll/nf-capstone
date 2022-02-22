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
		display: flex;
		flex-direction: column;
		overflow: auto;
		margin: 0;
		height: 100%;
		font-size: 1rem;
		-webkit-overflow-scrolling: touch;
	}

	#__next {
		display: contents;
	}
`;

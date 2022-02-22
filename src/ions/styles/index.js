import { css } from "@emotion/react";

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
		height: 100%;
	}

	body {
		margin: 0;
		font-size: 1rem;
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		display: flex;
		flex-direction: column;
	}

	#__next {
		display: contents;
	}
`;

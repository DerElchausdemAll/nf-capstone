import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FILTER_BUTTON_WIDTH } from "../../ions/constants";
import Stack from "@mui/material/Stack";
import { StyledButton } from "./styled";
import Divider from "@mui/material/Divider";
import LoadingAnimation from "../loading-animation/LoadingAnimation";

export default function TemporaryDrawer({
	handleLego,
	setFilteredItems,
	filteredItems,
	handlePlaymobil,
	handleWood,
	handleCars,
	handleOutdoor,
	handleOthers,
}) {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => event => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = anchor => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Typography
				sx={{
					display: "flex",
					justifyContent: "center",
					textTransform: "uppercase",
					background: "#02a676",
				}}
				color="white"
				variant="h4"
			>
				Option
			</Typography>
			{/* <List sx={{ display: "flex", flexDirection: "column" }}> */}
			<Stack direction="column" spacing={0}>
				<Divider />
				<StyledButton variant="text" onClick={handleLego}>
					Lego
				</StyledButton>
				<Divider />
				<StyledButton variant="text" onClick={handlePlaymobil}>
					Playmobil
				</StyledButton>
				<Divider />
				<StyledButton variant="text" onClick={handleWood}>
					Wooden Toys
				</StyledButton>
				<Divider />
				<StyledButton variant="text" onClick={handleCars}>
					Cars
				</StyledButton>
				<Divider />
				<StyledButton variant="text" onClick={handleOutdoor}>
					Outdoor Toys
				</StyledButton>
				<Divider />
				<StyledButton variant="text" onClick={handleOthers}>
					Others
				</StyledButton>
				<Divider />
				<LoadingAnimation />
			</Stack>
		</Box>
	);

	return (
		<div>
			{["left"].map(anchor => (
				<React.Fragment key={anchor}>
					{!filteredItems ? (
						<Button
							variant="contained"
							onClick={toggleDrawer(anchor, true)}
							style={{ width: FILTER_BUTTON_WIDTH }}
						>
							Filter
						</Button>
					) : (
						<Button
							variant="contained"
							onClick={() => {
								setFilteredItems(null);
							}}
							style={{ width: FILTER_BUTTON_WIDTH }}
						>
							Show All
						</Button>
					)}
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}

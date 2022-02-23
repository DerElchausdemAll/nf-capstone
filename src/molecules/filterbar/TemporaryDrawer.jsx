import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FILTER_BUTTON_WIDTH } from "../../ions/constants";
import Stack from "@mui/material/Stack";
import { StyledButton } from "./styled";

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
				sx={{ display: "flex", justifyContent: "center" }}
				color="primary"
				variant="h3"
			>
				Categories
			</Typography>
			{/* <List sx={{ display: "flex", flexDirection: "column" }}> */}
			<Stack direction="column" spacing={2}>
				<Button variant="outlined" onClick={handleLego}>
					Lego
				</Button>
				<Button variant="outlined" onClick={handlePlaymobil}>
					Playmobil
				</Button>
				<Button variant="outlined" onClick={handleWood}>
					Wooden Toys
				</Button>
				<Button variant="outlined" onClick={handleCars}>
					Cars
				</Button>
				<Button variant="outlined" onClick={handleOutdoor}>
					Outdoor Toys
				</Button>
				<Button variant="outlined" onClick={handleOthers}>
					Others
				</Button>
			</Stack>
		</Box>
	);

	return (
		<div>
			{["top"].map(anchor => (
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

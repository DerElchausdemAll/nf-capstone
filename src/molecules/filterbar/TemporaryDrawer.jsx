import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { FILTER_BUTTON_WIDTH } from "../../ions/constants";

export default function TemporaryDrawer() {
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
			<Typography variant="h3">Filter</Typography>
			<List>
				<Typography variant="h6">Lego</Typography>
				<Typography variant="h6">Wooden Toys</Typography>
				<Typography variant="h6">Playmobil</Typography>
				<Typography variant="h6">Outdoor</Typography>
				<Typography variant="h6">Cars</Typography>
				<Typography variant="h6">Lego</Typography>
				<Typography variant="h6">Others</Typography>
			</List>
			<Divider />
			<List>
				<Typography variant="h6">Radius</Typography>
			</List>
		</Box>
	);

	return (
		<div>
			{["top"].map(anchor => (
				<React.Fragment key={anchor}>
					<Button
						variant="contained"
						style={{ width: FILTER_BUTTON_WIDTH }}
						onClick={toggleDrawer(anchor, true)}
					>
						Filter
					</Button>
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

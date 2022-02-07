import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Footer = () => {
	const [value, setValue] = React.useState(0);

	return (
		<footer style={{ paddingTop: "100px" }}>
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={6}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" />
					<BottomNavigationAction label="Items" icon={<FavoriteIcon />} href="/items" />
					<BottomNavigationAction
						label="Profil"
						icon={<AccountCircleIcon />}
						href="profile"
					/>
					<BottomNavigationAction label="Form" icon={<AddCircleIcon />} href="form" />
				</BottomNavigation>
			</Paper>
		</footer>
	);
};

export default Footer;

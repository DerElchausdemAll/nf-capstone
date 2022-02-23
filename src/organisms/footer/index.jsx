import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Footer = () => {
	// const [value, setValue] = React.useState(0);

	return (
		<footer>
			<BottomNavigation />
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
				<BottomNavigation sx={{ background: "#02A676" }}>
					<BottomNavigationAction
						label="Home"
						icon={<HomeIcon fontSize="large" sx={{ color: "white" }} />}
						href="/"
					/>
					<BottomNavigationAction
						label="Items"
						icon={<FavoriteIcon fontSize="large" sx={{ color: "white" }} />}
						href="/items"
					/>
					<BottomNavigationAction
						label="Profil"
						icon={<AccountCircleIcon fontSize="large" sx={{ color: "white" }} />}
						href="/profile"
					/>
					<BottomNavigationAction
						label="Form"
						icon={<AddCircleIcon fontSize="large" sx={{ color: "white" }} />}
						href="/form"
					/>
				</BottomNavigation>
			</Paper>
		</footer>
	);
};

export default Footer;

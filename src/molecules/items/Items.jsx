import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";
import useStore from "../../ions/hooks/storeFormData";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindMenu } from "material-ui-popup-state";
import Popover from "@mui/material/Popover";
import { usePopupState, bindTrigger, bindPopover } from "material-ui-popup-state/hooks";
import TemporaryDrawer from "../filterbar/TemporaryDrawer";
import { useSession } from "next-auth/react";

const Items = () => {
	const itemCards = useStore(state => state.itemCards);
	const [bookmark, setBookmark] = useState(itemCards);
	const { data: session } = useSession();

	// const handleFilter = () => {
	// 	const outdoor = itemCards.filter(card => card.category === "outdoor");
	// 	// const playmobil = itemCards.filter(card => card.category === "playmobil");
	// 	// const wood = itemCards.filter(card => card.category === "wood");
	// 	// const cars = itemCards.filter(card => card.category === "cars");
	// 	// const others = itemCards.filter(card => card.category === "other");

	// 	if (handleTest === outdoor) {
	// 		itemCards === outdoor;
	// 	}
	// };

	const handleBookmark = () => {
		setBookmark(!bookmark);
	};
	const favorites = itemCards.filter(card => card.checked === true);

	// const handleTest = favorites => {
	// 	const lego = itemCards.filter(card => card.category === "lego");
	// 	console.log(lego);
	// 	favorites = lego;
	// };

	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "15px",
				}}
			>
				<TemporaryDrawer>sadasd</TemporaryDrawer>

				<Button variant="contained" onClick={handleBookmark} style={{ width: "120px" }}>
					{!bookmark ? "Show All" : "Favorites"}
				</Button>
			</div>
			<Container>
				<Grid container spacing={3}>
					{(bookmark ? itemCards : favorites).map(item => (
						<Grid item key={item._id} xs={12} sm={6} md={3}>
							<ItemsCard item={item} isMine={item.userId === session?.user.id} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Items;

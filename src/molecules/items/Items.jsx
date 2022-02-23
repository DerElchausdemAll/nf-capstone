import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";
import useStore from "../../ions/hooks/storeFormData";
import Button from "@mui/material/Button";
import TemporaryDrawer from "../filterbar/TemporaryDrawer";
import { useSession } from "next-auth/react";
import { FILTER_BUTTON_WIDTH } from "../../ions/constants";
import Box from "@mui/material/Box";

const Items = () => {
	const itemCards = useStore(state => state.itemCards);
	console.log(itemCards);
	const [bookmark, setBookmark] = useState(itemCards);
	const { data: session } = useSession();

	const handleBookmark = () => {
		setBookmark(!bookmark);
	};
	const favorites = itemCards.filter(card => card.checked === true);

	return (
		<div>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mt: 9,
					mb: 2,
					mx: 2,
				}}
			>
				<TemporaryDrawer />

				<Button
					variant="contained"
					onClick={handleBookmark}
					style={{ width: FILTER_BUTTON_WIDTH }}
				>
					{!bookmark ? "Show All" : "Favorites"}
				</Button>
			</Box>
			<Container>
				<Grid container spacing={0.5} sx={{ pb: 2 }}>
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

// const handleTest = favorites => {
// 	const lego = itemCards.filter(card => card.category === "lego");
// 	console.log(lego);
// 	favorites = lego;
// };

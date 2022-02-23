import React, { useState, useEffect } from "react";
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
	const [filteredItems, setFilteredItems] = useState(null);
	const { data: session } = useSession();

	const handleBookmark = () => {
		setBookmark(!bookmark);
	};
	const favorites = itemCards.filter(card => card.checked === true);

	const handleLego = () => {
		const legoItems = itemCards.filter(item => item.category === "lego");
		setFilteredItems(legoItems);
	};

	const handlePlaymobil = () => {
		const legoItems = itemCards.filter(item => item.category === "playmobil");
		setFilteredItems(legoItems);
	};

	const handleWood = () => {
		const legoItems = itemCards.filter(item => item.category === "wood");
		setFilteredItems(legoItems);
	};

	const handleCars = () => {
		const legoItems = itemCards.filter(item => item.category === "cars");
		setFilteredItems(legoItems);
	};

	const handleOutdoor = () => {
		const legoItems = itemCards.filter(item => item.category === "outdoor");
		setFilteredItems(legoItems);
	};

	const handleOthers = () => {
		const legoItems = itemCards.filter(item => item.category === "others");
		setFilteredItems(legoItems);
	};

	let items = [];

	console.log(filteredItems);

	if (filteredItems) {
		items = filteredItems;
	} else {
		items = itemCards;
	}

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
				<TemporaryDrawer
					handleLego={handleLego}
					setFilteredItems={setFilteredItems}
					filteredItems={filteredItems}
					handlePlaymobil={handlePlaymobil}
					handleWood={handleWood}
					handleCars={handleCars}
					handleOutdoor={handleOutdoor}
					handleOthers={handleOthers}
				/>

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
					{(bookmark ? items : favorites).map(item => (
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

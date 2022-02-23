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
	const [filter, setFilter] = useState([]);
	console.log(filter);
	setFilter(itemCards);
	const [bookmark, setBookmark] = useState(itemCards);
	const { data: session } = useSession();

	// const test = () => {
	// 	const filterresults = itemCards.filter(item => item.category === "lego");
	// 	console.log(filterresults);
	// 	setFilter(filterresults);
	// };

	const filterresults = itemCards.filter(lego => lego.category === "lego");
	console.log(filterresults);
	setFilter(filterresults);

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
				{/* <Button onClick={test}>Huhu</Button> */}
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
					{(bookmark ? filter : favorites).map(item => (
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

// const Items = () => {
// 	let itemCards = useStore(state => state.itemCards);
// 	console.log(itemCards);
// 	// const [filter, setFilter] = useState([]);
// 	// console.log(filter);
// 	// setFilter(itemCards);
// 	// const [bookmark, setBookmark] = useState(filter);
// 	const { data: session } = useSession();

// 	const test = () => {
// 		itemCards = itemCards.filter(item => item.category === "lego");
// 		console.log(itemCards);
// 		get(itemCards)
// 	};

// 	// useEffect(() => {
// 	// 	itemCards = filterresults;
// 	// }, [filterresults]);

// 	// const filterresults = itemCards.filter(lego => lego.category === "lego");
// 	// console.log(filterresults);
// 	// setFilter(filterresults);

// 	// const handleBookmark = () => {
// 	// 	setBookmark(!bookmark);
// 	// };
// 	// const favorites = itemCards.filter(card => card.checked === true);

// 	return (
// 		<div>
// 			<Box
// 				sx={{
// 					display: "flex",
// 					justifyContent: "space-between",
// 					mt: 9,
// 					mb: 2,
// 					mx: 2,
// 				}}
// 			>
// 				<Button onClick={test}>Huhu</Button>
// 				<TemporaryDrawer />

// 				<Button
// 					variant="contained"
// 					// onClick={handleBookmark}
// 					style={{ width: FILTER_BUTTON_WIDTH }}
// 				>
// 					{/* {!bookmark ? "Show All" : "Favorites"} */}
// 				</Button>
// 			</Box>
// 			<Container>
// 				<Grid container spacing={0.5} sx={{ pb: 2 }}>
// 					{itemCards.map(item => (
// 						<Grid item key={item._id} xs={12} sm={6} md={3}>
// 							<ItemsCard item={item} isMine={item.userId === session?.user.id} />
// 						</Grid>
// 					))}
// 				</Grid>
// 			</Container>
// 		</div>
// 	);
// };

// export default Items;

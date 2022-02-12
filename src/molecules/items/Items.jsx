import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";
import useStore from "../../ions/hooks/storeFormData";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Items = () => {
	const itemCards = useStore(state => state.itemCards);
	const [bookmark, setBookmark] = useState(itemCards);

	const handleBookmark = () => {
		setBookmark(!bookmark);
	};
	const favorites = itemCards.filter(card => card.checked === true);

	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "15px",
				}}
			>
				<PopupState variant="popover" popupId="demo-popup-menu">
					{popupState => (
						<React.Fragment>
							<Button
								variant="contained"
								{...bindTrigger(popupState)}
								style={{ width: "120px" }}
							>
								Filter
							</Button>
							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={popupState.close}>Category</MenuItem>
								<MenuItem onClick={popupState.close}>Category</MenuItem>
								<MenuItem onClick={popupState.close}>Category</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>

				<Button variant="contained" onClick={handleBookmark} style={{ width: "120px" }}>
					{!bookmark ? "Show All" : "Favorites"}
				</Button>
			</div>
			<Container>
				<Grid container spacing={3}>
					{(bookmark ? itemCards : favorites).map(item => (
						<Grid item key={item._id} xs={12} sm={6} md={3}>
							<ItemsCard item={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Items;

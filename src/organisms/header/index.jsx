import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledImage } from "./styled";

const Header = () => {
	const { data: session } = useSession();
	return (
		<header style={{ paddingBottom: "36px" }}>
			<div
				style={{
					color: "red",
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "row",
					background: "white",
					width: "100vw",
					zIndex: "300",
					position: "fixed",
					top: 0,
					left: 0,
				}}
			>
				<div style={{ display: "flex" }}>
					<div
						style={{
							width: "36px",
							height: "36px",
							margin: "10px",
							background: "violet",
							justifyContent: "space-between",
							flexDirection: "row",
						}}
					></div>
					<div
						style={{
							margin: "10px",
							background: "orange",
							borderRadius: "100%",
							height: "36px",
							width: "36px",
							justifyContent: "space-between",
							flexDirection: "row",
						}}
					></div>
					<div
						style={{
							margin: "10px",
							width: "0",
							height: "0",
							borderLeft: "25px solid transparent",
							borderRight: "25px solid transparent",

							borderBottom: "36px solid #02A676",
							justifyContent: "space-between",
							flexDirection: "row",
						}}
					></div>
				</div>
				<div>
					{session ? (
						<div style={{ display: "flex" }}>
							<Button
								variant="outlined"
								sx={{ height: "3rem", margin: "10px" }}
								onClick={() => {
									signOut();
								}}
							>
								Logout
							</Button>{" "}
							<StyledImage src={session.user.image} alt={session.user.name} />
						</div>
					) : (
						<Button
							startIcon={<GitHubIcon />}
							variant="outlined"
							sx={{ height: "3rem", margin: "10px" }}
							onClick={() => {
								signIn("github");
							}}
						>
							Login
						</Button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

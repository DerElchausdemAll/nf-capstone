import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
	const { data: session } = useSession();
	return (
		<header style={{ paddingBottom: "36px" }}>
			<div
				style={{
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
							background: "red",
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

							borderBottom: "36px solid yellow",
							justifyContent: "space-between",
							flexDirection: "row",
						}}
					></div>
				</div>

				<div>
					{session ? (
						<div>
							<Button
								variant="outlined"
								size="large"
								sx={{ height: "4rem" }}
								onClick={() => {
									signOut();
								}}
							>
								Logout
							</Button>{" "}
						</div>
					) : (
						<Button
							startIcon={<GitHubIcon />}
							variant="outlined"
							size="large"
							sx={{ height: "4rem" }}
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

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledImage, StyledTriangle, StyledBall, StyledSquare, StyledContainer } from "./styled";

const Header = () => {
	const { data: session } = useSession();
	return (
		<header>
			<StyledContainer>
				<div style={{ display: "flex" }}>
					<StyledSquare />
					<StyledBall />
					<StyledTriangle />
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
			</StyledContainer>
		</header>
	);
};

export default Header;

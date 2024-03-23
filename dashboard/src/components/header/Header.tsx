import React from "react";
import {
	Avatar,
	AppBar,
	Box,
	Tooltip,
	Toolbar,
	MenuItem,
	Typography,
	IconButton,
	Menu,
	Container,
	Button,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import {AdbIcon,MenuIcon} from '@mui/icons-material';
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ThemeToggleBtn from "../theme/ThemeToggleBtn";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { Login, Logout } from "@mui/icons-material";
import Link from "next/link";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
export type HeaderProps = {
	ColorModeContext: React.Context<{ colorModeToggle: () => "" }>;
};

const Header = (props: HeaderProps) => {
	const theme = useTheme();
	const { ColorModeContext } = props;
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const tabletCheck = useMediaQuery("(min-width:768)");

	const { user } = useUser();
	console.log("user is", user);
	const userProfileImage = user?.imageUrl;

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="fixed" sx={{ marginBottom: "48px" }}>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "flex-start",
							gap: "10px",
						}}
					>
						<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="#app-bar-with-responsive-menu"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".4rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							DASHBOARD
						</Typography>

						<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
						<Typography
							variant="h5"
							noWrap
							component="a"
							href="#app-bar-with-responsive-menu"
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".4rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Dashboard
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "flex-end",
						}}
					>
						{tabletCheck && (
							<Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
								<Typography>Sign in as {user?.user?.email}</Typography>
							</Box>
						)}
						<ThemeToggleBtn ColorModeContext={ColorModeContext} />

						<Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
							<SignedIn>
								<UserButton
									afterSignOutUrl="/"
									appearance={{
										elements: {
											avatarBox: "h-10 w-10",
										},
										variables: {
											colorPrimary: "#ff7000",
										},
									}}
								/>{" "}
							</SignedIn>
							{!userProfileImage && (
								<SignedOut>
									<Tooltip title="Open profile settings">
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<UserButton />
											<Avatar sx={{ bgcolor: deepOrange[500] }} src="" />
										</IconButton>
									</Tooltip>
									<Menu
										sx={{ mt: "45px" }}
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										open={Boolean(anchorElUser)}
										onClose={handleCloseUserMenu}
									>
										<MenuItem>
											<Link
												href={"/sign-in"}
												style={{
													color: theme.palette.text.primary,
													textDecoration: "none",
												}}
											>
												Login
											</Link>
										</MenuItem>
										<MenuItem>
											<Link
												href={"/sign-up"}
												style={{
													color: theme.palette.text.primary,
													textDecoration: "none",
												}}
											>
												Sign Up
											</Link>
										</MenuItem>
									</Menu>
								</SignedOut>
							)}
						</Box>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;

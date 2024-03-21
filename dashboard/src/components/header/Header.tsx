import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
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
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import {AdbIcon,MenuIcon} from '@mui/icons-material';
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ThemeToggleBtn from "../theme/ThemeToggleBtn";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export type HeaderProps = {
	ColorModeContext: React.Context<{ colorModeToggle: () => "" }>;
};

const Header = (props: HeaderProps) => {
	const { ColorModeContext } = props;
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const tabletCheck = useMediaQuery("(min-width:768)");

	const { data: session } = useSession();
	const userProfileImage = session?.user?.image;

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
				<Toolbar disableGutters>
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
					{/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box> */}
					{tabletCheck && (
						<Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
							<Typography>Sign in as {session?.user?.email}</Typography>
						</Box>
					)}
					<ThemeToggleBtn ColorModeContext={ColorModeContext} />

					<Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
						<Tooltip title="Open profile settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								{userProfileImage ? (
									<Avatar alt="Remy Sharp" src={userProfileImage} />
								) : (
									<Avatar sx={{ bgcolor: deepOrange[500] }}>F</Avatar>
								)}
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
							<MenuItem onClick={() => (session ? signOut : signIn)}>
								<Typography textAlign="center">
									{session ? "Logout" : "Login"}
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;

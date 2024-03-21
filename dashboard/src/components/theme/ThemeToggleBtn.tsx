import { IconButton, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@emotion/react";

export type ThemeToggleButtonProps = {
	ColorModeContext: React.Context<{ colorModeToggle: () => "" }>;
};
const ThemeToggleBtn = (props: ThemeToggleButtonProps) => {
	const mobileCheck = useMediaQuery("(min-width:500px)");

	const {
		ColorModeContext = React.createContext({ colorModeToggle: () => "" }),
	} = props;
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<>
			{/* {mobileCheck && <Typography>{theme?.palette?.mode} </Typography>} */}

			<IconButton
				sx={{ mr: 2 }}
				onClick={colorMode?.toggleColorMode}
				color="inherit"
			>
				{theme?.palette?.mode === "dark" ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</>
	);
};

export default ThemeToggleBtn;

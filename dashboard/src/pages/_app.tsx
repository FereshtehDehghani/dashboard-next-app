import { useTheme, CssBaseline } from "@mui/material";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useContext } from "react";
import ThemeToggleBtn from "@/components/theme";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/header";

const ColorModeContext = createContext({
	toggleColorMode: () => "",
});

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
	const [mode, setMode] = React.useState<"light" | "dark">("dark");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const darkThemeChosen = React.useMemo(
		() =>
			createTheme({
				...darkTheme,
			}),
		[mode]
	);

	const lightThemeChosen = React.useMemo(
		() =>
			createTheme({
				...lightTheme,
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider
				theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
			>
				<SessionProvider session={session}>
					<CssBaseline />
					<Header ColorModeContext={ColorModeContext} />
					<Component {...pageProps} />
				</SessionProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
export default App;

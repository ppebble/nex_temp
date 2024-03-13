import React, { useCallback, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { themeCreator } from './base';

export const ThemeContext = React.createContext((themeName: string): void => {});

const ThemeProviderWrapper = ({ children }: React.PropsWithChildren) => {
	const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
	const [themeName, _setThemeName] = useState(curThemeName);
	const theme = themeCreator(themeName);
	// const setThemeName = (themeNameParam: string): void => {
	// 	localStorage.setItem('appTheme', themeNameParam);
	// 	_setThemeName(themeNameParam);
	// };
	const setThemeName = useCallback(
		(themeNameParam: string) => {
			localStorage.setItem('appTheme', themeNameParam);
			_setThemeName(themeNameParam);
		},
		[themeName],
	);

	return (
		<StylesProvider injectFirst>
			<ThemeContext.Provider value={setThemeName}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</ThemeContext.Provider>
		</StylesProvider>
	);
};

export default ThemeProviderWrapper;

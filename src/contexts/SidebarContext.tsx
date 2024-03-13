import React, { FC, useState, createContext, useMemo } from 'react';

type SidebarContext = {
	sidebarToggle: any;
	toggleSidebar: () => void;
	closeSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>({} as SidebarContext);

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
	const [sidebarToggle, setSidebarToggle] = useState(false);
	const toggleSidebar = () => {
		setSidebarToggle(!sidebarToggle);
	};
	const closeSidebar = () => {
		setSidebarToggle(false);
	};
	const value = useMemo(
		() => ({
			sidebarToggle,
			toggleSidebar,
			closeSidebar,
		}),
		[sidebarToggle, toggleSidebar, closeSidebar],
	);

	return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

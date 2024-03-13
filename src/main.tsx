import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'nprogress/nprogress.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SidebarProvider } from './contexts/SidebarContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<HelmetProvider>
		<SidebarProvider>
			<BrowserRouter>
				<QueryClientProvider client={new QueryClient()}>
					<App />
				</QueryClientProvider>
			</BrowserRouter>
		</SidebarProvider>
	</HelmetProvider>,
);

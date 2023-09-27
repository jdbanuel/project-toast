import React from 'react';

import ToastProvider from '../ToastProvider';
import MessageProvider from '../MessageProvider';
import VariantProvider from '../VariantProvider';
import ToastPlayground from '../ToastPlayground';

import Footer from '../Footer';

function App() {
	return (
		<>
			<ToastProvider>
				<MessageProvider>
					<VariantProvider>
						<ToastPlayground />
						<Footer />
					</VariantProvider>
				</MessageProvider>
			</ToastProvider>
		</>
	);
}

export default App;

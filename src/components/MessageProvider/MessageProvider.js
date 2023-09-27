import React from 'react';

export const MessageContext = React.createContext();

function MessageProvider({ children }) {
	const [message, setMessage] = React.useState('');

	return (
		<MessageContext.Provider value={{ message, setMessage }}>
			{children}
		</MessageContext.Provider>
	);
}

export default MessageProvider;

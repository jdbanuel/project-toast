import React from 'react';
import { useKeyDown } from '../../hooks/useKeyDown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastArray, setToastArray] = React.useState([]);

	useKeyDown('Escape', clearAllToasts);

	function removeElementById(array, id) {
		return array.filter((obj) => {
			return obj.id !== id;
		});
	}

	function handleToastDismiss(id) {
		const newToastArray = removeElementById(toastArray, id);

		setToastArray([...newToastArray]);
	}

	function clearAllToasts() {
		setToastArray([]);
	}

	function handleAddToast(event, message, variant) {
		event.preventDefault();

		const newToast = {
			id: crypto.randomUUID(),
			message: message,
			variant: variant,
		};

		setToastArray([...toastArray, newToast]);
	}

	const value = {
		toastArray,
		handleToastDismiss,
		handleAddToast,
		clearAllToasts,
	};

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;

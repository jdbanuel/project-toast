import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
	const { toastArray, handleToastDismiss, clearAllToasts } =
		React.useContext(ToastContext);

	React.useEffect(() => {
		document.addEventListener('keydown', (event) => {
			console.log(event);
			if (event.key === '``') {
				clearAllToasts();
			}
		});
	}, []);

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{toastArray.map((toast) => {
				return (
					<li className={styles.toastWrapper} key={toast.id}>
						<Toast
							variant={toast.variant}
							handleDismiss={() => {
								handleToastDismiss(toast.id);
							}}
						>
							{toast.message}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;

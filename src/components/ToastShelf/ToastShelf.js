import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastArray, handleToastDismiss }) {
	return (
		<ol className={styles.wrapper}>
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

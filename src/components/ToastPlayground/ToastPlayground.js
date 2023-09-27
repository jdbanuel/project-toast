import React from 'react';

import Button from '../Button';

import Radio from '../Radio/Radio';

import ToastShelf from '../ToastShelf/ToastShelf';

// import {
// 	ToastContext,
// 	removeElementById,
// 	handleToastDismiss,
// 	handleAddToast,
// } from '../ToastProvider';

import { ToastContext } from '../ToastProvider';
import { MessageContext } from '../MessageProvider';
import { VariantContext } from '../VariantProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const { handleAddToast } = React.useContext(ToastContext);
	const { message, setMessage } = React.useContext(MessageContext);
	const { variant, setVariant } = React.useContext(VariantContext);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<div className={styles.controlsWrapper}>
				<form
					onSubmit={(event) => {
						handleAddToast(event, message, variant);
						setMessage('');
						setVariant('notice');
					}}
				>
					<div className={styles.row}>
						<label
							htmlFor="message"
							className={styles.label}
							style={{ alignSelf: 'baseline' }}
						>
							Message
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id="message"
								className={styles.messageInput}
								value={message}
								onChange={(event) => {
									setMessage(event.target.value);
								}}
							/>
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label}>Variant</div>
						<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							{VARIANT_OPTIONS.map((option) => (
								<div key={`variant-${option}`}>
									<Radio
										id={`variant-${option}`}
										labelName={option}
										groupName="variant"
										checked={variant === option}
										onChange={(event) => {
											setVariant(event.target.value);
										}}
									/>
								</div>
							))}
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label} />
						<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							<Button>Pop Toast!</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ToastPlayground;

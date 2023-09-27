import React from 'react';

export function useEscapeKey(execFunction) {
	React.useEffect(() => {
		const handleEscapeKey = function (event) {
			if (event.key === 'Escape') {
				execFunction();
			}
		};
		document.addEventListener('keydown', handleEscapeKey);

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, []);
}

import React from 'react';

export function useKeyDown(key, execFunction) {
	React.useEffect(() => {
		const handleKeyDown = function (event) {
			if (event.key === key) {
				execFunction();
			}
		};
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
}

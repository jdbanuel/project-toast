import React from 'react';

function Radio({ labelName, groupName, id, ...delegated }) {
	return (
		<label htmlFor={id}>
			<input
				{...delegated}
				id={id}
				type="radio"
				name={groupName}
				value={labelName.toLowerCase()}
			/>
			{labelName}
		</label>
	);
}

export default Radio;

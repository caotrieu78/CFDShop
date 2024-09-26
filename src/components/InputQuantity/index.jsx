import React from "react";

export const InputQuantity = React.forwardRef(({ max, ...props }, ref) => {
	return (
		<input
			ref={ref}
			type="number"
			id="qty"
			className="form-control"
			min="1"
			max={max}
			step="1"
			data-decimals="0"
			required
			{...props}
		/>
	);
});

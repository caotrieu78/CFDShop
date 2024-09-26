import React from "react";

const Checkbox = ({ id, label, onChange, className, ...props }) => {
	return (
		<div className="custom-control custom-checkbox">
			<input
				type="checkbox"
				className="custom-control-input"
				id={id || "checkbox"}
				onChange={onChange}
				{...props}
			/>
			<label className="custom-control-label" htmlFor={id || "checkbox"}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;

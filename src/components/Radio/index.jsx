import React, { createContext, useContext, useEffect, useState } from "react";

const RadioContext = createContext();

const RadioGroup = ({
	defaultValue,
	disabled,
	className,
	onChange,
	children,
}) => {
	const [value, setValue] = useState(defaultValue || "");

	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	const onCheckChange = (e) => {
		const value = e.target.value;
		setValue(value);
		onChange?.(value);
	};

	return (
		<RadioContext.Provider
			value={{ value, disabled, onCheckChange }}
			className={`radio-group ${className}`}
		>
			{children}
		</RadioContext.Provider>
	);
};

const RadioItem = ({ children, disabled = false, value }) => {
	const { value: selectedValue, onCheckChange } = useContext(RadioContext);
	return (
		<div className="custom-control custom-radio">
			<input
				className="custom-control-input"
				type="radio"
				id={value}
				name={value}
				value={value}
				checked={selectedValue === value}
				disabled={disabled}
				onChange={onCheckChange}
			/>
			<label className="custom-control-label" htmlFor={value}>
				{children}
			</label>
		</div>
	);
};

export default { Group: RadioGroup, Item: RadioItem };

import { THUNK_STATUS } from "@/constants/general";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const InputNumberStyle = styled.input`
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		/* display: none; <- Crashes Chrome on hover */
		-webkit-appearance: none;
		margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
	}

	-moz-appearance: textfield; /* Firefox */
`;

const QuantityInput = ({
	className,
	defaultValue,
	min = 1,
	max = 10,
	step = 1,
	value,
	onChange,
	...inputProps
}) => {
	const [renderValue, setRenderValue] = useState(value || "1");
	const { updateStatus } = useSelector((state) => state.cart);

	useEffect(() => {
		if (value !== renderValue && updateStatus === THUNK_STATUS.rejected) {
			setTimeout(() => {
				setRenderValue(value);
			}, 300);
		}
	}, [value, updateStatus]);

	const onInputChange = (e) => {
		setRenderValue(e.target.value);
	};

	const onInputBlur = (e) => {
		const value = modifyValue(e.target.value);
		setRenderValue(value);
		onChange?.(value, onChangeError);
	};

	const onIncrease = () => {
		const value = modifyValue(Number(renderValue) + Number(step));
		setRenderValue(value);
		onChange?.(value, onChangeError);
	};

	const onDecrease = () => {
		const value = modifyValue(Number(renderValue) - Number(step));
		setRenderValue(value);
		onChange?.(value, onChangeError);
	};

	const modifyValue = (value) => {
		if (value > max) {
			return max;
		} else if (value < min) {
			return min;
		} else {
			return value;
		}
	};

	const onChangeError = () => {
		setTimeout(() => {
			setRenderValue(value || "1");
		}, 300);
	};

	return (
		<div className={className}>
			<div className="input-group input-spinner">
				<div className="input-group-prepend">
					<button
						className="btn btn-decrement btn-spinner"
						onClick={onDecrease}
					>
						<i className="icon-minus"></i>
					</button>
				</div>
				<InputNumberStyle
					type="number"
					className="form-control"
					style={{ textAlign: "center" }}
					value={renderValue}
					onChange={onInputChange}
					onBlur={onInputBlur}
					max={max}
					{...inputProps}
				/>
				<div className="input-group-append">
					<button
						style={{ minWidth: 26 }}
						className="btn btn-increment btn-spinner"
						type="button"
						onClick={onIncrease}
					>
						<i className="icon-plus"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuantityInput;

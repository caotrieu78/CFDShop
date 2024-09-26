import { forwardRef } from "react";

const InputM = (
	{ label, required, error, renderInput = undefined, ...inputProps },
	ref
) => {
	return (
		<div className="form-group">
			<label className="label" htmlFor={inputProps?.name || ""}>
				{label} {required && <span>*</span>}
			</label>
			{renderInput?.({ ...inputProps, ref: ref }) || (
				<input
					ref={ref}
					className={`form-control ${!!error ? "input-error" : ""}`}
					{...inputProps}
				/>
			)}

			<p className="form-error">{error || ""}</p>
		</div>
	);
};

export const Input = forwardRef(InputM);

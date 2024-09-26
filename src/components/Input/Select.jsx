import React from "react";

const Select = ({
    options,
    label,
    value,
    required,
    error,
    onChange,
    ...selectProps //các tham số còn lại rest es6
}) => {
    return (
        <>
            <label className="label">
                {label} {required ? <span>*</span> : ""}
            </label>
            <select
                className={`form-control form-select ${error ? "formerror" : ""}`}
                value={value}
                //required
                onChange={onChange}
                {...selectProps}
            >
                {options?.length > 0 && options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
            <p className="error">{error || ""}</p>
        </>
    );
};

export default Select;
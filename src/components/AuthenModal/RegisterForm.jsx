import React from "react";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

const RegisterForm = ({onRegister}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		if (data) {
			const payload = {
				firstName: '',
				lastName: '',
				email: data.email,
				password: data.password,
			};
			// call api
			onRegister?.(payload)
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Your email address"
				required
				{...register("email", {
					required: "Please enter your email",
					pattern: {
						value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
						message: "Please enter email with format abc@def.com",
					},
				})}
				error={errors?.email?.message || ""}
			/>
			<Input
				label="Password"
				required
				type="password"
				{...register("password", {
					required: "Please enter your password",
				})}
				error={errors?.password?.message || ""}
			/>
			<div className="form-footer">
				<Button type="submit" variant="outline">
					<span>SIGN UP</span>
					<i className="icon-long-arrow-right" />
				</Button>
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						className="custom-control-input"
						id="register-policy"
						// required
					/>
					<label
						className="custom-control-label"
						htmlFor="register-policy"
					>
						I agree to the {" "}
						<a href="privacy-policy.html">privacy policy</a> *
					</label>
				</div>
			</div>
		</form>
	);
};

export default RegisterForm;

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Button } from "../Button";

const LoginForm = ({onLogin}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		if (data) {
			const payload = {
				email: data.email,
				password: data.password,
			};
			// call api
			onLogin?.(payload)
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Username or email address"
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
					<span>LOG IN</span>
					<i className="icon-long-arrow-right" />
				</Button>
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						className="custom-control-input"
						id="signin-remember"
					/>
					<label
						className="custom-control-label"
						htmlFor="signin-remember"
					>
						Remember Me
					</label>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;

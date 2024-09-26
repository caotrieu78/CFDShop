import { Input } from "@/components/Input";
import { REGEX } from "@/constants/regex";
import { authService } from "@/services/authServices";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

const BillingDetail = ({ form, profile }) => {
	const [dataProvince, setDataProvince] = useState([]);
	const [dataDistrict, setDataDistrict] = useState([]);
	const [dataWard, setDataWard] = useState([]);

	const [idProvince, setIdProvince] = useState("");

	const [isDistrict, setIsDistrict] = useState("");

	const [idWard, setIdWard] = useState("");

	const {
		register,
		formState: { errors },
		control,
	} = form || {};

	// Get data Province

	const getDataProvince = async () => {
		const res = await authService.getDataProvince();
		try {
			if (res.data) {
				const _dataTemp = res.data.data.provinces.map((e) => {
					return {
						value: e.id,
						label: e.name,
					};
				});
				setDataProvince(_dataTemp);
			}
		} catch (error) {
			console.log("🚀error---->", error);
		}
	};

	// Get data District
	const getDataDistrict = async (id) => {
		const res = await authService.getDataDistrict(id);
		try {
			if (res.data) {
				const _dataTemp = res.data.data.districts.map((e) => {
					return {
						value: e.id,
						label: e.name,
					};
				});
				setDataDistrict(_dataTemp);
			}
		} catch (error) {
			console.log("🚀error---->", error);
		}
	};

	// Get data Ward
	const getDataWard = async (id) => {
		const res = await authService.getDataWard(id);
		try {
			if (res.data) {
				const _dataTemp = res.data.data.wards.map((e) => {
					return {
						value: e.id,
						label: e.name,
					};
				});
				setDataWard(_dataTemp);
			}
		} catch (error) {
			console.log("🚀error---->", error);
		}
	};

	const handleChangeProvince = (_idProvince) => {
		getDataDistrict(_idProvince);
		setIdProvince(_idProvince);
		setIdWard();
		setIsDistrict();
	};

	const handleChangeDistrict = (_idDistrict) => {
		getDataWard(_idDistrict);
		setIsDistrict(_idDistrict);
		setIdWard();
	};

	const handleChangeWard = (_idWard) => {
		setIdWard(_idWard);
	};

	/* <-------  Get data address default  -------> */

	useEffect(() => {}, []);

	useEffect(() => {
		if (profile?.province) {
			getDataProvince();
			getDataDistrict(profile?.province);
			getDataWard(profile?.district);
			setIdProvince(profile?.province);
			setIsDistrict(profile?.district);
			setIdWard(profile.ward);
			return;
		}
		getDataProvince();
	}, [profile?.province]);

	return (
		<div className="col-lg-9">
			<h2 className="checkout-title">Billing Details</h2>
			<div className="row">
				<div className="col-sm-4">
					<Input
						type="text"
						required
						label="Name"
						{...register("fullName", {
							required: "Please enter your name",
						})}
						error={errors?.fullName?.message || ""}
					/>
				</div>
				<div className="col-sm-4">
					<Input
						type="text"
						required
						label="Phone number"
						{...register("phone", {
							// required: "Please enter your Phone",
							pattern: {
								value: REGEX.PHONE,
								message: "Please enter phone with format",
							},
						})}
						error={errors?.phone?.message || ""}
					/>
				</div>
				<div className="col-sm-4">
					<Input
						disabled
						required
						label="Email address"
						{...register("email", {
							required: "Please enter your email",
						})}
						error={errors?.email?.message || ""}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<label>Province/City *</label>
					<div className="select-custom">
						<Controller
							name="province"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field }) => (
								<Select
									style={{ width: "100%" }}
									placeholder="Vui lòng chọn tỉnh /thành"
									options={dataProvince}
									value={idProvince || null}
									optionFilterProp="children"
									onChange={(e) => {
										field.onChange(e);
										handleChangeProvince(e);
									}}
									showSearch
									filterOption={(input, option) =>
										removeAccents(option?.label ?? "")
											.toLowerCase()
											.includes(
												removeAccents(
													input.toLowerCase()
												)
											)
									}
								/>
							)}
						/>
					</div>
				</div>
				<div className="col-sm-4">
					<label>District/Town *</label>
					<div className="select-custom">
						<Controller
							name="district"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field }) => (
								<Select
									style={{ width: "100%" }}
									placeholder="Vui lòng chọn quận / huyện"
									options={dataDistrict}
									value={isDistrict || null}
									optionFilterProp="children"
									onChange={(e) => {
										field.onChange(e);
										handleChangeDistrict(e);
									}}
									showSearch
									filterOption={(input, option) =>
										removeAccents(option?.label ?? "")
											.toLowerCase()
											.includes(
												removeAccents(
													input.toLowerCase()
												)
											)
									}
								/>
							)}
						/>
					</div>
				</div>
				<div className="col-sm-4">
					<label>Ward *</label>
					<div className="select-custom">
						<Controller
							name="ward"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field }) => (
								<Select
									style={{ width: "100%" }}
									placeholder="Vui lòng chọn phường xã"
									options={dataWard}
									value={idWard || null}
									onChange={(e) => {
										field.onChange(e);
										handleChangeWard(e);
									}}
									showSearch
									optionFilterProp="children"
									filterOption={(input, option) =>
										removeAccents(option?.label ?? "")
											.toLowerCase()
											.includes(
												removeAccents(
													input.toLowerCase()
												)
											)
									}
								/>
							)}
						/>
					</div>
				</div>
			</div>
			<Input
				type="text"
				required
				{...register("street", {
					required: "Please enter your address",
				})}
				label="Street address"
				error={errors?.street?.message || ""}
			/>
			<Input
				{...register("note")}
				label="Order notes (optional)"
				renderInput={(inputProps) => {
					return <textarea
						{...inputProps}
						className="form-control"
						cols={30}
						rows={4}
						placeholder="Notes about your order, e.g. special notes for delivery"
					/>;
				}}
			/>
			{/* <label>Order notes (optional)</label>
			<textarea
				className="form-control"
				cols={30}
				rows={4}
				placeholder="Notes about your order, e.g. special notes for delivery"
				defaultValue={""}
			/> */}
			{/* <div className="custom-control custom-checkbox">
				<input
					type="checkbox"
					className="custom-control-input"
					id="checkout-create-acc"
				/>
				<label
					className="custom-control-label"
					htmlFor="checkout-create-acc"
				>
					Create an account?
				</label>
			</div> */}
		</div>
	);
};

export default BillingDetail;

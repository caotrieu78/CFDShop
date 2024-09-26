import { Input } from "@/components/Input";
import { REGEX } from "@/constants/regex";
import { authService } from "@/services/authServices";
import { removeAccents } from "@/utils/format";
import { message, Select } from "antd";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";


const FormAccount = ({ profile = {} }) => {

	const newPassword = useRef({});

	const [dataProvince, setDataProvince] = useState([]);
	const [dataDistrict, setDataDistrict] = useState([]);
	const [dataWard, setDataWard] = useState([]);

	const [idProvince, setIdProvince] = useState("");

	const [isDistrict, setIsDistrict] = useState("");

	const [idWard, setIdWard] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch
	} = useForm(
		{
			defaultValues: {
				email: profile.email,
				firstName: profile.firstName || "",
				phone: profile.phone,
				street: profile?.street,
				province: profile?.province,
				district: profile?.district,
				ward: profile?.ward,
				birthday: profile?.birthday ? dayjs(profile?.birthday || "01-01-2000").format('YYYY/MM/DD').replaceAll("/", "-") : ""
			}
		}
	);
	newPassword.current = watch('newPassword', '');

	// Get data Province

	const getDataProvince = async () => {
		const res = await authService.getDataProvince();
		try {
			if (res.data) {
				const _dataTemp = res.data.data.provinces.map((e) => {
					return {
						value: e.id,
						label: e.name
					}
				})
				setDataProvince(_dataTemp);
			}
		} catch (error) {
			console.log('🚀error---->', error);

		}

	}

	// Get data District
	const getDataDistrict = async (id) => {
		const res = await authService.getDataDistrict(id);
		try {
			if (res.data) {
				const _dataTemp = res.data.data.districts.map((e) => {
					return {
						value: e.id,
						label: e.name
					}
				})
				setDataDistrict(_dataTemp);
			}
		} catch (error) {
			console.log('🚀error---->', error);

		}

	}

	// Get data Ward
	const getDataWard = async (id) => {
		const res = await authService.getDataWard(id);
		try {
			if (res.data) {
				const _dataTemp = res.data.data.wards.map((e) => {
					return {
						value: e.id,
						label: e.name
					}
				})
				setDataWard(_dataTemp);
			}
		} catch (error) {
			console.log('🚀error---->', error);

		}

	};

	const handleChangeProvince = (_idProvince) => {
		getDataDistrict(_idProvince);
		setIdProvince(_idProvince);
		setIdWard();
		setIsDistrict();
	}

	const handleChangeDistrict = (_idDistrict) => {
		getDataWard(_idDistrict);
		setIsDistrict(_idDistrict);
		setIdWard();
	}

	const handleChangeWard = (_idWard) => {
		setIdWard(_idWard);
	}

	const onSubmit = async (data) => {
		try {
			const res = await authService.updateProfile({ ...data, lastName: profile?.lastName });
			if (res.status == 200) {
				message.success("Update success");
			}
		} catch (error) {
			message.error(error?.response?.data?.message || "Something went wrong");
		}

	};

	/* <-------  Get data address default  -------> */

	useEffect(() => {
		if (profile?.province) {
			getDataProvince();
			getDataDistrict(profile?.province);
			getDataWard(profile?.district);
			setIdProvince(profile?.province);
			setIsDistrict(profile?.district)
			setIdWard(profile.ward)
			return;
		}
		getDataProvince();
	}, [])

	return (
		<div className="tab-pane fade active show">
			<form className="account-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-sm-6">
						<Input
							type="text"
							required
							label="Name"
							{...register("firstName", {
								required: "Please enter your name",
							})}
							error={errors?.firstName?.message || ""}
						/>
					</div>
					<div className="col-sm-6">
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
					<div className="col-sm-6">
						<Input
							type="text"
							required
							label="Phone number"
							{...register("phone", {
								required: "Please enter your Phone",
								pattern: {
									value: REGEX.PHONE,
									message:
										"Please enter email with format phone",
								},
							})}
							error={errors?.phone?.message || ""}
						/>
					</div>
					<div className="col-sm-6">
						<Input
							type="date"
							className="form-control"
							required
							label="Ngày sinh"
							{...register("birthday", {
								required: "Please enter your birthday",
							})}
							error={errors?.birthday?.message || ""}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						<label>Province/City *</label>
						<Controller
							name="province"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field }) => (
								<Select
									style={{ width: '100%' }}
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
										removeAccents(option?.label ?? '')
											.toLowerCase()
											.includes(removeAccents(input.toLowerCase()))
									}
								/>
							)}
						/>

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
										style={{ width: '100%' }}
										placeholder="Vui lòng chọn quận / huyện"
										options={dataDistrict}
										value={isDistrict || null}
										optionFilterProp="children"
										onChange={(e) => {
											field.onChange(e);
											handleChangeDistrict(e)
										}}
										showSearch
										filterOption={(input, option) =>
											removeAccents(option?.label ?? '')
												.toLowerCase()
												.includes(removeAccents(input.toLowerCase()))
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
										style={{ width: '100%' }}
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
											removeAccents(option?.label ?? '')
												.toLowerCase()
												.includes(removeAccents(input.toLowerCase()))
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
					type="password"
					label="Current password (leave blank to leave unchanged)"
					{...register('password')}
					error={errors?.password?.message || ""}
				/>

				<Input
					type="password"
					label="New password (leave blank to leave unchanged)"
					error={errors?.newPassword?.message || ""}
					{...register('newPassword')}
				/>

				<Input type="password" label="Confirm new password"
					error={errors?.cpassword?.message || ""}
					{...register('cpassword', {
						validate: (value) => value === newPassword.current || 'Xác nhận mật khẩu không khớp',
					})}
				/>

				<button className="btn btn-outline-primary-2" >
					<span>SAVE CHANGES</span>
					<i className="icon-long-arrow-right" />
				</button>
			</form>
		</div>
	);
};

export default FormAccount;

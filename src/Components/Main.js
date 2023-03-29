import React, { useState } from "react";
import "./main.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import UploadIcon from "@mui/icons-material/Upload";
import { useSelector, useDispatch } from "react-redux";
import {
	changeMainInput,
	addField,
	removeField,
} from "../redux/actions/mainActions";
import axios from "axios";
// import { loadFile } from "./Template1";

const Input = styled("input")({
	display: "none",
});

function Main() {
	const [open, setOpen] = useState(false);
	const [field, setField] = useState({
		fieldValue: "",
		fieldType: "Text",
		fieldName: "",
	});

	const form = useSelector((state) => state.main.form);

	const dispatch = useDispatch();

	// const [image, setImage] = useState(null);
	const handleAvatarClick = (image) => {
		axios
			.post(
				"https://apps.nomid.com/tools-backend/img/image-upload",
				image
			)
			.then((res) => {
				dispatch(
					changeMainInput(
						"image",
						"https://apps.nomid.com/tools-backend/img/uploads/EmailGenerator/" +
							res.data
					)
				);
				setOpen(true);
				setTimeout(function () {
					setOpen(false);
				}, 3000);
			});
	};

	return (
		<div className="main">
			<Grid container rowSpacing={1}>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>
							First Name
							<span className="star">*</span>
						</label>
						<input
							value={form.firstName}
							onChange={(e) =>
								dispatch(
									changeMainInput("firstName", e.target.value)
								)
							}
							required
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Last Name</label>
						<input
							value={form.lastName}
							onChange={(e) =>
								dispatch(
									changeMainInput("lastName", e.target.value)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Mobile Number</label>
						<input
							value={form.mobileNumber}
							onChange={(e) =>
								dispatch(
									changeMainInput(
										"mobileNumber",
										e.target.value
									)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>
							Email
							<span className="star">*</span>
						</label>
						<input
							type="email"
							value={form.email}
							onChange={(e) =>
								dispatch(
									changeMainInput("email", e.target.value)
								)
							}
							required
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Job Title</label>
						<input
							value={form.jobTitle}
							onChange={(e) =>
								dispatch(
									changeMainInput("jobTitle", e.target.value)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Department</label>
						<input
							value={form.department}
							onChange={(e) =>
								dispatch(
									changeMainInput(
										"department",
										e.target.value
									)
								)
							}
						/>
					</div>
				</Grid>

				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Company Name</label>
						<input
							value={form.companyName}
							onChange={(e) =>
								dispatch(
									changeMainInput(
										"companyName",
										e.target.value
									)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Website</label>
						<input
							value={form.website}
							onChange={(e) =>
								dispatch(
									changeMainInput("website", e.target.value)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Office Phone</label>
						<input
							value={form.officePhone}
							onChange={(e) =>
								dispatch(
									changeMainInput(
										"officePhone",
										e.target.value
									)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="main-input">
						<label>Office Fax</label>
						<input
							value={form.officeFax}
							onChange={(e) =>
								dispatch(
									changeMainInput("officeFax", e.target.value)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<div className="main-input">
						<label>Address</label>
						<input
							value={form.address}
							onChange={(e) =>
								dispatch(
									changeMainInput("address", e.target.value)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<div className="main-input">
						<label>Address Line 2</label>
						<input
							value={form.addressLine2}
							onChange={(e) =>
								dispatch(
									changeMainInput(
										"addressLine2",
										e.target.value
									)
								)
							}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<div className="main-input">
						<label>LOGO/PHOTO/AVATAR IMAGE</label>
					</div>
				</Grid>
				<Grid
					style={{ margin: "0vw 0.9vw" }}
					item
					xs={12}
					sm={12}
					md={12}
				>
					<label htmlFor="contained-button-file">
						<Input
							accept="image/*"
							id="contained-button-file"
							multiple
							type="file"
							onChange={(e) => {
								const formData = new FormData();
								formData.append(
									"my-image-file",
									e.target.files[0],
									e.target.files[0].name
								);
								handleAvatarClick(formData);
							}}
						/>
						<Button variant="contained" component="span">
							<UploadIcon />
							Upload Image
						</Button>
					</label>
				</Grid>
			</Grid>

			<p>Min Dimensions: 500px X 500px</p>
			<p>Max Dimensions: 800px X 800px</p>
			<p>
				File Formats Supported: JPG, JPEG, PNG, BMP, GIF(with
				animations)
			</p>
			<br />
			<p style={{ fontSize: "9px" }}>
				Suggestion : Use square image for better visual
			</p>
			<p style={{ fontSize: "9px" }}>
				Image must be suitably sized for your signature as it will be
				displayed actual size.
			</p>

			{/* Alert Button Part */}
			<div className="alert">
				<Box sx={{ width: "100%" }}>
					<Collapse in={open}>
						<Alert
							action={
								<IconButton
									aria-label="close"
									color="inherit"
									size="small"
									onClick={() => {
										setOpen(false);
									}}
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{ mb: 2 }}
						>
							Image Uploaded Successfully!
						</Alert>
					</Collapse>
				</Box>
			</div>

			{/* additional fields */}
			<h2
				style={{
					paddingLeft: "0.5vw",
					fontFamily: "Poppins",
					marginBottom: "0",
				}}
			>
				Additional Fields
			</h2>

			{form.additionalField.map((eachField) => (
				<div className="add-field">
					<input
						key={eachField.fieldName}
						value={eachField.fieldName}
					/>
					<select
						key={eachField.fieldName}
						value={eachField.fieldType}
						disabled
					>
						<option value="Text">Text</option>
						<option value="Link">Link</option>
						<option value="Phone">Phone</option>
					</select>

					<input
						// style="width: 100px !important"
						key={eachField.fieldName}
						value={eachField.fieldValue}
						disabled
					/>

					<Button
						className="add-field-button"
						onClick={() => {
							dispatch(removeField(eachField.fieldName));
						}}
					>
						<DeleteIcon style={{ color: "white" }} />
					</Button>
				</div>
			))}

			<div className="add-field">
				<input
					placeholder="Field Name"
					value={field.fieldName}
					onChange={(e) =>
						setField({
							fieldName: e.target.value,
							fieldType: field.fieldType,
							fieldValue: field.fieldValue,
						})
					}
				/>
				<select
					// key={social.socialID}
					value={field.fieldType}
					onChange={(e) =>
						setField({
							fieldName: field.fieldName,
							fieldType: e.target.value,
							fieldValue: field.fieldValue,
						})
					}
				>
					<option value="Text">Text</option>
					<option value="Link">Link</option>
					<option value="Phone">Phone</option>
				</select>

				<input
					placeholder="Field Value"
					value={field.fieldValue}
					onChange={(e) =>
						setField({
							fieldName: field.fieldName,
							fieldType: field.fieldType,
							fieldValue: e.target.value,
						})
					}
				/>

				<Button
					disabled={
						field.fieldName.length == 0 ||
						field.fieldValue.length == 0
					}
					className="add-field-button"
					onClick={() => {
						dispatch(
							addField(
								field.fieldName,
								field.fieldType,
								field.fieldValue
							)
						);

						setField({
							fieldName: "",
							fieldType: "Text",
							fieldValue: "",
						});
					}}
				>
					<AddIcon style={{ color: "white" }} />
					<strong>Add</strong>
				</Button>
			</div>
		</div>
	);
}

export default Main;
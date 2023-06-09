import React, { useState } from "react";
import "./cta.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import UploadIcon from "@mui/icons-material/Upload";
import { changeCTAInput } from "../redux/actions/ctaActions";
import axios from "axios";

const Input = styled("input")({
	display: "none",
});

function Cta() {
	//   const [selector, setSelector] = useState(false);
	const form = useSelector((state) => state.cta.form);
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const handleCTAClick = (image) => {
		axios
			.post(
				"https://demo.cuberootdigital.in/tools-backend/image-upload",
				image
			)
			.then((res) => {
				// console.log(res.data)
				dispatch(
					changeCTAInput(
						"image",
						"https://demo.cuberootdigital.in/tools-backend/uploads/EmailGenerator/" +
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
		<div className="cta">
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
							CTA Image Uploaded Successfully
						</Alert>
					</Collapse>
				</Box>
			</div>
			<div className="radioButton">
				<input
					type="radio"
					id="text"
					name="CTA type"
					value="0"
					onClick={() => dispatch(changeCTAInput("imageView", false))}
					checked={!form.imageView}
				/>
				<label>CTA Text Button</label>
				<br />
			</div>

			<div className="radioButton">
				<input
					type="radio"
					id="Image"
					name="CTA type"
					value="Image"
					onClick={() => dispatch(changeCTAInput("imageView", true))}
					checked={form.imageView}
				/>
				<label>CTA Image</label>
			</div>

			{form.imageView && (
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
								handleCTAClick(formData);
							}}
						/>
						<Button variant="contained" component="span">
							<UploadIcon />
							Upload Image
						</Button>
					</label>
					<p>Min Dimensions: 500px X 500px</p>
					<p>Max Dimensions: 800px X 800px</p>
					<p>
						File Formats Supported: JPG, JPEG, PNG, BMP, GIF(with
						animations)
					</p>
				</Grid>
			)}

			<Grid container rowSpacing={1}>
				<Grid item xs={12} sm={12} md={12}>
					<div className="cta-input">
						<label>CTA Link URL</label>
						<div className="color-input">
							<input
								style={{ padding: "0.5vw" }}
								value={form.link}
								onChange={(event) => {
									dispatch(
										changeCTAInput(
											"link",
											event.target.value
										)
									);
								}}
								placeholder="https://www.example.com/"
							/>
						</div>
					</div>
				</Grid>
				{form.imageView && (
					<Grid item xs={12} sm={12} md={12}>
						<div className="cta-input">
							<label>Image Alt Text</label>
							<div className="color-input">
								<input
									style={{ padding: "0.5vw" }}
									value={form.altText}
									onChange={(event) => {
										dispatch(
											changeCTAInput(
												"altText",
												event.target.value
											)
										);
									}}
								/>
							</div>
						</div>
					</Grid>
				)}

				{!form.imageView && (
					<Grid container rowSpacing={1}>
						<Grid item xs={12} sm={12} md={12}>
							<div className="cta-input">
								<label>CTA Text</label>
								<div className="color-input">
									<input
										style={{ padding: "0.5vw" }}
										value={form.text}
										onChange={(event) => {
											dispatch(
												changeCTAInput(
													"text",
													event.target.value
												)
											);
										}}
									/>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<div className="cta-input">
								<label>CTA Text Color</label>
								<div className="color-input">
									<input
										style={{
											flex: "0.9",
											padding: "0.5vw",
										}}
										value={form.textColor}
										onChange={(event) => {
											dispatch(
												changeCTAInput(
													"textColor",
													event.target.value
												)
											);
										}}
									/>
									<input
										style={{ flex: "0.1", height: "auto" }}
										type="color"
										value={form.textColor}
										onChange={(event) => {
											dispatch(
												changeCTAInput(
													"textColor",
													event.target.value
												)
											);
										}}
									/>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<div className="cta-input">
								<label>Background Color</label>
								<div className="color-input">
									<input
										style={{
											flex: "0.9",
											padding: "0.5vw",
										}}
										value={form.backgroundColor}
										onChange={(event) => {
											dispatch(
												changeCTAInput(
													"backgroundColor",
													event.target.value
												)
											);
										}}
									/>
									<input
										style={{ flex: "0.1", height: "auto" }}
										type="color"
										value={form.backgroundColor}
										onChange={(event) => {
											dispatch(
												changeCTAInput(
													"backgroundColor",
													event.target.value
												)
											);
										}}
									/>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<div className="cta-input">
								<label>CTA Text Size</label>
								<select
									className="select-input"
									value={form.textSize}
									style={{ fontFamily: "Poppins" }}
									onChange={(event) => {
										dispatch(
											changeCTAInput(
												"textSize",
												event.target.value
											)
										);
									}}
								>
									<option
										style={{ fontFamily: "Poppins" }}
										value={12}
									>
										Small
									</option>
									<option
										style={{ fontFamily: "Poppins" }}
										value={14}
									>
										Medium
									</option>
									<option
										style={{ fontFamily: "Poppins" }}
										value={16}
									>
										Large
									</option>
								</select>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<div className="cta-input">
								<label>CTA Text Style</label>
								<select
									style={{ fontFamily: form.textStyle }}
									className="select-input"
									value={form.textStyle}
									onChange={(event) => {
										dispatch(
											changeCTAInput(
												"textStyle",
												event.target.value
											)
										);
									}}
								>
									<option value="Normal">Normal</option>
									<option
										value="bold"
										style={{ fontStyle: "bold" }}
									>
										Bold
									</option>
									<option
										value="italic"
										style={{ fontStyle: "italic" }}
									>
										Italic
									</option>
									<option
										value="bold italic"
										style={{ fontStyle: "bold italic" }}
									>
										Bold and Italic
									</option>
								</select>
							</div>
						</Grid>
					</Grid>
				)}
			</Grid>
		</div>
	);
}

export default Cta;
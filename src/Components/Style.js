import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { changeStyleInput } from "../redux/actions/styleActions";
import Slider from "@mui/material/Slider";

function Style() {
	const form = useSelector((state) => state.style.form);
	const main = useSelector((state) => state.main.form);
	const cta = useSelector((state) => state.cta.form);
	const dispatch = useDispatch();

	return (
		<div className="style">
			<Grid container rowSpacing={1}>
				<Grid item xs={12} sm={12} md={12}>
					<div className="style-input">
						<label>Text Color</label>
						<div className="color-input">
							<input
								style={{ flex: "0.9", padding: "0.5em" }}
								value={form.textColor}
								onChange={(event) => {
									dispatch(
										changeStyleInput(
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
										changeStyleInput(
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
					<div className="style-input">
						<label>Feature Color</label>
						<div className="color-input">
							<input
								style={{ flex: "0.9", padding: "0.5em" }}
								value={form.featureColor}
								onChange={(event) => {
									dispatch(
										changeStyleInput(
											"featureColor",
											event.target.value
										)
									);
								}}
							/>
							<input
								style={{ flex: "0.1", height: "auto" }}
								type="color"
								value={form.featureColor}
								onChange={(event) => {
									dispatch(
										changeStyleInput(
											"featureColor",
											event.target.value
										)
									);
								}}
							/>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<div className="style-input">
						<label>Link Color</label>
						<div className="color-input">
							<input
								style={{ flex: "0.9", padding: "0.5em" }}
								value={form.linkColor}
								onChange={(event) => {
									dispatch(
										changeStyleInput(
											"linkColor",
											event.target.value
										)
									);
								}}
							/>
							<input
								style={{ flex: "0.1", height: "auto" }}
								type="color"
								value={form.linkColor}
								onChange={(event) => {
									dispatch(
										changeStyleInput(
											"linkColor",
											event.target.value
										)
									);
								}}
							/>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="style-input">
						<label>Font Size</label>
						<select
							style={{ fontFamily: "Poppins" }}
							className="select-input"
							value={form.fontSize}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"fontSize",
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
					<div className="style-input">
						<label>Font Style</label>
						<select
							style={{ fontFamily: form.fontStyle }}
							className="select-input"
							value={form.fontStyle}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"fontStyle",
										event.target.value
									)
								);
							}}
						>
							<option
								value="Arial"
								style={{ fontFamily: "Arial" }}
							>
								Arial
							</option>
							<option
								value="Comic Sans MS"
								style={{ fontFamily: "Comic Sans MS" }}
							>
								Comic Sans MS
							</option>
							<option
								value="Lucida Sans Unicode"
								style={{ fontFamily: "Lucida Sans Unicode" }}
							>
								Lucida Sans Unicode
							</option>
							<option
								value="Tahoma"
								style={{ fontFamily: "Tahoma" }}
							>
								Tahoma
							</option>
							<option
								value="Trebuchet MS"
								style={{ fontFamily: "Trebuchet MS" }}
							>
								Trebuchet MS
							</option>
							<option
								value="Verdana"
								style={{ fontFamily: "Verdana" }}
							>
								Verdana
							</option>
							<option
								value="Courier New"
								style={{ fontFamily: "Courier New" }}
							>
								Courier New
							</option>
							<option
								value="Lucida Console"
								style={{ fontFamily: "Lucida Console" }}
							>
								Lucida Console
							</option>
							<option
								value="Palatino Linotype"
								style={{ fontFamily: "Palatino Linotype" }}
							>
								Palatino Linotype
							</option>
							<option
								value="Times New Roman"
								style={{ fontFamily: "Times New Roman" }}
							>
								Times New Roman
							</option>
							<option
								value="Georgia"
								style={{ fontFamily: "Georgia" }}
							>
								Georgia
							</option>
							{/* <option value="Monospace" style={{fontFamily: "Monospace"}}>Monospace</option> */}
						</select>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="style-input">
						<label>Avatar Size</label>
						<Slider
							disabled={main.image === null}
							value={form.avatarSize}
							min={50}
							max={180}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"avatarSize",
										parseInt(event.target.value)
									)
								);
							}}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="style-input">
						<label>Avatar Radius</label>
						<select
							style={{ fontFamily: "Poppins" }}
							className="select-input"
							disabled={main.image === null}
							value={form.avatarRadius}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"avatarRadius",
										event.target.value
									)
								);
							}}
						>
							<option
								style={{ fontFamily: "Poppins" }}
								value="0%"
							>
								Square
							</option>
							<option
								style={{ fontFamily: "Poppins" }}
								value="10%"
							>
								Rounded Corners
							</option>
							<option
								style={{ fontFamily: "Poppins" }}
								value="50%"
							>
								Circle
							</option>
						</select>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="style-input">
						<label style={{ fontFamily: "Poppins" }}>
							CTA Image Size
						</label>
						<Slider
							style={{ fontFamily: "Poppins" }}
							value={form.ctaImageSize}
							min={50}
							max={180}
							disabled={cta.image === null}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"ctaImageSize",
										parseInt(event.target.value)
									)
								);
							}}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="style-input">
						<label>CTA Image Radius</label>
						<select
							style={{ fontFamily: "Poppins" }}
							className="select-input"
							disabled={cta.image === null}
							value={form.ctaImageRadius}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"ctaImageRadius",
										event.target.value
									)
								);
							}}
						>
							<option
								style={{ fontFamily: "Poppins" }}
								value="0%"
							>
								Square
							</option>
							<option
								style={{ fontFamily: "Poppins" }}
								value="10%"
							>
								Rounded Corners
							</option>
							<option
								style={{ fontFamily: "Poppins" }}
								value="50%"
							>
								Circle
							</option>
						</select>
					</div>
				</Grid>
				{/* Social Icons */}
				<Grid item xs={12} sm={12} md={24}>
					<span style={{ color: "red", fontWeight: "bold" }}>
						Upload CTA image in CTA tab to enable this property
					</span>
					<hr style={{ border: "0.1 solid black" }} />
					<h3 style={{ display: "block", margin: 0, padding: 0 }}>
						Social Icons
					</h3>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="style-input">
						<label>Icon Size</label>
						<Slider
							value={form.iconSize}
							min={20}
							max={40}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"iconSize",
										parseInt(event.target.value)
									)
								);
							}}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</div>
				</Grid>

				<Grid item xs={12} sm={12} md={6}>
					<div className="style-input">
						<label>Icon Shape</label>
						<Slider
							value={form.iconShape}
							min={1}
							max={3}
							onChange={(event) => {
								dispatch(
									changeStyleInput(
										"iconShape",
										parseInt(event.target.value)
									)
								);
							}}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Style;

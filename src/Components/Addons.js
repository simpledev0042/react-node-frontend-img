import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./addons.css";
import { useSelector, useDispatch } from "react-redux";
import { changeADDONSInput } from "../redux/actions/addonsAction";
import { Checkbox, Slider } from "@mui/material";

function Addons() {
	const [autoWidth, setAutoWidth] = useState(false);
	const form = useSelector((state) => state.addons.form);
	//   console.log(form["data"][form.selected]["editable"])
	const dispatch = useDispatch();

	const toggleAutoWidth = () => {
		if (autoWidth) {
			dispatch(changeADDONSInput("width", 450));
		} else {
			dispatch(changeADDONSInput("width", "none"));
		}
		setAutoWidth(!autoWidth);
	};

	return (
		<div className="addons">
			<Accordion style={{ marginBottom: "0" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<span style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
						Download app badge
					</span>
				</AccordionSummary>
				<AccordionDetails>
					<div className="addons-row">
						<div className="app-badge">
							<img
								alt="apple"
								src="https://cuberootdigital.in/icons/appstore.png"
							></img>
							<input
								value={form.appleBadge}
								placeholder="https://www.apple.com/itunes/"
								onChange={(e) =>
									dispatch(
										changeADDONSInput(
											"appleBadge",
											e.target.value
										)
									)
								}
							/>
						</div>
					</div>
					<div className="addons-row">
						<div className="app-badge">
							<img
								alt="amazon"
								src="https://cuberootdigital.in/icons/amazon.png"
							></img>
							<input
								value={form.amazonBadge}
								placeholder={"https://www.amazon.com/"}
								onChange={(e) =>
									dispatch(
										changeADDONSInput(
											"amazonBadge",
											e.target.value
										)
									)
								}
							/>
						</div>
					</div>
					<div className="addons-row">
						<div className="app-badge">
							<img
								alt="google playstore"
								src="https://cuberootdigital.in/icons/google-play.png"
							></img>
							<input
								value={form.googlePlayBadge}
								placeholder="https://play.google.com/"
								onChange={(e) =>
									dispatch(
										changeADDONSInput(
											"googlePlayBadge",
											e.target.value
										)
									)
								}
							/>
						</div>
					</div>
					<div className="addons-row">
						<div className="app-badge">
							<img
								className="app-image"
								alt="google business"
								src="https://cuberootdigital.in/icons/google-maps.png"
							></img>
							<input
								value={form.googleBusinessBadge}
								placeholder="https://business.google.com"
								onChange={(e) =>
									dispatch(
										changeADDONSInput(
											"googleBusinessBadge",
											e.target.value
										)
									)
								}
							/>
						</div>
					</div>
					<div className="addons-row">
						<div className="app-badge">
							<img
								className="app-image"
								alt="ebay"
								src="https://cuberootdigital.in/icons/ebay.png"
							></img>
							<input
								value={form.ebayBadge}
								placeholder="https://ebay.com/"
								onChange={(e) =>
									dispatch(
										changeADDONSInput(
											"ebayBadge",
											e.target.value
										)
									)
								}
							/>
						</div>
					</div>
					<div className="addons-row">
						<label
							style={{
								width: "30%",
							}}
						>
							Shape
						</label>
						<Slider
							value={form.badgeShape}
							min={1}
							max={3}
							onChange={(event) => {
								dispatch(
									changeADDONSInput(
										"badgeShape",
										parseInt(event.target.value)
									)
								);
							}}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</div>
					<div className="addons-row">
						<label
							style={{
								width: "30%",
							}}
						>
							Badge Height
						</label>
						<Slider
							value={form.badgeHeight}
							min={40}
							max={65}
							onChange={(event) => {
								dispatch(
									changeADDONSInput(
										"badgeHeight",
										parseInt(event.target.value)
									)
								);
							}}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</div>
					<div className="addons-row">
						<label
							style={{
								width: "30%",
							}}
						>
							Badge Padding Top
						</label>
						<Slider
							value={form.badgePaddingTop}
							min={10}
							max={50}
							onChange={(event) => {
								dispatch(
									changeADDONSInput(
										"badgePaddingTop",
										parseInt(event.target.value)
									)
								);
							}}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</div>
					<div className="addons-row">
						<label>Color</label>
						<div
							className="color-checkbox"
							onClick={() =>
								dispatch(changeADDONSInput("badgeColor", 1))
							}
							style={{
								backgroundColor: "black",
								borderColor:
									form.badgeColor == 1 && "rgba(221,32,34,1)",
							}}
						></div>
						<div
							className="color-checkbox"
							onClick={() =>
								dispatch(changeADDONSInput("badgeColor", 2))
							}
							style={{
								backgroundColor: "white",
								borderColor:
									form.badgeColor == 2 && "rgba(221,32,34,1)",
							}}
						></div>
						<div
							onClick={() =>
								dispatch(changeADDONSInput("badgeColor", 3))
							}
							className="color-checkbox"
							style={{
								backgroundColor: "grey",
								borderColor:
									form.badgeColor == 3 && "rgba(221,32,34,1)",
							}}
						></div>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ marginTop: "1px" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<span style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
						Disclaimer
					</span>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<div className="addons-row">
							<label>Type</label>
							<select
								style={{ fontFamily: "Poppins" }}
								className="select-input"
								value={form.selected}
								onChange={(event) => {
									dispatch(
										changeADDONSInput(
											"selected",
											event.target.value
										)
									);
								}}
							>
								<option
									style={{ fontFamily: "Poppins" }}
									value="confidentiality"
								>
									Confidentiality
								</option>
								<option
									style={{ fontFamily: "Poppins" }}
									value="environmental"
								>
									Environmental
								</option>
								<option
									style={{ fontFamily: "Poppins" }}
									value="custom"
								>
									Custom Disclaimer
								</option>
							</select>
						</div>

						<div className="addons-row">
							<textarea
								style={{ fontFamily: "Poppins" }}
								disabled={
									!form["data"][form.selected]["editable"]
								}
								onChange={(event) =>
									dispatch(
										changeADDONSInput(
											"custom",
											event.target.value
										)
									)
								}
								value={form["data"][form.selected]["content"]}
							></textarea>
						</div>

						<div className="addons-row">
							<label>Font Size</label>
							<select
								style={{ fontFamily: "Poppins" }}
								className="select-input"
								value={form.fontSize}
								onChange={(event) => {
									dispatch(
										changeADDONSInput(
											"fontSize",
											event.target.value
										)
									);
								}}
							>
								<option
									style={{ fontFamily: "Poppins" }}
									value={10}
								>
									Extra Small
								</option>
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
							</select>
						</div>
						<div className="addons-row">
							<label>Auto Width</label>
							<Checkbox
								onClick={toggleAutoWidth}
								style={{ margin: "auto" }}
							></Checkbox>
						</div>
						<div className="addons-row">
							<label style={{ width: "30%" }}>Width</label>
							<Slider
								disabled={autoWidth}
								value={form.width}
								min={200}
								max={675}
								onChange={(event) => {
									dispatch(
										changeADDONSInput(
											"width",
											parseInt(event.target.value)
										)
									);
								}}
								aria-label="Default"
								valueLabelDisplay="auto"
								disable="true"
							/>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default Addons;
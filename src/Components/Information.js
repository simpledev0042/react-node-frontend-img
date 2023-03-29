import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { changeMainInput } from "../redux/actions/mainActions";
import { changeCTAInput } from "../redux/actions/ctaActions";
import { changeStyleInput } from "../redux/actions/styleActions";
import { changeADDONSInput } from "../redux/actions/addonsAction";
import { removeSocial } from "../redux/actions/socialActions";
import "./information.css";
import Main from "./Main.js";
import Social from "./Social";
import Style from "./Style";
import Cta from "./Cta";
import Addons from "./Addons";

function Information() {
	const [section, setSection] = useState("main");
	const dispatch = useDispatch();
	return (
		<div className="information">
			<div className="info-title">
				<h2>Your Information</h2>
				<Button
					sx={{
						":hover": {
							bgcolor: "#0385DB", // theme.palette.primary.main
							color: "white",
						},
					}}
					style={{
						marginRight: "10px",
						border: "2px solid #0385DB",
						fontFamily: "Poppins",
						fontWeight: "bold",
					}}
					className="reset-form"
					onClick={() => {
						dispatch(changeMainInput("reset"));
						dispatch(changeCTAInput("reset"));
						dispatch(changeStyleInput("reset"));
						dispatch(changeADDONSInput("reset"));
						dispatch(removeSocial(null, null));
					}}
				>
					RESET FORM
				</Button>
			</div>
			<div className="section-header">
				<ButtonGroup
					variant="contained"
					aria-label="outlined primary button group"
					size="small"
				>
					<Button
						className={section === "main" && "selected"}
						onClick={() => setSection("main")}
					>
						<span style={{ fontFamily: "Poppins" }}>MAIN</span>
					</Button>
					<Button
						className={section === "social" && "selected"}
						onClick={() => setSection("social")}
					>
						<span style={{ fontFamily: "Poppins" }}>SOCIAL</span>
					</Button>
					<Button
						className={section === "style" && "selected"}
						onClick={() => setSection("style")}
					>
						<span style={{ fontFamily: "Poppins" }}>STYLE</span>
					</Button>
					<Button
						className={section === "cta" && "selected"}
						onClick={() => setSection("cta")}
					>
						<span style={{ fontFamily: "Poppins" }}>CTA</span>
					</Button>
					<Button
						className={section === "addons" && "selected"}
						onClick={() => setSection("addons")}
					>
						<span style={{ fontFamily: "Poppins" }}>ADDON</span>
					</Button>
				</ButtonGroup>
			</div>
			{section === "main" && <Main />}
			{section === "social" && <Social />}
			{section === "style" && <Style />}
			{section === "cta" && <Cta />}
			{section === "addons" && <Addons />}
		</div>
	);
}

export default Information;

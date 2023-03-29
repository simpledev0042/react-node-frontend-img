import { Button, buttonUnstyledClasses } from "@mui/material";
import React, { useRef, useState } from "react";
import "./preview.css";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import Template4 from "./Template4";
import Template5 from "./Template5";
import Template6 from "./Template6";
import Template7 from "./Template7";
import Template8 from "./Template8";
import Template9 from "./Template9";
import Template10 from "./Template10";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
// import Carousel from "react-multi-carousel";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import t1img from "../assets/template1.jpg";
import t2img from "../assets/template2.jpg";
import t3img from "../assets/template3.jpg";
import t4img from "../assets/template4.jpg";
import t5img from "../assets/template5.jpg";
import t6img from "../assets/template6.jpg";
import t7img from "../assets/template7.jpg";
import t8img from "../assets/template8.jpg";
import t9img from "../assets/template9.jpg";
import t10img from "../assets/template10.jpg";
import Item from "./Item";

function copyToClipboard(e, textAreaRef, setOpen) {
	// console.log(e.currentTarget.textContent)
	// console.log(textAreaRef.current.innerText)
	navigator.clipboard.writeText(textAreaRef.current.innerHTML);
	setOpen(true);
	setTimeout(function () {
		setOpen(false);
	}, 3000);
	document.execCommand("copy");
	e.target.focus();
}

function copyToClip(e, textAreaRef, setOpen) {
	function listener(e) {
		e.clipboardData.setData("text/html", textAreaRef.current.innerHTML);
		e.clipboardData.setData("text/plain", textAreaRef.current.innerHTML);
		setOpen(true);
		setTimeout(function () {
			setOpen(false);
		}, 3000);
		e.preventDefault();
	}

	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
}

const breakPoints = [
	{ width: 200, itemsToShow: 1 },
	{ width: 400, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 600, itemsToShow: 3 },
	{ width: 700, itemsToShow: 4 },
];

function Preview() {
	const [open, setOpen] = useState(false);
	const [alertContent, setAlertContent] = useState("");
	const [template, setTemplate] = useState(1);
	const textAreaRef = useRef(null);
	return (
		<div className="preview">
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
							{alertContent}
						</Alert>
					</Collapse>
				</Box>
			</div>
			<div className="preview-title">
				<h2>Email Signature Preview</h2>
				<div className="preview-title-child">
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
						onClick={(e) => {
							setAlertContent("Source Code Copied Succesfully!");
							copyToClipboard(e, textAreaRef, setOpen);
						}}
					>
						Source Code
					</Button>
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
						onClick={(e) => {
							setAlertContent("Preview Copied Succesfully!");
							copyToClip(e, textAreaRef, setOpen);
						}}
					>
						Copy Signature
					</Button>
				</div>
			</div>
			<div className="preview-container">
				<div
					style={{
						// width: "100%",
						padding: "0.8em",
						backgroundColor: "#B7B3B7",
						color: "white",
						borderRadius: "5px 5px 0px 0px",
					}}
				>
					New Email
				</div>
				<div
					style={{
						// width: "100%",
						padding: "0.8em",
						backgroundColor: "white",
						color: "#B7B3B7",
						borderRadius: "5px 5px 0px 0px",
					}}
				>
					To:
				</div>
				<div
					style={{
						// width: "100%",
						padding: "0.8em",
						backgroundColor: "white",
						color: "#B7B3B7",
						borderRadius: "5px 5px 0px 0px",
						borderBottom: "1px solid #B7B3B7",
						borderTop: "1px solid #B7B3B7",
					}}
				>
					Subject:
				</div>
				<div className="preview-box" ref={textAreaRef}>
					{template === 1 && <Template1 />}
					{template === 2 && <Template2 />}
					{template === 3 && <Template3 />}
					{template === 4 && <Template4 />}
					{template === 5 && <Template5 />}
					{template === 6 && <Template6 />}
					{template === 7 && <Template7 />}
					{template === 8 && <Template8 />}
					{template === 9 && <Template9 />}
					{template === 10 && <Template10 />}
				</div>
			</div>
			<div
				style={{
					marginTop: "1em",
					fontSize: "1.2em",
					fontWeight: "bold",
				}}
			>
				<label>Choose a theme for your signature: </label>
			</div>

			<div>
				<div className="dropdown">
					<label>Template</label>
					<select
						style={{ fontFamily: "Poppins" }}
						className="dropdown-input"
						value={template}
						onChange={(event) => {
							setTemplate(parseInt(event.target.value));
						}}
					>
						<option style={{ fontFamily: "Poppins" }} value="1">
							Classic - Image Bottom
						</option>
						<option style={{ fontFamily: "Poppins" }} value="2">
							Classic - Image Top
						</option>
						<option style={{ fontFamily: "Poppins" }} value="3">
							Classic - Image Below Name
						</option>
						<option style={{ fontFamily: "Poppins" }} value="4">
							Compact - Image Bottom
						</option>
						<option style={{ fontFamily: "Poppins" }} value="5">
							Compact - Image Top
						</option>
						<option style={{ fontFamily: "Poppins" }} value="6">
							Compact - Image Below Name
						</option>
						<option style={{ fontFamily: "Poppins" }} value="7">
							Image Left - 2 Column
						</option>
						<option style={{ fontFamily: "Poppins" }} value="8">
							Image Left - Compact
						</option>
						<option style={{ fontFamily: "Poppins" }} value="9">
							Image Name Left - Compact
						</option>
						<option style={{ fontFamily: "Poppins" }} value="10">
							Image Name Left - Classic
						</option>
					</select>
				</div>
			</div>

			{/* {window.screen.width > 1240 && ( */}
			<div className="carousel-parent">
				{/* <Carousel
						// className="carousel"
						swipeable={false}
						draggable={false}
						showDots={true}
						responsive={responsive}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						// autoPlay={this.props.deviceType !== "mobile" ? true : false}
						autoPlaySpeed={1000}
						keyBoardControl={true}
						customTransition="all .5"
						transitionDuration={500}
						containerClass="carousel-container"
						removeArrowOnDeviceType={["tablet", "mobile"]}
						// deviceType={this.props.deviceType}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					> */}
				<Carousel
					disableArrowsOnEnd={false}
					breakPoints={breakPoints}
					preventDefaultTouchmoveEvent={false}
				>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t1img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 1
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(1)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t2img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 2
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(2)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t3img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 3
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(3)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t4img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 4
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(4)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t5img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 5
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(5)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t6img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 6
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(6)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t7img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 7
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(7)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t8img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 8
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(8)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t9img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 9
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(9)}
							></img>
						</div>
					</Item>
					<Item>
						<div className="img-carousel">
							<img
								alt="template"
								src={t10img}
								style={{
									height: "150px",
									width: "170px",
									border:
										template === 10
											? "2px solid #0385DB"
											: "1px solid #DDDDDD",
								}}
								onClick={() => setTemplate(10)}
							></img>
						</div>
					</Item>
				</Carousel>
			</div>
			{/* )} */}
		</div>
	);
}

export default Preview;

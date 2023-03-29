import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import dummy from "../assets/dummy_avatar.png";

function Template3() {
	const form = useSelector((state) => state.main.form);
	const styling = useSelector((state) => state.style.form);
	const socials = useSelector((state) => state.social);
	const cta = useSelector((state) => state.cta.form);
	const addons = useSelector((state) => state.addons.form);

	const amazonLinks = [
		[
			"https://cuberootdigital.in/icons/amazon.png",
			"https://cuberootdigital.in/icons/amazon.png",
			"https://cuberootdigital.in/icons/amazon.png",
		],
		[
			"https://cuberootdigital.in/icons/amazon.png",
			"https://cuberootdigital.in/icons/amazon.png",
			"https://cuberootdigital.in/icons/amazon.png",
		],
		[
			"https://cuberootdigital.in/icons/amazon.png",
			"https://cuberootdigital.in/icons/amazon.png",
			"https://cuberootdigital.in/icons/amazon.png",
		],
	];

	const appleLinks = [
		[
			"https://cuberootdigital.in/icons/appstore.png",
			"https://cuberootdigital.in/icons/appstore.png",
			"https://cuberootdigital.in/icons/appstore.png",
		],
		[
			"https://cuberootdigital.in/icons/appstore.png",
			"https://cuberootdigital.in/icons/appstore.png",
			"https://cuberootdigital.in/icons/appstore.png",
		],
		[
			"https://cuberootdigital.in/icons/appstore.png",
			"https://cuberootdigital.in/icons/appstore.png",
			"https://cuberootdigital.in/icons/appstore.png",
		],
	];

	const googlePlayLinks = [
		[
			"https://cuberootdigital.in/icons/google-play.png",
			"https://cuberootdigital.in/icons/google-play.png",
			"https://cuberootdigital.in/icons/google-play.png",
		],
		[
			"https://cuberootdigital.in/icons/google-play.png",
			"https://cuberootdigital.in/icons/google-play.png",
			"https://cuberootdigital.in/icons/google-play.png",
		],
		[
			"https://cuberootdigital.in/icons/google-play.png",
			"https://cuberootdigital.in/icons/google-play.png",
			"https://cuberootdigital.in/icons/google-play.png",
		],
	];

	const ebayLinks = [
		[
			"https://cuberootdigital.in/icons/ebay.png",
			"https://cuberootdigital.in/icons/ebay.png",
			"https://cuberootdigital.in/icons/ebay.png",
		],
		[
			"https://cuberootdigital.in/icons/ebay.png",
			"https://cuberootdigital.in/icons/ebay.png",
			"https://cuberootdigital.in/icons/ebay.png",
		],
		[
			"https://cuberootdigital.in/icons/ebay.png",
			"https://cuberootdigital.in/icons/ebay.png",
			"https://cuberootdigital.in/icons/ebay.png",
		],
	];

	const googleBusinessLinks = [
		[
			"https://cuberootdigital.in/icons/google-maps.png",
			"https://cuberootdigital.in/icons/google-maps.png",
			"https://cuberootdigital.in/icons/google-maps.png",
		],
		[
			"https://cuberootdigital.in/icons/google-maps.png",
			"https://cuberootdigital.in/icons/google-maps.png",
			"https://cuberootdigital.in/icons/google-maps.png",
		],
		[
			"https://cuberootdigital.in/icons/google-maps.png",
			"https://cuberootdigital.in/icons/google-maps.png",
			"https://cuberootdigital.in/icons/google-maps.png",
		],
	];

	let isEmpty = true;
	let dummySocials = [];
	isEmpty = Object.values(form).every((x) => x === null || x.length === 0);
	if (isEmpty) {
		dummySocials = [
			{
				socialID: "Facebook",
				website: "https://www.facebook.com",
				source: "https://cuberootdigital.in/icons/facebook.png",
				value: "https://www.facebook.com",
			},
			{
				socialID: "Twitter",
				website: "https://www.twitter.com",
				source: "https://cuberootdigital.in/icons/twitter.png",
				value: "https://www.twitter.com",
			},
			{
				socialID: "LinkedIn",
				website: "https://www.linkedin.com",
				source: "https://cuberootdigital.in/icons/linkedin.png",
				value: "https://www.linkedin.com",
			},
		];
	}

	return (
		<div
			className="template"
			style={{ paddingTop: "2em", lineHeight: "1.6" }}
		>
			{/* First and Last Name */}
			<div
				style={{
					color: styling.featureColor,
					fontFamily: styling.fontStyle,
					fontSize:
						(parseInt(styling.fontSize) + parseInt(2)).toString() +
						"px",
				}}
			>
				{!isEmpty && form.firstName + " " + form.lastName}
				{isEmpty && "John Doe"}
			</div>

			{/* Image */}

			<div>
				{form.image && (
					<img
						alt="avatar"
						src={form.image}
						height={styling.avatarSize.toString() + "px"}
						style={{
							borderRadius: styling.avatarRadius,
							paddingTop: "0.3em",
						}}
					/>
				)}
				{isEmpty && (
					<img
						alt="avatar"
						src={dummy}
						height={styling.avatarSize.toString() + "px"}
						style={{
							borderRadius: styling.avatarRadius,
							paddingTop: "0.3em",
						}}
					/>
				)}
			</div>

			{/* Job Title */}
			<div
				style={{
					color: styling.textColor,
					fontFamily: styling.fontStyle,
					fontSize: parseInt(styling.fontSize).toString() + "px",
				}}
			>
				{!isEmpty && form.jobTitle}
				{isEmpty && "Buisnessman"}
			</div>

			{/* Job Department */}
			<div
				style={{
					color: styling.textColor,
					fontFamily: styling.fontStyle,
					fontSize: parseInt(styling.fontSize).toString() + "px",
				}}
			>
				{!isEmpty && form.department}
				{isEmpty && "Buisness dept"}
			</div>

			{/* Company Name */}
			<div
				style={{
					color: styling.textColor,
					fontFamily: styling.fontStyle,
					fontSize: parseInt(styling.fontSize).toString() + "px",
				}}
			>
				<strong>
					{!isEmpty && form.companyName}
					{isEmpty && "John Does Ltd"}
				</strong>
			</div>

			{/* Mobile and office phone */}
			<div>
				<span
					style={{
						color: styling.featureColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
						display:
							parseInt(form.officePhone.length) === 0 &&
							!isEmpty &&
							"none",
					}}
				>
					P:{" "}
				</span>
				<span
					style={{
						color: styling.textColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
					}}
				>
					{!isEmpty && form.officePhone}
					{isEmpty && "41 123 245"}
				</span>
				<span
					style={{
						color: styling.featureColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
						display:
							parseInt(form.mobileNumber.length) === 0 &&
							!isEmpty &&
							"none",
					}}
				>
					{" "}
					M:{" "}
				</span>
				<span
					style={{
						color: styling.textColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
					}}
				>
					{!isEmpty && form.mobileNumber}
					{isEmpty && "91 4123 9876"}
				</span>
			</div>

			{/* Fax  */}
			<div>
				<span
					style={{
						color: styling.featureColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
						display:
							parseInt(form.officeFax.length) === 0 &&
							!isEmpty &&
							"none",
					}}
				>
					F:{" "}
				</span>
				<span
					style={{
						color: styling.textColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
					}}
				>
					{!isEmpty && form.officeFax}
					{isEmpty && "41 123 567"}
				</span>
			</div>

			{/* Address Line 1 */}
			<div>
				<span
					style={{
						color: styling.featureColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
						display:
							parseInt(form.address.length) === 0 &&
							!isEmpty &&
							"none",
					}}
				>
					A:{" "}
				</span>
				<span
					style={{
						color: styling.textColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
					}}
				>
					{!isEmpty && form.address}
					{isEmpty && "5 Something St"}
				</span>
			</div>

			{/* Address Line 2 */}
			<div>
				<span
					style={{
						color: "white",
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
						display:
							parseInt(form.addressLine2.length) === 0 &&
							!isEmpty &&
							"none",
					}}
				>
					A:{" "}
				</span>
				<span
					style={{
						color: styling.textColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
					}}
				>
					{!isEmpty && form.addressLine2}
					{isEmpty && "Somewhere NSW 2000"}
				</span>
			</div>

			{/* Website */}
			<div>
				<span
					style={{
						color: styling.featureColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
						display:
							parseInt(form.website.length) === 0 &&
							!isEmpty &&
							"none",
					}}
				>
					W:{" "}
				</span>
				<span
					style={{
						color: styling.linkColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
					}}
				>
					<a href={form.website} style={{ textDecoration: "none" }}>
						{!isEmpty && form.website}
						{isEmpty && "www.john-does.com"}
					</a>
				</span>
			</div>

			{/* Email */}
			<div>
				<span
					style={{
						color: styling.featureColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
						display:
							parseInt(form.email.length) === 0 &&
							!isEmpty &&
							"none",
					}}
				>
					E:{" "}
				</span>
				<span
					style={{
						color: styling.linkColor,
						fontFamily: styling.fontStyle,
						fontSize: parseInt(styling.fontSize).toString() + "px",
					}}
				>
					{!isEmpty && form.email}
					{isEmpty && "johndoe@example.com"}
				</span>
			</div>

			{/* Additional Fields */}

			{form.additionalField.map((eachField) => (
				<div>
					{(eachField.fieldType === "Text" ||
						eachField.fieldType === "Phone") && (
						<div>
							<span
								style={{
									color: styling.featureColor,
									fontFamily: styling.fontStyle,
									fontSize:
										parseInt(styling.fontSize).toString() +
										"px",
								}}
							>
								{eachField.fieldName + ": "}
							</span>
							<span
								style={{
									color: styling.textColor,
									fontFamily: styling.fontStyle,
									fontSize:
										parseInt(styling.fontSize).toString() +
										"px",
								}}
							>
								{eachField.fieldValue}
							</span>
						</div>
					)}
					{eachField.fieldType === "Link" && (
						<div>
							<span
								style={{
									color: styling.featureColor,
									fontFamily: styling.fontStyle,
									fontSize:
										parseInt(styling.fontSize).toString() +
										"px",
								}}
							>
								{eachField.fieldName + ": "}
							</span>

							<span
								style={{
									color: styling.textColor,
									fontFamily: styling.fontStyle,
									fontSize:
										parseInt(styling.fontSize).toString() +
										"px",
								}}
							>
								<a
									style={{
										color: styling.linkColor,
										textDecoration: "none",
									}}
									href={eachField.fieldValue}
								>
									{eachField.fieldValue}
								</a>
							</span>
						</div>
					)}
				</div>
			))}

			{/* Socials  */}
			<div
				className="icons"
				style={{ display: "flex", flexDirection: "row" }}
			>
				{isEmpty &&
					dummySocials.map((social) => (
						<a href={social.value}>
							<img
								alt="social"
								src={social.source}
								key={social.socialID}
								style={{
									height: styling.iconSize,
									width: styling.iconSize,
									margin: "2px",
									borderRadius:
										(styling.iconShape == 2 && "15%") ||
										(styling.iconShape == 3 && "50%"),
								}}
							></img>
						</a>
					))}
				{!isEmpty &&
					socials.selected.map((social) => (
						<a
							href={social.value}
							style={{
								display:
									parseInt(social.value.length) === 0 &&
									"none",
							}}
						>
							<img
								alt="social"
								src={social.source}
								key={social.socialID}
								style={{
									height: styling.iconSize,
									width: styling.iconSize,
									margin: "2px",
									borderRadius:
										(styling.iconShape == 2 && "15%") ||
										(styling.iconShape == 3 && "50%"),
								}}
							></img>
						</a>
					))}
			</div>

			{/* CTA */}

			<div>
				{cta.image && cta.imageView && (
					<a
						href={cta.link.length === 0 ? "#" : cta.link}
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							alt={cta.altText}
							src={cta.image}
							height={styling.ctaImageSize}
							style={{
								borderRadius: styling.ctaImageRadius,
								paddingTop: "0.3em",
							}}
						/>
					</a>
				)}

				{!cta.imageView && cta.text.length > 0 && (
					<Button
						style={{
							backgroundColor: cta.backgroundColor,
							color: cta.textColor,
							borderRadius: "25px",
							fontSize:
								parseInt(cta.textSize - 2).toString() + "px",
							fontFamily: styling.fontStyle,
							fontStyle: cta.textStyle,
							fontWeight: cta.textStyle,
							padding: "0.6em",
						}}
					>
						{cta.text}
					</Button>
				)}
			</div>

			{/* Badges */}

			<div>
				{addons.amazonBadge.length > 0 && (
					<a
						href={addons.amazonBadge}
						rel="noopener noreferrer"
						target="_blank"
						style={{
							paddingTop: addons.badgePaddingTop,
							paddingLeft: "0.5em",
						}}
					>
						<img
							alt="badgeImage"
							src={
								amazonLinks[addons.badgeShape - 1][
									addons.badgeColor - 1
								]
							}
							height={addons.badgeHeight}
						/>
					</a>
				)}
				{addons.appleBadge.length > 0 && (
					<a
						href={addons.appleBadge}
						rel="noopener noreferrer"
						target="_blank"
						style={{
							paddingTop: addons.badgePaddingTop,
							paddingLeft: "0.5em",
						}}
					>
						<img
							alt="badgeImage"
							src={
								appleLinks[addons.badgeShape - 1][
									addons.badgeColor - 1
								]
							}
							height={addons.badgeHeight}
						/>
					</a>
				)}
				{addons.ebayBadge.length > 0 && (
					<a
						href={addons.ebayBadge}
						rel="noopener noreferrer"
						target="_blank"
						style={{
							paddingTop: addons.badgePaddingTop,
							paddingLeft: "0.5em",
						}}
					>
						<img
							alt="badgeImage"
							src={
								ebayLinks[addons.badgeShape - 1][
									addons.badgeColor - 1
								]
							}
							height={addons.badgeHeight}
						/>
					</a>
				)}
				{addons.googlePlayBadge.length > 0 && (
					<a
						href={addons.googlePlayBadge}
						rel="noopener noreferrer"
						target="_blank"
						style={{
							paddingTop: addons.badgePaddingTop,
							paddingLeft: "0.5em",
						}}
					>
						<img
							alt="badgeImage"
							src={
								googlePlayLinks[addons.badgeShape - 1][
									addons.badgeColor - 1
								]
							}
							height={addons.badgeHeight}
						/>
					</a>
				)}
				{addons.googleBusinessBadge.length > 0 && (
					<a
						href={addons.googleBusinessBadge}
						rel="noopener noreferrer"
						target="_blank"
						style={{
							paddingTop: addons.badgePaddingTop,
							paddingLeft: "0.5em",
						}}
					>
						<img
							alt="badgeImage"
							src={
								googleBusinessLinks[addons.badgeShape - 1][
									addons.badgeColor - 1
								]
							}
							height={addons.badgeHeight}
						/>
					</a>
				)}
			</div>

			{/* Addons */}
			<div>
				<span
					style={{
						color: "grey",
						fontFamily: styling.fontStyle,
						fontSize: parseInt(addons.fontSize).toString() + "px",
					}}
				>
					<p
						style={{
							whiteSpace: "break-spaces",
							width:
								addons.width == "none"
									? "auto"
									: parseInt(addons.width).toString() + "px",
							textOverflow: "ellipsis",
							overflow: "hidden",
							lineHeight: "100%",
						}}
					>
						{addons["data"][addons.selected]["content"]}
					</p>
				</span>
			</div>
			<div
				style={{
					borderTop: "1px solid #CCCCCC",
					width: "35%",
					fontSize: "8px",
					fontWeight: "600",
					padding: "4px",
				}}
			>
				Create your own{" "}
				<a href="#" style={{ color: "#0385DB" }}>
					email signature
				</a>
			</div>
		</div>
	);
}

export default Template3;

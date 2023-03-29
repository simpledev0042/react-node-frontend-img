import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./social.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {
	updateSocial,
	removeSocial,
	addSocial,
} from "../redux/actions/socialActions";

function Social() {
	const socials = useSelector((state) => state.social);
	const dispatch = useDispatch();
	const [searchedSocials, setSearchedSocials] = useState(
		socials.otherSocials
	);

	const searchTextChangeHandler = (e) => {
		const pattern = e.target.value.toLowerCase();
		let results = socials.otherSocials;
		if (pattern.length !== 0) {
			results = socials.otherSocials.filter((i) => {
				if (i.socialID.toLowerCase().includes(pattern)) {
					return {
						socialID: i.socialID,
						website: i.website,
						source: i.source,
					};
				}
			});
		}
		setSearchedSocials(results);
	};

	return (
		<div className="social">
			{socials.selected.map((social) => (
				<div className="social-input">
					<img
						alt="social"
						src={social.source}
						style={{ borderRadius: "15%" }}
					></img>
					<input
						style={{ flex: "1" }}
						key={social.socialID}
						value={social.value}
						placeholder={social.website + "/profile"}
						onChange={(e) =>
							dispatch(
								updateSocial(social.socialID, e.target.value)
							)
						}
					/>
					<Button
						onClick={() => {
							dispatch(removeSocial(social.socialID));
						}}
					>
						<CloseIcon style={{ color: "#DDDDDD" }} />
					</Button>
				</div>
			))}

			<div className="social-icons">
				<span>Select Social Handles to Add</span>
				<input
					onChange={searchTextChangeHandler}
					style={{
						padding: "0.5rem",
						outline: "none",
						margin: "0.5rem",
					}}
					placeholder="Search"
				/>
				<div className="icon-list">
					{searchedSocials.map((social) => (
						<img
							alt="social"
							src={social.source}
							style={{
								height: "2.5em",
								width: "2.5em",
								margin: "3px",
								borderRadius: "15%",
								cursor: "pointer",
							}}
							onClick={(event) =>
								dispatch(addSocial(social.socialID))
							}
						></img>
					))}
				</div>
			</div>
		</div>
	);
}

export default Social;

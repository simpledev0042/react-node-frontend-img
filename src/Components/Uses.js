import FirstImage from "../assets/1.svg";
import SecondImage from "../assets/2.svg";
import ThirdImage from "../assets/3.svg";
import FourthImage from "../assets/4.svg";
import FifthImage from "../assets/5.svg";
import SixthImage from "../assets/6.svg";
import SeventhImage from "../assets/7.svg";
import EighthImage from "../assets/8.svg";

import "./Uses.css";
import React from "react";

const Uses = () => {
	return (
		<div>
			<section className="totally-free">
				<div className="container">
					<div className="left-content">
						<h2>Lorem ipsum dolor sit amet,</h2>{" "}
						<p style={{ fontWeight: "bold" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</p>{" "}
					</div>
					<div className="right-content">
						<button
							className="button"
							onClick={() =>
								window.scrollTo({
									top: 200,
									behavior: "smooth",
								})
							}
						>
							BUTTON TEXT
						</button>{" "}
					</div>{" "}
				</div>
			</section>
			<React.Fragment>
				<div
					style={{
						textAlign: "center",
						backgroundColor: "#FFFFFF",
						paddingTop: "2rem",
					}}
				>
					<h2>
						WHAT DO YOU GET WITH OUR FREE EMAIL SIGNATURE GENERATOR?
					</h2>
					<br />
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</span>
				</div>

				<div className="uses-container">
					<div className="useCard">
						<div className="useCard--image">
							<img
								src={FirstImage}
								alt="Professional and polite"
							/>
						</div>

						<div>
							<h3>Be professional and polite</h3>
						</div>
						<div className="useCard--content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="useCard">
						<div className="useCard--image">
							<img src={SecondImage} alt="Cart" />
						</div>

						<div>
							<h3>More email replies</h3>
						</div>
						<div className="useCard--content">
							<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="useCard">
						<div className="useCard--image">
							<img src={ThirdImage} alt="Logistics" />
						</div>

						<div>
							<h3>Increase in leads</h3>
						</div>
						<div className="useCard--content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="useCard">
						<div className="useCard--image">
							<img src={FourthImage} alt="Healthcare" />
						</div>

						<div>
							<h3>Works with Gmail, Outlook, Apple Mail & more</h3>
						</div>
						<div className="useCard--content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="useCard">
						<div className="useCard--image">
							<img src={FifthImage} alt="Travel" />
						</div>

						<div>
							<h3>Create email signature in 1 min</h3>
						</div>
						<div className="useCard--content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="useCard">
						<div className="useCard--image">
							<img src={SixthImage} alt="Real Estate" />
						</div>

						<div>
							<h3>Add social media links</h3>
						</div>
						<div className="useCard--content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="useCard">
						<div className="useCard--image">
							<img src={SeventhImage} alt="Real Estate" />
						</div>

						<div>
							<h3>Multiple design templates</h3>
						</div>
						<div className="useCard--content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="useCard">
						<div className="useCard--image">
							<img src={EighthImage} alt="Real Estate" />
						</div>

						<div>
							<h3>
								An improved customer experience
							</h3>
						</div>
						<div className="useCard--content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		</div>
	);
};

export default Uses;
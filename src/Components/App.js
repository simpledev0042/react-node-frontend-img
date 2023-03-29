import Form from "./Form";
import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Footer from "./Footer";
import Header from "./Header";
import FAQ from "./Faq";
import Share from "./Share";
import Uses from "./Uses";
import Content from "./Content";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="breadcrumb-main">
				<Breadcrumbs
					style={{ fontFamily: "Poppins" }}
					aria-label="breadcrumb"
				>
					<Link underline="hover" color="inherit" href="/">
						<span className="breadcrumb-link">Home</span>
					</Link>
					<Typography
						style={{ fontFamily: "Poppins" }}
						color="text.primary"
					>
						<span className="breadcrumb-link">
							<b>Email Signature Generator</b>
						</span>
					</Typography>
				</Breadcrumbs>
			</div>
        <Form />
        <FAQ />
		
		</div>
        <Content />
		
		<Uses />
        <Share />
		<div style = {{
			background: "#313131",
			border: "5px solid #313131"
		}}>
        <Footer />
		</div>
      
    </Provider>
  );
}

export default App;

import React from "react";
import Fab from "@mui/material/Fab";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  zIndex: 10
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const FAQ = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        sx={fabStyle}
        aria-label={"FAQs"}
        color={"primary"}
      >
        <h3>FAQs</h3>
      </Fab>
      <Dialog
        fullScreen
        style={{
          margin: "4vh 4vw",
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, textAlign:"center", fontFamily:"Recursive" }} variant="h6" component="div">
              Frequently Asked Questions
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ margin: "2rem" }}>
          <h4 style={{ color: "black" }}>
            Q1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </span>

          <h4 style={{ color: "black" }}>
            Q2. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <ul>
							<li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Go to settings > General
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Scroll down
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Do you see the Signature editor?
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Remove the existing signature first
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Paste the new signature in the editing box
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Click on ‘Save’ at the bottom of the page.
							</li>
						</ul>
            Your new signature will start showing in your mails.
          </span>
          

          <h4 style={{ color: "black" }}>
            Q3.  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h4>
          <span>
            Just follow the steps given below:
            <ul>
							<li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Login to your Outlook Account
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Do you see ‘File’ in the top-left corner? Click on it and then select ‘Options’.
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Go to ‘Mail’ from the ‘Options’ menu
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Go to ‘Signatures’
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Edit the existing one and paste the new signature
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Save all changes
							</li>
						</ul>
            Your new signature will start showing in your mails.
          </span>

          <h4 style={{ color: "black" }}>
            Q4. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h4>
          <span>
            Kindly follow the given steps:
            <ul>
							<li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Login to your Apple Mail
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Do you see the ‘Mail’ option in the top-left corner?
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Click on it and then select ‘Preferences’
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                You will get a pop-up; select the ‘Signature’ tab from it
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Do you see the ‘+’ at the bottom of the middle column?
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                In the right-hand column, paste the new signature 
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Close the pop-up to save the changes 
							</li>
              
						</ul>
            Your new signature will start appearing in the emails you send hereafter.
          </span>

          <h4 style={{ color: "black" }}>
            Q5. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h4>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Follow these steps:
            <ul>
							<li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Manually copy the entire signature including the lines above and below it
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Paste the entire thing in your email’s signature editor
							</li>
              
						</ul>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>

          <h4 style={{ color: "black" }}>
          Q6. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. There is no need to panic. You can try the following options:
            <ul>
							<li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                Some browsers do not allow pasting formatted content into the signature box. You can try from a new browser to make the signature appear exactly as it should. 
							</li>
              <li style={{display:"list-item",listStyleType:"disc", marginLeft: "1.3em"}}>
                You can copy the source code and paste it into your email’s signature editor to keep all formatting as it is. 
							</li>              
						</ul>
          </span>

        </div>
      </Dialog>
    </div>
  );
};

export default FAQ;

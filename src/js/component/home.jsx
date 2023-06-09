import React from "react";

import Navbar from "./navbar.jsx";

import Jumbotron from "./jumbotron.jsx";

import Form from "./form.jsx";

import Footer from "./footer.jsx";

import Carousel from "./carousel.jsx";

import Topcard from "./topcard.jsx";

import Modal from "./modal.jsx";

import Info from "./info.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			 <Navbar title="Landing page by R.A">
				<Modal /> {/* Include the Modal component as a child */}
			</Navbar>
			<div className="container-fluid">
				<Topcard/>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center">
					<Carousel />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center">
					<Info/>
					</div>
				</div>
				<Jumbotron
				button="Take a look" 
				description="Here is lying a search on Google about these images"
				title1="Astronaut images"
				title2="Aircraft images"
				title3="Airplane images"
				title4="Space images"/>
				<Form/>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;

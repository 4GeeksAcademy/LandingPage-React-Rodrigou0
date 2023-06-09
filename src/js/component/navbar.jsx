import React from "react";

const Navbar =({ title, children })=>{
    const socialMediaUrls = {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
        linkedin: "https://www.linkedin.com"
      };
      const handleButtonClick = (platform) => {
        window.open(socialMediaUrls[platform], "_blank");
      };
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                   {title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <button id="btn1" className="me-2"onClick={() => handleButtonClick("facebook")}>
                    <i className="fab fa-facebook" />
                </button>
                <button id="btn1"className="me-2" onClick={() => handleButtonClick("instagram")}>
                    <i class="fab fa-instagram"></i>
                </button>
                <button id="btn1"className="me-2" onClick={() => handleButtonClick("twitter")}>
                    <i class="fab fa-twitter"></i>
                </button>
                <button id="btn1"className="me-1" onClick={() => handleButtonClick("linkedin")}>
                <i class="fab fa-linkedin"></i>
                </button>
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                        <a className="nav-link" href="#">
                            Abount
                        </a>
                        <a className="nav-link" href="#">
                            Services
                        </a>
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {children} {/* Render children components */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </nav>
    );
};
export default Navbar
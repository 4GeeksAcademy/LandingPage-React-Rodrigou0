import React from "react";

const Carousel =()=>{
    return(
        <div id="carouselExampleIndicators" className="carousel slide d-block w-75 mt-5"
             data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 img-fluid" alt="..."/>
                    <div className="carousel-caption">
                        <h3>First nice image</h3>
                        <p>This is one nice image</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/4870972/pexels-photo-4870972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 img-fluid" alt="..."/>
                    <div className="carousel-caption">
                        <h3>Second nice image</h3>
                        <p>This is another nice image</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/1605148/pexels-photo-1605148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 img-fluid" alt="..."/>
                    <div className="carousel-caption">
                        <h3>Third nice image</h3>
                        <p>This is one more nice image</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel
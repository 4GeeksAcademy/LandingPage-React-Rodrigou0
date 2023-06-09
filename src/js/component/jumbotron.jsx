import React from "react";

const Jumbotron =(props)=>{
    return(
        <div class="row ms-4 me-1" id="jumbo">
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div className="card h-100" style={{width: '18rem'}}>
                    <img src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title1}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="https://www.google.com/search?q=astronaut&tbm=isch&ved=2ahUKEwiyo4DhhaP_AhU3kScCHSMVAO4Q2-cCegQIABAA&oq=Astron&gs_lcp=CgNpbWcQARgBMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMgUIABCABDIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIFCAAQgAQyBwgAEIoFEEM6BAgjECc6BwgjEOoCECdQgwtYwiBgsS1oAXAAeACAAYQBiAHFBZIBAzQuM5gBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=jhF5ZLKkDLeinsEPo6qA8A4&bih=625&biw=1366"
                           target="_blank" className="btn btn-dark">{props.button}</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 mt-3 col-md-6 col-lg-3 col-xl-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://images.pexels.com/photos/256379/pexels-photo-256379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title2}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="https://www.google.com/search?q=space+aircraft&hl=en&sxsrf=APwXEde6ptZ0zHTNNx226tYiJbI_G3HqHw:1685658047655&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiwsZLJjaP_AhWtVKQEHVboA-EQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1"
                         target="_blank"className="btn btn-dark">{props.button}</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 mt-3 col-md-6 col-lg-3 col-xl-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://images.pexels.com/photos/1678617/pexels-photo-1678617.jpeg?auto=compress&cs=tinysrgb&w=300"
                     className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title3}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="https://www.google.com/search?q=airplane&tbm=isch&ved=2ahUKEwjl6rXKjaP_AhWysCcCHbmCAcoQ2-cCegQIABAA&oq=airplane&gs_lcp=CgNpbWcQAzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIFCAAQgAQyBQgAEIAEMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDOgQIIxAnOgYIABAHEB5Q-wtY6Bdg8x5oAHAAeACAAXGIAckGkgEDNy4ymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=whl5ZOWBFLLhnsEPuYWG0Aw&bih=625&biw=1366&hl=en"
                         target="_blank"className="btn btn-dark">{props.button}</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 mt-3 col-md-6 col-lg-3 col-xl-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://images.pexels.com/photos/821644/pexels-photo-821644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title4}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="https://www.google.com/search?q=space+images&sxsrf=APwXEdfa5sFWSI-rx6n_y8UFYlo4cFYu2A:1685655948380&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjL6JDghaP_AhXfSaQEHXuHABkQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1"
                            target="_blank"className="btn btn-dark">{props.button}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Jumbotron
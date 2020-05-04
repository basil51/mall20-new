import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mbd';

class Page1 extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="m-4">
                    <div className="row mt-2 justify-content-center">
                        <div className="col">
                            <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                                <MDBCarouselInner>
                                    <MDBCarouselItem itemId="1">
                                        <MDBView><img className="d-block w-100" src="ann/i1.jpg" alt="First slide" /></MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                        <MDBView><img className="d-block w-100" src="ann/i2.jpg" alt="Second slide" /></MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="3">
                                        <MDBView><img className="d-block w-100" src="ann/i3.png" alt="Second slide" /></MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="4">
                                        <MDBView><img className="d-block w-100" src="ann/i4.png" alt="Second slide" /></MDBView>
                                    </MDBCarouselItem>
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col"> <img className="img-fluid" src="images/product_1.png" /></div>
                        <div className="col"> <img className="img-fluid" src="images/product_2.png" /></div>
                        <div className="col"> <img className="img-fluid" src="images/product_3.png" /></div>
                    </div>
                    <div className="row mt-2 justify-content-center">
                        <div className="col"> <img className="img-fluid" src="images/product_4.png" /></div>
                        <div className="col"> <img className="img-fluid" src="images/product_5.png" /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;

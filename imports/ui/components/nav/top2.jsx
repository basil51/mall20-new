import React from 'react';

class Top2 extends React.Component {
    render() {
        return (
            <div className="bg-darkCyan z-1 ">
                <div id="top" className="d-flex flex-justify-end flex-align-center mr-20">
                    <a href="#" className="app-bar-item fg-white">
                        <span className="mif-envelop mif-sm"></span>
                        <span className="badge bg-orange fg-white">10</span>
                    </a>
                    <a href="#" className="app-bar-item mx-15 fg-white">
                        <span className="mif-cart mif-sm"></span>
                        <span className="badge bg-green fg-white">4</span>
                    </a>
                    <a href="#" className="app-bar-item fg-white">
                        <span className="mif-heart mif-sm"></span>
                        <span className="badge bg-orange fg-white">10</span>
                    </a>
                </div>
            </div>

        );
    }
}

export default Top2;

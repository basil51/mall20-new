import React from 'react';

class Side2 extends React.Component {
    render() {
        return (

            <div data-role="appbar" className="pos-absolute bg-darkCyan fg-white">

            <a href="#" className="app-bar-item d-block d-none-lg" id="paneToggle"><span className="mif-menu"></span></a>

            <div className="app-bar-container ml-auto">
                <a href="#" className="app-bar-item">
                    <span className="mif-envelop"></span>
                    <span className="badge bg-green fg-white mt-2 mr-1">4</span>
                </a>
                <a href="#" className="app-bar-item">
                    <span className="mif-bell"></span>
                    <span className="badge bg-orange fg-white mt-2 mr-1">10</span>
                </a>
                <a href="#" className="app-bar-item">
                    <span className="mif-flag"></span>
                    <span className="badge bg-red fg-white mt-2 mr-1">9</span>
                </a>
                <div className="app-bar-container">
                    <a href="#" className="app-bar-item">
                        <img src="images/jek_vorobey.jpg" className="avatar" />
                        <span className="ml-2 app-bar-name">Jack Sparrow</span>
                    </a>
                    <div className="user-block shadow-1" data-role="collapse" data-collapsed="true">
                        <div className="bg-darkCyan fg-white p-2 text-center">
                            <img src="images/jek_vorobey.jpg" className="avatar" />
                            <div className="h4 mb-0">Jack Sparrow</div>
                            <div>Pirate captain</div>
                        </div>
                        <div className="bg-white d-flex flex-justify-between flex-equal-items p-2">
                            <button className="button flat-button">Followers</button>
                            <button className="button flat-button">Sales</button>
                            <button className="button flat-button">Friends</button>
                        </div>
                        <div className="bg-white d-flex flex-justify-between flex-equal-items p-2 bg-light">
                            <button className="button mr-1">Profile</button>
                            <button className="button ml-1">Sign out</button>
                        </div>
                    </div>
                </div>
                <a href="#" className="app-bar-item">
                    <span className="mif-cogs"></span>
                </a>
            </div>
        </div>


        );
    }
}

export default Side2;
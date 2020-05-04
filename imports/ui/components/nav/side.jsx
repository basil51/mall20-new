import React from 'react';

class Side extends React.Component {
    render() {
        return (
            <div className="navview-pane">
                <div id="navh2" className="bg-cyan d-flex flex-align-center">
                    <button className="pull-button m-0 bg-darkCyan-hover">
                        <span className="mif-menu fg-white"></span>
                    </button>
                    <h2 className="text-light m-0 fg-white pl-7">Mall-20</h2>
                </div>

                <div className="suggest-box">
                    <div className="data-box">
                        <img src="images/jek_vorobey.jpg" className="avatar" />
                        <div className="ml-4 avatar-title flex-column">
                            <a href="#" className="d-block fg-white text-medium no-decor"><span className="reduce-1">Jack Sparrow</span></a>
                            <p className="m-0"><span className="fg-green mr-2">&#x25cf;</span><span className="text-small">online</span></p>
                        </div>
                    </div>
                    <img src="images/jek_vorobey.jpg" className="avatar holder ml-2" />
                </div>

                <div className="suggest-box">
                    <input type="text" data-role="input" data-clear-button="false" data-search-button="true" />
                    <button className="holder">
                        <span className="mif-search fg-white"></span>
                    </button>
                </div>

                <ul className="navview-menu mt-4" id="side-menu">
                    <li className="item-header">MAIN NAVIGATION</li>
                    <li>
                        <a href="#dashboard">
                            <span className="icon"><span className="mif-meter"></span></span>
                            <span className="caption">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#widgets">
                            <span className="icon"><span className="mif-widgets"></span></span>
                            <span className="caption">Widgets</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-versions"></span></span>
                            <span className="caption">Sample Pages</span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown">
                            <li className="item-header">Pages</li>
                            <li><a href="login.html">
                                <span className="icon"><span className="mif-lock"></span></span>
                                <span className="caption">Login</span>
                            </a></li>
                            <li><a href="register.html">
                                <span className="icon"><span className="mif-user-plus"></span></span>
                                <span className="caption">Register</span>
                            </a></li>
                            <li><a href="lockscreen.html">
                                <span className="icon"><span className="mif-key"></span></span>
                                <span className="caption">Lock screen</span>
                            </a></li>
                            <li><a href="#profile">
                                <span className="icon"><span className="mif-profile"></span></span>
                                <span className="caption">Profile</span>
                            </a></li>
                            <li><a href="preloader.html">
                                <span className="icon"><span className="mif-spinner"></span></span>
                                <span className="caption">Preloader</span>
                            </a></li>
                            <li><a href="404.html">
                                <span className="icon"><span className="mif-cancel"></span></span>
                                <span className="caption">404 Page</span>
                            </a></li>
                            <li><a href="500.html">
                                <span className="icon"><span className="mif-warning"></span></span>
                                <span className="caption">500 Page</span>
                            </a></li>
                            <li><a href="#product-list">
                                <span className="icon"><span className="mif-featured-play-list"></span></span>
                                <span className="caption">Product list</span>
                            </a></li>
                            <li><a href="#product">
                                <span className="icon"><span className="mif-rocket"></span></span>
                                <span className="caption">Product page</span>
                            </a></li>
                            <li><a href="#invoice">
                                <span className="icon"><span className="mif-open-book"></span></span>
                                <span className="caption">Invoice</span>
                            </a></li>
                            <li><a href="#orders">
                                <span className="icon"><span className="mif-table"></span></span>
                                <span className="caption">Orders</span>
                            </a></li>
                            <li><a href="#order-details">
                                <span className="icon"><span className="mif-library"></span></span>
                                <span className="caption">Order details</span>
                            </a></li>
                            <li><a href="#price-table">
                                <span className="icon"><span className="mif-table"></span></span>
                                <span className="caption">Price table</span>
                            </a></li>
                            <li><a href="maintenance.html">
                                <span className="icon"><span className="mif-cogs"></span></span>
                                <span className="caption">Maintenance</span>
                            </a></li>
                            <li><a href="coming-soon.html">
                                <span className="icon"><span className="mif-watch"></span></span>
                                <span className="caption">Coming soon</span>
                            </a></li>
                            <li><a href="help-center.html">
                                    <span className="icon"><span className="mif-help"></span></span>
                                    <span className="caption">Help center</span>
                            </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-devices"></span></span>
                            <span className="caption">Forms</span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown">
                            <li className="item-header">Forms</li>
                            <li><a href="#forms-basic">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Basic elements</span>
                            </a></li>
                            <li><a href="#forms-extended">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Extended elements</span>
                            </a></li>
                            <li><a href="#forms-layouts">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Layouts</span>
                            </a></li>
                            <li><a href="#forms-validating">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Validating</span>
                            </a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-table"></span></span>
                            <span className="caption">Tables</span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown" >
                            <li className="item-header">Tables</li>
                            <li><a href="#table-classNamees">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Table classNamees</span>
                            </a></li>
                            <li><a href="#table-component">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Table component</span>
                            </a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-air"></span></span>
                            <span className="caption">UI Elements</span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown">
                            <li className="item-header">UI Elements</li>
                            <li>
                                <a href="#colors">
                                    <span className="icon"><span className="mif-paint"></span></span>
                                    <span className="caption">Colors</span>
                                </a>
                            </li>
                            <li><a href="#typography">
                                <span className="icon"><span className="mif-bold"></span></span>
                                <span className="caption">Typography</span>
                            </a></li>
                            <li><a href="#buttons">
                                <span className="icon"><span className="mif-apps"></span></span>
                                <span className="caption">Buttons</span>
                            </a></li>
                            <li><a href="#tabs">
                                <span className="icon"><span className="mif-open-book"></span></span>
                                <span className="caption">Accordion &amp; Tabs</span>
                            </a></li>
                            <li><a href="#tiles">
                                <span className="icon"><span className="mif-dashboard"></span></span>
                                <span className="caption">Tiles</span>
                            </a></li>
                            <li><a href="#treeview">
                                <span className="icon"><span className="mif-tree"></span></span>
                                <span className="caption">TreeView</span>
                            </a></li>
                            <li><a href="#listview">
                                <span className="icon"><span className="mif-list"></span></span>
                                <span className="caption">ListView</span>
                            </a></li>
                            <li><a href="#progress">
                                <span className="icon"><span className="mif-spinner5"></span></span>
                                <span className="caption">Progress & activities</span>
                            </a></li>
                            <li><a href="#list">
                                <span className="icon"><span className="mif-list2"></span></span>
                                <span className="caption">List component</span>
                            </a></li>
                            <li><a href="#splitter">
                                <span className="icon"><span className="mif-table"></span></span>
                                <span className="caption">Splitter</span>
                            </a></li>
                            <li><a href="#calendar">
                                <span className="icon"><span className="mif-calendar"></span></span>
                                <span className="caption">Calendar</span>
                            </a></li>
                            <li><a href="#countdown">
                                <span className="icon"><span className="mif-watch"></span></span>
                                <span className="caption">Countdown</span>
                            </a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-play"></span></span>
                            <span className="caption">Media</span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown" >
                            <li className="item-header">Media</li>
                            <li><a href="#video">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Video player</span>
                            </a></li>
                            <li><a href="#audio">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Audio</span>
                            </a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-comment"></span></span>
                            <span className="caption">Information</span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown" >
                            <li className="item-header">Information</li>
                            <li><a href="#windows">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Windows</span>
                            </a></li>
                            <li><a href="#dialogs">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Dialogs</span>
                            </a></li>
                            <li><a href="#info-boxes">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">InfoBox</span>
                            </a></li>
                            <li><a href="#hints">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Hints</span>
                            </a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-envelop"></span></span>
                            <span className="caption">Mailbox</span>
                            <span className="badges ml-auto mr-3">
                                <span className="badge inline bg-cyan fg-white">17</span>
                                <span className="badge inline bg-red fg-white">7</span>
                                <span className="badge inline bg-green fg-white">4</span>
                                <span className="badge inline bg-orange fg-white">3</span>
                            </span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown" >
                            <li className="item-header">Mailbox</li>
                            <li>
                                <a href="#inbox">
                                    <span className="icon"><span className="mif-mail"></span></span>
                                    <span className="caption">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a href="#inbox2">
                                    <span className="icon"><span className="mif-mail"></span></span>
                                    <span className="caption">Inbox2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#compose">
                                    <span className="icon"><span className="mif-mail-read"></span></span>
                                    <span className="caption">Compose</span>
                                </a>
                            </li>
                            <li>
                                <a href="#read-email">
                                    <span className="icon"><span className="mif-mail-read"></span></span>
                                    <span className="caption">Read email</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#chat">
                            <span className="icon"><span className="mif-bubbles"></span></span>
                            <span className="caption">Chat</span>
                            <span className="badges ml-auto mr-3">
                                <span className="badge inline bg-red fg-white">7</span>
                                <span className="badge inline bg-green fg-white">4</span>
                                <span className="badge inline bg-orange fg-white">3</span>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="dropdown-toggle">
                            <span className="icon"><span className="mif-magic-wand"></span></span>
                            <span className="caption">Wizards</span>
                        </a>
                        <ul className="navview-menu stay-open" data-role="dropdown" >
                            <li className="item-header">Wizards</li>
                            <li><a href="#master">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Master</span>
                            </a></li>
                            <li><a href="#wizard">
                                <span className="icon"><span className="mif-spinner2"></span></span>
                                <span className="caption">Wizard</span>
                            </a></li>
                        </ul>
                    </li>

                    <li className="item-header">Documentation</li>
                    <li>
                        <a href="https://metroui.org.ua/intro.html">
                            <span className="icon"><span className="mif-brightness-auto fg-red"></span></span>
                            <span className="caption">Metro 4</span>
                        </a>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Side;

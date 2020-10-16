import React from 'react'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>
                            Contact Us
                        </h4>
                        <ul className="list-unstyled">
                            <li>Fcebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>LinkdIn</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>
                            Lorem ipsum
                        </h4>
                        <ul className="list-unstyled">
                            <li>Fcebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>LinkdIn</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>
                            Lorem ipsum
                        </h4>
                        <ul className="list-unstyled">
                            <li>Fcebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>LinkdIn</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>
                            Lorem ipsum
                        </h4>
                        <ul className="list-unstyled">
                            <li>Fcebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>LinkdIn</li>
                        </ul>
                    </div>


                </div>

                {/* Footer Buttom */}
                <div className="footer-bottom">
                    <p className="text-xl-center">
                        &copy;{new Date().getFullYear()} This web site - All Rights Reserved by Shaikat
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

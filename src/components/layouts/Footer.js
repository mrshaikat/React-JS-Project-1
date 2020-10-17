import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>
                                Contact Us
                        </h4>
                            <ul className="list-unstyled">
                                <li>Ashikujjaman Shaikat</li>
                                <li>Mobile: +8801919-430500</li>
                                <li>E-mail: mrshaikat0.cse@gmail.com</li>

                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>
                                Lorem ipsum
                        </h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Fcebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">LinkdIn</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>
                                Lorem ipsum
                        </h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Fcebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">LinkdIn</a></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>
                                Lorem ipsum
                        </h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Fcebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">LinkdIn</a></li>
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
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`

    .footer-middle{
        
        background: var(--mainDark);
        color: var(--mainWhite);
        padding-top: 3rem;

    }
    .footer-bottom{
        padding-top: 3rem;
        padding-bottom: 2rem;
        
    }
    ul li a{

        color: var(--mainLightGrey);

    }

    ul li a:hover{
        color: var(--mainGrey);
    }

`;

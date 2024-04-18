import React from "react"
import './Footer.css';
import Facebook from '../../../assets/FooterImages/facebook.png';
import Twiter from '../../../assets/FooterImages/twiter.png';
import Linkedin from '../../../assets/FooterImages/linkedin.png';
import Instagram from '../../../assets/FooterImages/instagram.png';
const FooterComponent = ()=>{
    return(
        <>
        <div className="footer">
            <div className="footer_section-padding">
                <div className="footer-links">
                    <div className="footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="footer-links_div ">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Pathers</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><img src={Facebook} alt="facebook" /></p>
                            <p><img src={Twiter} alt="twiter" /></p>
                            <p><img src={Linkedin} alt="linkedin" /></p>
                            <p><img src={Instagram} alt="instagram" /></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                             Todos los derechos reservados T-Ocean @{new Date().getFullYear()} 
                        </p>
                    </div>
                    <div className="footer-below-links">
                        <a href="/terms"><div><p>Term & Conditions </p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default FooterComponent
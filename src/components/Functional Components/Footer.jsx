import React from "react";
import logo from "../../assets/logo.png";

import "./Footer.css"

function Footer() {

    return (
        <div>
            <div className='footern pad-footer'>
                <div className='footer-grid'>
                    <div className="footer-img">
                    <img className='logo2' src={logo}></img>
                    </div>
                    <div className='footer1'>
                        <div className="pad-footer">
                            <p className='reachusoutat phonk'>Reach Us Out At</p>
                            <p className='satoshi footer-font-size'>synapse.thefest@gmail.com</p>
                            <p className='satoshi footer-font-size'>synapse@daiict.ac.in</p>
                            <p className='satoshi footer-font-size'>Raj Patel: +91 8128 909 789</p>
                            <p className='satoshi footer-font-size'>Manan Pareek: +91 6351 132 695</p>
                            <p className='satoshi footer-font-size'>Harshita Tripathi: +91 9974 760 487</p>
                        </div>
                    </div>
                    <div className='footer2'>
                        <div className="footer-past">
                            <p className='reachusoutat phonk'>Past Websites</p>
                            <p className='satoshi footer-font-size'>Synapse 2022</p>
                            <p className='satoshi footer-font-size'>Synapse 2021</p>
                            <p className='satoshi footer-font-size'>Synapse 2020</p>
                            <div class="social">
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-youtube"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='footer3 map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4935656514344!2d72.62812920033149!3d23.188676796749917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3cb451dadd%3A0x283fd1bc8351fbbc!2sDhirubhai%20Ambani%20Institute%20Of%20Information%20And%20Communication%20Technology%20Canteen%2C%20DA%20IICT%20Rd%2C%20Gandhinagar%2C%20Gujarat%20382421!5e0!3m2!1sen!2sin!4v1705823415907!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="custom-box-shadow">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
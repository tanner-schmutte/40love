import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div id="logo-div">
                    <a
                        id="linkedinlogo"
                        href="https://www.linkedin.com/in/tannman/"
                        target="_blank"
                    >
                        <i class="fab fa-linkedin fa-3x"></i>
                    </a>
                    <a
                        id="githublogo"
                        href="https://github.com/tanner-schmutte/40Love"
                        target="_blank"
                    >
                        <i class="fab fa-github fa-3x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

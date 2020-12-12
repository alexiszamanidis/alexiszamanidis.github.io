import React from "react";

function Footer() {
    return (
        <div className="footer">
            <p>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a
                    rel="noopener noreferrer"
                    href="https://github.com/alexiszamanidis"
                    target="_blank"
                >
                    {" alexiszamanidis"}
                </a>
            </p>
        </div>
    );
}

export default Footer;

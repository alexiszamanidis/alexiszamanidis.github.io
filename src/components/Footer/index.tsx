import React, { FC } from "react";

const Footer: FC = () => {
    return (
        <div className="footer">
            <p>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a
                    rel="noopener noreferrer"
                    href="https://github.com/alexiszamanidis"
                    target="_blank"
                >
                    <b>{" alexiszamanidis"}</b>
                </a>
            </p>
        </div>
    );
};

export default Footer;

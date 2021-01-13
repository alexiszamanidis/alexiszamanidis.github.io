import ReactDOM from "react-dom";
import Footer from "./";

it("footer: Footer copyright", () => {
    const footer = document.createElement("div");
    ReactDOM.render(<Footer />, footer);
    const footerContent = footer.querySelector("h5")?.textContent;
    const toBe = "© " + new Date().getFullYear() + " Copyright: Alexis Zamanidis";
    expect(footerContent).toBe(toBe);
});

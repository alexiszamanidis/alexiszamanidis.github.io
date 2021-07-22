import "./index.css";
import App from "./pages";
import ReactDOM from "react-dom";
import Providers from "./providers";

ReactDOM.render(
    <Providers>
        <App />
    </Providers>,
    document.getElementById("root")
);

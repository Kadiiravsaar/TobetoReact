import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
// import { configureStore } from "./store/configureStore";
import store from "./reduxToolkit/store"
import { Provider } from "react-redux";

// const store = configureStore();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<Provider store={store}>
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</Provider>,
);

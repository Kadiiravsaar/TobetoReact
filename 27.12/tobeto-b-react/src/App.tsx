import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App(): ReactElement {
	return (
		<> 
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
			</Routes>
		</>
	);
}

export default App;
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Register from "./pages/registration-page/registration.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/register" component={Register} />
			</Switch>
		</div>
	);
}

export default App;

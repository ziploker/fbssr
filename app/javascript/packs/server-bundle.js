import ReactOnRails from "react-on-rails";

import HelloWorld from "../bundles/HelloWorld/components/HelloWorldServer";
import App from "./appServer";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
	HelloWorld,
	App,
});

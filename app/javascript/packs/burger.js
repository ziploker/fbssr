// Burger.js
import React from "react";

import myStyle from "./burger.module.scss";

const Burger = (props) => {
	return (
		<button
			openSideMenu={props.openSideMenu}
			onClick={() => {
				props.setOpenSideMenu(!props.openSideMenu);
			}}
		>
			<div />
			<div>MENU</div>
			<div />
		</button>
	);
};

export default Burger;

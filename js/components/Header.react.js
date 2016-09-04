import React from "react";
import Link from "react-router/lib/Link";

const Header = () => {
    return(
			<section className="header">
				<a href="https://twitter.com/mxstbr" className="header__logo" >
					&lt;mxstbr/&gt;
				</a>
				<a href="https://github.com/himynameisdave/postcss-plugins#submitting-a-new-plugin" className="header__add">Add a plugin</a>
				<h1 className="header__title">
					<Link to="/" className="header__link">PostCSS.parts</Link>
				</h1>
				<h2 className="header__subtitle">A searchable catalog of PostCSS plugins</h2>
			</section>
    );
}

export default Header;

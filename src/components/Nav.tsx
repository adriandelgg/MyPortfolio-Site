import React from 'react';

const Nav = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a className="nav-link" href="#skills">
							Skills
						</a>
					</li>
					<li>
						<a className="nav-link" href="#projects">
							Projects
						</a>
					</li>
					<li>
						<a className="nav-link" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;

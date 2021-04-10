import React from 'react';
import './about.css';

const AboutMe = () => {
	return (
		<section>
			<h3 className="section-heading">About Me</h3>
			<div className="about-me-section">
				<div>
					<p className="about-me">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Maxime, et minima eveniet laudantium doloribus voluptatem nemo
						voluptatum sed quidem eos? Suscipit, blanditiis odit veniam
						asperiores laborum repellendus consequuntur sint animi.
					</p>
					<p className="about-me">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Provident minus, distinctio dolorum sit alias voluptatibus
						perferendis. Quis, magni deleniti soluta natus totam
						voluptatem sit at, velit molestias minus aspernatur! Et.
					</p>
				</div>
				<div className="animate__animated animate__rotateInUpLeft myphoto"></div>
			</div>
		</section>
	);
};

export default AboutMe;

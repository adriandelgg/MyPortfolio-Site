import adrian from '../../img/adrian.png';

const AboutMe = () => {
	return (
		<section id="about-me">
			<h3 className="section-heading">About Me</h3>
			<div className="about-me-section">
				<div>
					<p className="about-me-text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, et
						minima eveniet laudantium doloribus voluptatem nemo voluptatum sed
						quidem eos? Suscipit, blanditiis odit veniam asperiores laborum
						repellendus consequuntur sint animi.
					</p>
					<p className="about-me-text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
						minus, distinctio dolorum sit alias voluptatibus perferendis. Quis,
						magni deleniti soluta natus totam voluptatem sit at, velit molestias
						minus aspernatur! Et.
					</p>
				</div>
				{/* <div className="myphoto"> */}
				<img src={adrian} alt="" />
				{/* </div> */}
			</div>
		</section>
	);
};

export default AboutMe;

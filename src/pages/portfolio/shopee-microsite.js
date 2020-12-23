import React from "react";

export const Content = () => (
	<article className="portfolio-page">
		<div className="hero" style={{ backgroundImage: "url('/images/portfolio/prescription-helper-cover.jpg')", }}>
		</div>
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h1>Microsite</h1>
						<p>Shopee</p>
					</div>
					<div className="col-md-7">
						<p>A tool helping people build, maintain and deploy E-commerce pages.</p>
						<p>My role: UI/UX Designer</p>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2>Situation</h2>
					</div>
					<div className="col-md-7">
						<p>To improve the overall E-commerce employee work efficiency, there are many people spend much time in creating new landing page, voucher activities and promotion by HTML/CSS code.</p>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2>Task</h2>
					</div>
					<div className="col-md-7">
						<p>Create many reusable, scalable modularize sections and components to help employee easy to build web page.</p>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2>Action</h2>
					</div>
					<div className="col-md-7">
						<h3>UX Research</h3>
						<p>We have do competitor research and statistic our data to identify high priority and frequency usage pages. And components should not only support mobile but also for desktop. To offer operations only need do once in Microsite.
						</p>
						<h4>Information Archtecture</h4>
						<img src="/images/portfolio/shopee-microsite-information-archtecture.png" className="img-fluid" alt="" />
						<h3>Build Components</h3>
						<p>After research, we define top 12 usage of components to modularize for landing page, such as carousel, banner, product cards, collections.  And also put some tips when creating page, like recommend SEO word, product description make the better search result for acquisition.</p>
						<img src="/images/portfolio/shopee-microsite-wireframe-components.png" className="img-fluid" alt="" />
						<h3>Scalable Content</h3>
						<p>The components also provide some customize like editable quantity, styles of products in a section.</p>
					</div>
				</div>
			</div>
		</section>
	</article >
);
import React from "react";

// https://medium.com/prototyping-practice/apple-tv-gestural-ui-redesign-4388b9d779b3

export const Content = () => (
	<article className="portfolio">
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-8 offset-md-2" style={{ textAlign: "center" }}>
						<img src="/static/images/portfolio/line-flash-sale-icon.png" alt="LINE Flash Sale icon" style={{ width: "140px" }} />
						<h1 style={{ fontSize: "2em", margin: "30px 0" }}>LINE - Flash Sale</h1>
						<p>LINE Flash Sale is the first E-commerce service of LINE in Taiwan. I was very excited to be a part of this team. It was my proud UX/UI project for LINE when I worked in Uitox. I delivered all of the product design features, including category experience, favorite brands, multiple item promotion and order status during the past three months. I was responsible for interaction design, planning, discussing with stakeholders, prototyping and ensuring iOS and Android platform experience is good enough. Here are some of the projects I’ve worked on so far:</p>
					</div>
				</div>
			</div>
		</section>
		<section style={{ background: "#00b84f", color: "white", textAlign: "center" }}>
			<div className="container" style={{ padding: "90px 0" }}>
				<h2 style={{ margin: "30px 0" }}>Design Process</h2>
				<div className="col-md-10 offset-md-1">
					{/* <div className="row" style={{ margin: "60px 0" }}>
						<div className="col-md-3">
							<p>1. Review and refine</p>
						</div>
						<div className="col-md-3">
							<p>2. Make a hypothesis and prototype</p>
						</div>
						<div className="col-md-3">
							<p>3. Revisit the products core value</p>
						</div>
						<div className="col-md-3">
							<p>4. Delivery and Verify</p>
						</div>
					</div> */}
					<p>In the beginning, we will have a kick-off meeting with business units (LINE HQ). After we understand their strategy and vision, we do not just start design and sketch, we want to learn from users and find out users pain point. we want to know why our user wants to shopping and their shopping behavior. So we start walking their daily lives, visit their favorite spots.</p>
					<p>After that, we might start to implement our features. But the most important things is to understand who we are designing for. What kind of problems are we trying to solve? The designer will be faced with tons of challenges. If usability test has a lot of good feedback and product managers want to increase the user’s retention rate, conversion rate, rating and daily active user, then the solution will probably want to add some key features to see if the business matrix goes well or not. And some of the features might provide better browsing experience such as better searching experience, category and filter feature. Therefore, we've selected some popular features or the most important feature from PC platform into app version.</p>
				</div>
			</div>
		</section>
		<section style={{ textAlign: "center" }}>
			<div className="container">
				<div className="col-md-10 offset-md-1">
					<h2 style={{ margin: "30px 0"}}>Iterations On Prototyping</h2>
					<p>I began to sketch as many different directions as I could, pick the best one solution and then test them out in a prototype. After getting to a good place with each iteration in Sketch, I would then turn to Front end library with product manager.</p>
					<img src="/static/images/portfolio/line-flash-sale-working.png" alt="LINE Flash Sale Wireframes" className="img-fluid" style={{ marginTop: "0" }} />
					<p></p>
				</div>
			</div>
		</section>
		<section style={{textAlign: "center", padding: "90px 0", background: "#F6F6F6"}}>
			<h2>Visual Design</h2>
			<img src="/static/images/portfolio/line-flash-sale-mockup-01.png" alt="LINE Flash Sale mockup" className="img-fluid" />
			<img src="/static/images/portfolio/line-flash-sale-mockup-02.png" alt="LINE Flash Sale mockup" className="img-fluid" />
		</section>
		<section style={{ textAlign: "center" }}>
			<div className="container" style={{ padding: "60px 0" }}>
				<h2 style={{margin: "30px 0", color: "#00b84f"}}>Highlights</h2>
				<p>In shopping team, I need to clearly deliver core value for new app features. Once the feature to be implemented is confirmed, I always comes out the UI mockup, animation and prototype by JavaScript and CSS very quickly, so that team members can discuss following details more easily. Flash Sale design and favorite brand list for instance, I made the prototype and animation with real front-end environment as starts, so that engineers can have more detail discussion by referring to these designs.</p>
			</div>
		</section>
	</article >
);
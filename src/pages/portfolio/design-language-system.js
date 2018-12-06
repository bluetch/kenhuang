import React from "react";

// Reference: https://airbnb.design/building-a-visual-language/
//            https://uxplanet.org/design-language-system-d438f4aa30e0

export const Content = () => (
  <article id="portfolio">
    <img src="../static/images/portfolio/design-language-system-cover.jpg" alt="design-language-system-cover" className="img-fluid" style={{width: "100%", height: "100%", margin: "0"}}/>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Design Language System</h1>
            <p>Shopee</p>
          </div>
          <div className="col-md-7">
            <p>When projects grow fast, the design resources were rudimentary, outdated and hard-to-find. We lacked a design language to maintain and updates such as logo guideline, brand images, and App guideline. When I just join here, it’s just going to start, then I hand over this project to be an owner.</p>
            <p>My Rule: Interaction Designer, Product manager</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Research</h2>
          </div>
          <div className="col-md-7">
            <h3>Why we need design systems</h3>
            <p>Shopee has experienced a lot of growth over the years. Currently, our design department consists of nearly a dozen functions and outcome teams. It became clear that we needed more systematic ways to guide and leverage our collective efforts. While we recognized these challenges within the company, I believe they are symptoms of larger software industry problems.</p>
            <h3>Problems</h3>
            <h4>Too few constraints</h4>
            <p>
            E-commerce design has few physical constraints compared to many other design disciplines. This allows for a variety of solutions to any given challenge but also opens it to disjointed user experiences. As product owners and designers, we have to create and follow our own constraints.
                </p>
            <h4>Multiple designers and stakeholders</h4>
            <p>Software is often built by teams– sometimes incredibly large teams– of people. The challenge to create coherent experiences multiplies exponentially as more people are added to the mix. Also over time, no matter how consistent or small a team is, different people will contribute new solutions and styles, causing experiences to diverge.
            </p>
            <h4>Multitude of platforms</h4>
            <p>We need to ship our product on a multitude of platforms and devices. Keeping features and designs synchronized takes significant effort, often requiring the same work to be repeated across all of these platforms.
            </p>
            <h4>E-commerce as a continuum</h4>
            <p>Another unique thing about E-commerce is that, while it can be considered a product, it doesn’t really wear out and get replaced like traditional consumer products. Code and designs created years ago still exist in many places, even after the landscape of a company and its product have shifted significantly. This requires constant maintenance and upgrading.
            </p>
            <p>We also reference other DLS what they did, why they need, and how to solve the problems.</p>
            <ul>
              <li><a href="https://polaris.shopify.com/" target="_blank" rel="noopener noreferrer" className="text-link">Polaris — Shopify’s Design System</a></li>
              <li><a href="https://airbnb.design/building-a-visual-language/" target="_blank" rel="noopener noreferrer" className="text-link">Airbnb’s Design Language System</a></li>
              <li><a href="https://ant.design/" target="_blank" rel="noopener noreferrer" className="text-link">Ant Design - Ant Financial's Design Language System</a></li>
              <li><a href="https://developer.apple.com/design/" target="_blank" rel="noopener noreferrer" className="text-link">Apple’s Design Language System</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Execution</h2>
          </div>
          <div className="col-md-7">
            <p>The goal we set for the DLS was to create a more beautiful and accessible design language. Our designs should be unified platforms that drive greater efficiency through well-defined and reusable components. In order to focus our efforts, we reduced the initial scope to creating the system first on components, design resource.</p>
            <p>We started by auditing and printing out many of our designs, both old and new. Laying the flows side by side on a board, we could see where and how the experiences were breaking and where we needed to start making changes. We figured that the best way to begin was by tackling issues head on.</p>
            <h4>Unified</h4>
            <p>Each piece is part of a greater whole and should contribute positively to the system at scale. There should be no isolated features or outliers.</p>
            <h4>Iconic</h4>
            <p>We’re focused when it comes to both design and functionality. Our work should speak boldly and clearly to this focus.</p>
            <img src="../static/images/portfolio/design-language-system-information-architecture.png" alt="design-language-system-information-architecture" className="img-fluid" />
            <h3>Tools</h3>
            <p>Standardize the tools different teams use in different phases of the project. Right from the discovery of the project through the design, development and validation phases. Make sure everyone is aware of the tools other teams use. Tools used for collaboration should be easily accessible and agreed upon by everyone in every team.</p>
            <img src="../static/images/portfolio/design-language-system-tools.png" alt="design-language-system-tool" className="img-fluid" />
            <h3>Folder System</h3>
            <p>Create a folder system to organize work. Standardize the naming convention. This will make it easier to find a particular file. Find a formula that works best for all the teams, perfect a naming convention and STICK TO IT.</p>
            <h3>Documentation</h3>
            <p>Document all these standardizations. Create a one stop shop for every information related to the system followed.</p>
            <img src="../static/images/portfolio/design-language-system-documents.png" alt="design-language-system-documents" className="img-fluid" />
            <h3>Style Guide</h3>
            <p>Conduct a UI Audit (If working on an already existing platform). This is essentially making an inventory of all the components that make up the digital product. All we have to do is take screenshots of all the elements and components that make up your product and categorize them. The components range from right, from the text to buttons and accordion to tabs.</p>
            <img src="../static/images/portfolio/design-language-system-style.png" alt="design-language-system-style" className="img-fluid" />
            <h3>Foundation</h3>
            <p>We had already created a basic style guide, that we called the foundation. This foundation loosely defined our typography, colors, icons, spacing and information architecture. The foundation proved essential for guiding our work in a unified direction while allowing room for us to individually explore creative design solutions. This way we felt that we were all working together, towards the same idea. Reviewing our collective work at the end of each new feature, we began to see patterns emerge. We course-corrected when necessary, and started defining our standardized components.</p>
            <img src="../static/images/portfolio/design-language-system-foundation.png" alt="design-language-system-foundation" className="img-fluid" />
            <h3>Brand</h3>
            <p>A DLS creates a personality for a digital product. A personality that has its own character and other quirks which gives it its own identity and allows it to be recognized in this over populated world of digital products.</p>
            <img src="../static/images/portfolio/design-language-system-logos.png" alt="design-language-system-logos" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Result</h2>
          </div>
          <div className="col-md-7">
            <p>Since the design language are often shared, we can now build and release features on all native platforms at roughly the same time. Development is generally faster, since product engineers can focus more on writing the feature logic rather than the view code. Additionally, engineers and designers now share a common language.</p>
            <h3>Lessons Learned</h3>
            <p>We knew that this was a challenging project. It meant re-designing and rebuilding the majority of the views in our app. We managed to make our goal of creating the system. As with any project, there are things we wish we would have done differently.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img src="../static/images/portfolio/design-language-system-overall.png" alt="design-language-system-overall" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 offset-5">
            <h4>Not all components are created equal.</h4>
            <p>In most apps there are a set of components that repeat often. For us, these components are still some little different hard to define. Looking back, I wish we had taken more time to think about the marketing purpose or business purpose and come up with a stronger set of patterns and components. In the end, we wound up with many different kinds with some inconsistencies.</p>
            <h4>Sketch</h4>
            <p>We initially tried to create these components as symbols in Sketch, which resulted in a mess. Even now, our Sketch files are sometimes challenging to maintain. Moving forward, we hope to find better ways of maintaining and creating new components.</p>
            <h4>Inspection</h4>
            <p>Due to there are too many guidelines, styles, and images, sometimes we are not sure current project belong to part of DLS, or special case. It make people confused and complex. We think there should have some tools to help check.</p>
            <h4>Work Efficiency</h4>
            <p>In the other hand, we realize some of the repeat works could solve by automation tool, like the banners of marketing daily work, designers usually have to resize lots of banners to upload many different advertisement platforms. We are building the auto-layout to help they work efficiency.</p>
            <iframe title="autolayout" width="560" height="315" src="https://www.youtube.com/embed/CwmaUkF94dc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>

  </article >
);
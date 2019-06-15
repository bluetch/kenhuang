import React from "react";

// Reference: https://airbnb.design/building-a-visual-language/
// https://uxplanet.org/design-language-system-d438f4aa30e0

export const Content = () => (
<article className="portfolio dls">
  <img src="../static/images/portfolio/design-language-system-cover.jpg" alt="design-language-system"
    className="img-fluid" style={{ margin: "0" }} />
  <section>
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
          <h1>Design Language System</h1>
          <p>Design language system is no longer a new conception in a mature company, it’s a complex system. With the
            trend of internet flourish in South East Asia, a better and consistent user experience becomes extremely
            important for both users can company.</p>
          <p style={{marginBottom: "60px"}}>My Rule: Interaction Designer, Product manager</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <svg viewBox="0 0 54 54" version="1.1">
            <g className="pathstroke" fill="none" stroke="#EE4D2D" strokeWidth="2" strokeLinejoin="round"
              strokeLinecap="round">
              <line strokeMiterlimit="10" x1="4.1" y1="10.5" x2="50" y2="10.5" />
              <rect strokeMiterlimit="10" x="1" y="9.4" width="2.4" height="2.4" />
              <rect strokeMiterlimit="10" x="50.3" y="9.4" width="2.4" height="2.4" />
              <path strokeLinecap="square" id="Stroke-6_2_" d="M15.9,32.8l-3.8,5.5c4.6,4.7,9.5,5.6,14.4,5.6c8.9,0,13.4-4.7,13.4-10.3
                c0-8.3-7.5-9.6-13.4-10c-4-0.3-5.8-1.4-5.8-3.4c0-2,2-3.1,5.7-3.1c3,0,5.5,0.7,7.7,2.8" />
              <path strokeLinecap="square" id="Stroke-6_1_" d="M34.2,19.9l4.3-5.1c-3.6-3.2-7.3-4.1-12.2-4.1c-5.7,0-13.2,2.5-13.2,9.7c0,7.1,7,9.2,12.9,9.7
                c4.4,0.3,6.2,1.1,6.2,3.3c0,2.3-2.7,3.8-5.6,3.7c-3.5-0.1-8-2.3-10.8-4.4" />
            </g>
          </svg>
          <h4 style={{margin: "10px 0"}}>Design Guideline</h4>
        </div>
        <div className="col-md-3">
          <svg className="compass" version="1.1" viewBox="0 0 74 54">
            <g className="pathturn" id="Layer_2" fill="none" stroke="#EE4D2D" strokeWidth="2" strokeLinejoin="bevel"
              strokeMiterlimit="10">
              <circle cx="53.1" cy="12.3" r="3.7" />
              <line x1="53.1" y1="4" x2="53.1" y2="8.5" />
              <line x1="53" y1="16.6" x2="39.2" y2="47.7" />
              <line x1="66.4" y1="47.7" x2="53" y2="16.6" />
              <line x1="34" y1="39" x2="71.9" y2="39" />
              <line x1="38" y1="36.3" x2="38" y2="41.3" />
              <line x1="52.9" y1="34.4" x2="52.9" y2="42.8" />
              <line x1="67.7" y1="36.3" x2="67.7" y2="41.3" />
            </g>
          </svg>
          <h4 style={{margin: "10px 0"}}>Resource Management</h4>
        </div>
        <div className="col-md-3">
          <svg viewBox="0 0 54 54" version="1.1">
            <g fill="none" stroke="#EE4D2D" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
              strokeMiterlimit="10">
              <rect x="10" y="9" width="35" height="25" />
              <polyline points="25,34 22,40 33,40 29.9,34   " />
              <line x1="21" y1="44" x2="34" y2="44" />
              <g className="charts">
                <line className="chart" x1="17.2" y1="29.4" x2="17.2" y2="22.5" />
                <line className="chart1" x1="22.7" y1="29.4" x2="22.7" y2="23.1" />
                <line className="chart2" x1="27.8" y1="29.5" x2="27.8" y2="24.9" />
                <line className="chart3" x1="33" y1="29.4" x2="33" y2="19.6" />
                <line className="chart4" x1="38" y1="29.4" x2="38" y2="15" />
              </g>
              <g className="pathstroke3">
                <polyline stroke="#FFFFFF" strokeWidth="6" points="6,30 19,20 26.1,25 39.8,13.5 37,20 " />
                <polyline points="6,30 19,20 26.1,25 38,15 33,15 38,15 37,20  " />
              </g>
            </g>
          </svg>
          <h4 style={{margin: "10px 0"}}>Work Efficiency</h4>
        </div>
        <div className="col-md-3">
          <svg viewBox="0 0 54 54" version="1.1">
            <g fill="none" stroke="#EE4D2D" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
              strokeMiterlimit="10">
              <line x1="26.4" y1="7" x2="26.4" y2="47" />
              <line x1="22" y1="47" x2="30.9" y2="47" />
              <g className="pathflip">
                <polyline points="26.5,23 42.8,22.9 45.8,19.1 42.8,15.3 26.5,15.3 " />
                <polyline points="26.4,26.4 10,26.4 7,30.2 10,34 26.3,34 " />
              </g>
            </g>
          </svg>
          <h4 style={{margin: "10px 0"}}>Knowledge Sharing</h4>
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
          <p>The goal we set for the DLS was to create a more beautiful and accessible design language. Our designs
            should be unified platforms that drive greater efficiency through well-defined and reusable components. In
            order to focus our efforts, we reduced the initial scope to creating the system first on components, design
            resource.</p>
          <p>We started by auditing and printing out many of our designs, both old and new. Laying the flows side by
            side on a board, we could see where and how the experiences were breaking and where we needed to start
            making changes. We figured that the best way to begin was by tackling issues head on.</p>
          <h4>Unified</h4>
          <p>Each piece is part of a greater whole and should contribute positively to the system at scale. There should
            be no isolated features or outliers.</p>
          <img src="../static/images/portfolio/design-language-system-color.png" alt="design-language-system-color"
            className="img-fluid" />
          <h4>Iconic</h4>
          <p>We’re focused when it comes to both design and functionality. Our work should speak boldly and clearly to
            this focus.</p>
          <img src="../static/images/portfolio/design-language-system-iconic.png" alt="design-language-system-iconic"
            className="img-fluid" />
          <h3>Tools</h3>
          <p>Standardize the tools different teams use in different phases of the project. Right from the discovery of
            the project through the design, development and validation phases. Make sure everyone is aware of the tools
            other teams use. Tools used for collaboration should be easily accessible and agreed upon by everyone in
            every team.</p>
          <img src="../static/images/portfolio/design-language-system-tools.png" alt="design-language-system-tool"
            className="img-fluid" />
          <h3>Folder System</h3>
          <p>Create a folder system to organize work. Standardize the naming convention. This will make it easier to
            find a particular file. Find a formula that works best for all the teams, perfect a naming convention and
            STICK TO IT.</p>
          <img src="../static/images/portfolio/design-language-system-folder.png" alt="design-language-system-folder"
            className="img-fluid" />
          <h3>Documentation</h3>
          <p>Document all these standardizations. Create a one stop shop for every information related to the system
            followed.</p>
          <img src="../static/images/portfolio/design-language-system-documents.png"
            alt="design-language-system-documents" className="img-fluid" />
          <h3>Style Guide</h3>
          <p>Conduct a UI Audit (If working on an already existing platform). This is essentially making an inventory of
            all the components that make up the digital product. All we have to do is take screenshots of all the
            elements and components that make up your product and categorize them. The components range from right, from
            the text to buttons and accordion to tabs.</p>
          <img src="../static/images/portfolio/design-language-system-style.png" alt="design-language-system-style"
            className="img-fluid" />
          <h3>Foundation</h3>
          <p>We had already created a basic style guide, that we called the foundation. This foundation loosely defined
            our typography, colors, icons, spacing and information architecture. The foundation proved essential for
            guiding our work in a unified direction while allowing room for us to individually explore creative design
            solutions. This way we felt that we were all working together, towards the same idea. Reviewing our
            collective work at the end of each new feature, we began to see patterns emerge. We course-corrected when
            necessary, and started defining our standardized components.</p>
          <img src="../static/images/portfolio/design-language-system-foundation.png"
            alt="design-language-system-foundation" className="img-fluid" />
          <h3>Brand</h3>
          <p>A DLS creates a personality for a digital product. A personality that has its own character and other
            quirks which gives it its own identity and allows it to be recognized in this over populated world of
            digital products.</p>
          <img src="../static/images/portfolio/design-language-system-logos.png" alt="design-language-system-logos"
            className="img-fluid" />
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
          <p>Since the design language are often shared, we can now build and release features on all native platforms
            at roughly the same time. Development is generally faster, since product engineers can focus more on writing
            the feature logic rather than the view code. Additionally, engineers and designers now share a common
            language.</p>
          <h3>Lessons Learned</h3>
          <p>We knew that this was a challenging project. It meant re-designing and rebuilding the majority of the views
            in our app. We managed to make our goal of creating the system. As with any project, there are things we
            wish we would have done differently.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img src="../static/images/portfolio/design-language-system-overall.png" alt="design-language-system-overall"
            className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 offset-5">
          <h4>Not all components are created equal.</h4>
          <p>In most apps there are a set of components that repeat often. For us, these components are still some
            little different hard to define. Looking back, I wish we had taken more time to think about the marketing
            purpose or business purpose and come up with a stronger set of patterns and components. In the end, we wound
            up with many different kinds with some inconsistencies.</p>
          <h4>Sketch</h4>
          <p>We initially tried to create these components as symbols in Sketch, which resulted in a mess. Even now, our
            Sketch files are sometimes challenging to maintain. Moving forward, we hope to find better ways of
            maintaining and creating new components.</p>
          <h4>Inspection</h4>
          <p>Due to there are too many guidelines, styles, and images, sometimes we are not sure current project belong
            to part of DLS, or special case. It make people confused and complex. We think there should have some tools
            to help check.</p>
          <h4>Work Efficiency</h4>
          <p>In the other hand, we realize some of the repeat works could solve by automation tool, like the banners of
            marketing daily work, designers usually have to resize lots of banners to upload many different
            advertisement platforms. We are building the auto-layout to help they work efficiency.</p>
          <iframe title="autolayout" width="560" height="315" src="https://www.youtube.com/embed/CwmaUkF94dc"
            frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <h4>Reference</h4>
          <ul>
            <li><a href="https://polaris.shopify.com/" target="_blank" rel="noopener noreferrer"
                className="text-link">Polaris — Shopify’s Design System</a></li>
            <li><a href="https://airbnb.design/building-a-visual-language/" target="_blank" rel="noopener noreferrer"
                className="text-link">Airbnb’s Design Language System</a></li>
            <li><a href="https://ant.design/" target="_blank" rel="noopener noreferrer" className="text-link">Ant Design
                - Ant Financial's Design Language System</a></li>
            <li><a href="https://developer.apple.com/design/" target="_blank" rel="noopener noreferrer"
                className="text-link">Apple’s Design Language System</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</article>
);
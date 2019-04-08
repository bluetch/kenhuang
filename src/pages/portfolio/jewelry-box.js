import React from "react";

// https://medium.com/prototyping-practice/apple-tv-gestural-ui-redesign-4388b9d779b3

export const Content = () => (
  <article className="portfolio">
    <div className="hero" style={{ backgroundImage: "url('../static/images/portfolio/jewelry-box-cover.jpg')", }}>
    </div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Jewelry Box</h1>
            <p>Trend Micro, 2012</p>
          </div>
          <div className="col-md-7">
            <p>The Jewelry Box was designed to simplify this cumbersome process with the seamless integration of hardware and software. Users can plug in a camera to the Jewelry Box and it will automatically transfer and upload photos to the cloud. The cloud provides secure storage where users can then view their photos and share them with their family and friends.</p>
            {/* <p>Language & Tool: HTML, CSS, JavaScript, QtWebkit Graphic</p>
            <p>My Rule: Front End Developer</p> */}
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Wireframe</h2>
          </div>
          <div className="col-md-7">
            <p>This is the moment of truth. This is the step the designers have been waiting for, a lot of exciting and creative things come through from this step. The visual changes, the look and feel with clear hierarchy really makes the whole product look exciting and new.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src="../static/images/portfolio/jewelry-box-wireframe.png" alt="jewelry-box-wireframe" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 offset-md-5">
            <p>We used Axure to create a wireframe and shared it within our product and design team, as well as our internal users, and collected feedback from all of them. Sharing the prototype from wireframe enabled everyone to use and interact with the new design on their device. It helps real users to see and interact with the new design, developing a set of questions and feedback to be addressed before development starts.</p>
            <p>Each of page, we put remote and screen together, it can easy to understand their interaction, and to think how to make design better.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Mockup</h2>
          </div>
          <div className="col-md-7">
            <p>While most apps take place on small, personal-sized screens —  TV brings a similar experience to a large screen. From an advertising perspective — this creates a higher potential for multiple user reach with one impression. In the past, that type of experience may have needed to be encouraged through prompting the user. Now, there are potentially others sitting with the main user, or even in a surrounding area with eyes on the screen.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <img src="../static/images/portfolio/jewelry-box-ui-overall.png" alt="jewelry-box-ui-overall" className="img-fluid" style={{ width: "100%" }} />
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>User Testing</h3>
          </div>
          <div className="col-md-7">
            <p>The discussion around user test planning included questions and considerations such as:</p>
            <ul>
              <li>Should we ask users to simply guess the gestures to reveal what is intuitive to them, or inform them of the gestures?</li>
              <li>Is an instruction manual required? How much instruction is acceptable, keeping in mind ‘knowledge in the head’ versus ‘knowledge in the world’?</li>
              <li>How can we create a realistic test context in which the user believes the gestures they are making are controlling the Jewelry Box</li>
            </ul>
            <h4>User Testing Set Up and Process</h4>
            <img src="../static/images/portfolio/jewelry-box-scene.png" alt="jewelry-box-scene" className="img-fluid" />
            <p>Our set up included one person controlling the Jewelry Box with its native remote control out of the line of sight of the user. We set up a camera to record the session, which was placed behind the user to capture both user gestures and what was happening on the TV. One team member facilitated the user testing sessions and encouraged users to think aloud and feedback on the spot.</p>
            <p>Questions we asked the users throughout testing were those such as:</p>
            <ul>
              <li>What was your thought process as you completed scenario x?</li>
              <li>Can you explain why you used gesture x to execute that function?</li>
              <li>What was your overall impression of the interface?</li>
              <li>How tired are you, having engaged physically with the system for this time</li>
              <li>Having experienced the system, would you prefer to use gestures or the native remote, and why?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Evaluation</h2>
          </div>
          <div className="col-md-7">
            <p>We found some of our users’ suggestions surprising. For example, our first user wanted to skip the step of navigating to an icon on the screen, and wanted a pointing gesture to immediately open what he was pointing at. We hadn’t considered this possibility in advance as we focused mainly on mimicking existing Jewelry Box navigation with the remote, which moves sequentially through items on the screen. We recognized, however, that pointing directly at the target was extremely sensical as a gesture even though it wasn’t a repeatable action with the remote. Step by step navigation was still important in some contexts however, especially when navigation to menu items off screen was required.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Reflection</h2>
          </div>
          <div className="col-md-7">
            <p>In the end, We found that the tests took longer than expected and we didn’t end up testing whether we would need to incorporate a gesture that activates the system before it starts registering gestures. We recognize that we would need to expand the tests to include multiple people in front of the TV, to gauge whether random hand-motions people make when in conversation, for example, would end up influencing the system (on a side note we question whether a behavioral prototype would be effective for determining the answer to what the technology would register in a group setting).</p>
          </div>
        </div>
      </div>
    </section>
  </article >
);
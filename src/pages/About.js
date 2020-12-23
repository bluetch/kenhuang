const About = (props) => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About</h3>
            <p>Hi I'm Ken Huang as a Senior Product Designer working at <a href="https://www.seagroup.com" target="_blank" rel="noopener noreferrer" className="text-link">Sea Group</a> (Shopee) in Singapore, design for south east area users.</p>
            <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, tweeting or pushing pixels, you'll find me making coffee, jogging, doodle, tennis, exercises or working out in the park.</p>
            <p>
              6 years of product design experience and 3 years developer experience
                  . Find out more on <a href="https://www.linkedin.com/in/bluetch/" target="_blank" rel="noopener noreferrer" className="text-link">Linkedin</a>
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <img src="/images/about/kenhuang-snow.jpg" alt="Ken Huang" className="img-fluid" />
          </div>
        </div>
        <section className="travel">
          <div className="container">
            <h3>Travel</h3>
            <p style={{ marginBottom: "60px" }}>I love to plant, taking the photo, and learn something new. Also, love to explore new places for breakfast. I'm proactively learning and seeking challenges to make myself forward. If you’d like to get in touch, feel free to say hello through any of the social links below. </p>
            <div className="row">
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-amsterdam-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Giethoorn in Amsterdam</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-belgium-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Waffle in Belgium</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-tokyo-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Skiing in Japan</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-australia-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Surfing in Australia</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-england-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Hogwarts in England</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-iceland-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Iceberg in Iceland</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-japan-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Tea in Japan</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../images/about/travel-indonesia-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Volcano in Indonesia</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-thailand-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">History in Thailand</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="/images/about/travel-taiwan-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Hiking in Taiwan</p>
              </div>
            </div>
          </div>
        </section >
        <section style={{ textAlign: "center" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>Contact</h3>
                <p>You can contact me via
              <a href="mailto:bluetch@gmail.com" className="primary-link">email</a>,
              <a href="https://www.linkedin.com/in/bluetch/" className="primary-link">linkedin</a>,
              <a href="https://www.facebook.com/bluetch" className="primary-link">facebook</a> or
              <a href="https://www.instagram.com/kenbluer/" className="primary-link">instagram</a>.
            </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About;
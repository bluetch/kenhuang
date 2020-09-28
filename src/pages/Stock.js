import React from "react";

const stories = [
  {
    title: "美國 luke's lobster 龍蝦漢堡",
    link: "https://startuplatte.com/2019/11/27/lukes-lobster/",
  },
  {
    title: "美國 Vicky 台灣人 吸油面紙",
    link: "https://startuplatte.com/2020/07/24/vicky-tsai-tatcha-1/",
  },
  {
    title: "英國 Kate Daly 線上離婚平台",
    link: "https://startuplatte.com/2020/05/06/amicable/",
  },
  {
    title: "德國 Fritz-Kola 可樂",
    link: "https://startuplatte.com/2020/09/04/fritz-kola/",
  },
  {
    title: "美國 麥當勞",
    link: "https://www.youtube.com/watch?v=yk0kH-_p6WM",
  },
  {
    title: "肯德基",
    link: "https://www.youtube.com/watch?v=Jsgt-gWYx_0",
  }

]

class Stock extends React.Component {
  render() {
    return (
      <section id="about" className="portfolio">
        <div className="container">
          <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" style={{ width: "200px" }} />
          <a href="https://alternative.me/crypto/fear-and-greed-index/">Source</a>
          <h3>shiller pe ratio</h3>
        </div>
        <div className="container">
          <h1>創業故事</h1>
          <div className="row">
            {
              stories.map((item => {
                return (
                  <div className="col-4">
                    <div className="card">
                      <img src="https://via.placeholder.com/150" alt="" />
                      <h3 className="title">{item.title}</h3>
                      <a href={item.link}>link</a>
                    </div>
                  </div>
                )
              }))
            }
          </div>
        </div>
      </section>
    )
  }
};

export default Stock;
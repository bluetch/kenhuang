import React from "react";
import axios from 'axios';

class Illustration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null
    }
  }

  componentDidMount() {
    //load Instagram: 
    axios.get('https://www.instagram.com/kenbluerr/?__a=1')
      .then(response => {
        this.setState({
          photos: response.data.graphql.user.edge_owner_to_timeline_media.edges,
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="illustration-page">
        <div className="container">
          <h1>Illustration</h1>
          <div className="grid">
            {
              this.state.photos !== null ?
                this.state.photos.map((item, index) => {
                  return (
                    <div key={index} className="item">
                      <a href={"https://www.instagram.com/p/" + item.node.shortcode} className="instagramIcon" target="_blank">
                        <img src={item.node.thumbnail_resources[3].src} alt={item.node.accessibility_caption} className="photo" />
                      </a>
                    </div>
                  )
                })
                :
                ""
            }
          </div>
        </div>
      </section>
    )
  }
};

export default Illustration;
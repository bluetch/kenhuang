import { useState, useEffect } from 'react';
import axios from 'axios';
import { instagramData } from '../json/constants';

const Illustrations = (props) => {
  const [photos, setPhotos] = useState(instagramData);

  useEffect(() => {
    axios.get('https://www.instagram.com/kenbluerr/?__a=1')
      .then(res => {
        setPhotos(res.data.graphql.user.edge_owner_to_timeline_media.edges);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  return (
    <div className="illustrations-page">
      <div className="container">
        <h2>Illustrations</h2>
        <div className="grid four">
          {
            photos.map((item, key) => {
              return (
                <a href={"https://www.instagram.com/p/" + item.node.shortcode} key={key} className="card" rel="noopener noreferrer" target="_blank">
                  <img src={item.node.thumbnail_resources[3].src} alt={item.node.accessibility_caption} />
                </a>
              )
            })
          }
        </div>
        <a href="https://www.instagram.com/kenbluerr/" target="_blank">View More</a>
      </div>
    </div>

  )
}

export default Illustrations;
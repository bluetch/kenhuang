import { useState, useEffect } from 'react';
import { ukuleleData } from '../json/constants';

const Ukulele = (props) => {

  return (
    <div className="page">
      <div className="container">
        <h2>Ukulele</h2>
        <div className="grid four">
          {
            ukuleleData.map((item, key) => {
              return (
                <div className="card">
                  <p className="name">{item.name}</p>
                  <a href={'/ukulele/'+item.sheet}>Sheet</a>
                </div>
              )
            })
          }
        </div>
        <a href="https://www.instagram.com/kenbluerr/" target="_blank">View More</a>
      </div>
    </div>

  )
}

export default Ukulele;
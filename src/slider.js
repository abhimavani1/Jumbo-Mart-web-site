import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <Slide>
          {/* <div className="each-slide"> */}
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/Jupiter2020/MSeries_Family/IndiasNo1/tallhero_1500x600_4._CB419429728_.jpg"
            data-reactid=".0.0"
            height="500px"
            width="1900px"
          />
          {/* </div> */}
          <div className="each-slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQALUpqFAC2cjQ_9C1fDNDMclJH9qjvgi4lKw&usqp=CAU"
              data-reactid=".0.0"
              height="500px"
              width="1900px"
            />
          </div>
          <div className="each-slide">
            <img
              src="https://resume.naukri.com/articles/wp-content/uploads/sites/7/2018/09/offer-acceptance-letter.jpg"
              data-reactid=".0.0"
              height="500px"
              width="1900px"
            />
          </div>

          <div className="each-slide">
            <img
              src="https://assets.indiadesire.com/images/mamaearth%20wow%20wednesday%20offer%2029th%20apr%202020.jpg"
              height="500px"
              width="1900px"
              data-reactid=".0.0"
            />
          </div>
        </Slide>
      </div>
    );
  }
}

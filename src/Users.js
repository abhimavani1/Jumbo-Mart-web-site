import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Users.css";
import Product from "./Product";

export default class Users extends Component {
  render() {
    return (
      <div>
        <div className="home__row">
          <Product
            id="12"
            title="Hadphone bOOt "
            price={1999}
            rating={4}
            image="data:image/jpeg;base64,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"
          />
          <Product
            id="13"
            title="Rolex watch best and water prof "
            price={9999}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU"
          />
          <Product
            id="14"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="15"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={100000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12"
            title="quabe smoth movebal "
            price={199}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU"
          />
          <Product
            id="13"
            title="Rolex watch"
            price={9888}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
          <Product
            id="14"
            title="New Apple 11 Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={59899}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPijf7sww2-DyJ-o9HkNcOLomZzmm5N6q80g&usqp=CAU"
          />
        </div>
        <div className="slide-container">
          <Slide>
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
      </div>
    );
  }
}

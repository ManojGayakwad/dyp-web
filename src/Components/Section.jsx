/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Section = ({ title, children }) => (
  <section className="small_pt">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div
            className="animation animated fadeInUp"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
            style={{ animationDelay: '0.2s', opacity: 1 }}
          >
            <div className="heading_s1">
              <h4 className='pt-4 pb-4'>{title}</h4>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section;

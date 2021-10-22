import React, { Component } from 'react'
import './index.css'

export default class Garena extends Component {
  state = {
    bgSrc: '../assets/bg.png',
    logoSrc: '../assets/logo.png',
    pcSrcList: ['../assets/img-1.jpg','../assets/img-1.jpg','../assets/img-1.jpg','../assets/img-1.jpg','../assets/img-1.jpg','../assets/img-1.jpg']
  }
  render() {
    const { bgSrc, logoSrc, pcSrcList } = this.state
    return (
      <div className="garena">
        <div className="garena-header">
          <img className="garena-header-bg" src={bgSrc} alt="bg" />
          <img className="garena-header-logo" src={logoSrc} alt="logo" />
        </div>
        <div className="garena-content">
          <div className="garena-content-web">
            {
              pcSrcList.map((item) => (
                <img className="garena-content-pc" src={item} alt="pc" />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

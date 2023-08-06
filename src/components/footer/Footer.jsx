import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="socials">
          <div className="logo">OLA</div>
          <div className="soc">
            <img src="" alt="ig" />
            <img src="" alt="yt" />
            <img src="" alt="tw" />
          </div>
        </div>
        <div className="srtlin">
          links
        </div>
        <div className="newsletter">
          <span>Stay upto date</span>
          <span>enter your email</span>
          <span>SUBSCRIBE TO NEWSLETTER</span>
        </div>
      </div>
      <div className="rights">
        <div className="left">
          <span>
            Copyright © 2022 Ola Electric
            Mobility Pvt Ltd. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <span>Notices</span>
          <span>Privacy Policy</span>
          <span>Terms of service</span>
          <span>India</span>
        </div>
      </div>
    </div>
  )
}

export default Footer

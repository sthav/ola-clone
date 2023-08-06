// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Home.scss';

const Home = () => {


  const [selected, setSelected] = useState(false);

  const handleClick = (index) => {
    setSelected(index)
  }


  const [data, setData] = useState("");


  const fetchJoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any")
    const result = await response.json();
    console.log("result", result)



    if (response.ok) {
      setData(result);
      console.log("data", data)

    }
  }

  const handleJoke = () => {
    alert(data.setup)

  }


  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="home">
      <div className="sectionwhite">
        <img src="/assets/hero-banner.webp" alt="" />
        <div className="containera">
          <span className='mov'>Moving people, <br /> and the world</span>
          <div className="commute">
            <div className="top">
              <div onClick={() => handleClick(1)} className={`daily ${selected === 1 ? 'clicked' : " "}`}>
                Daily
              </div>
              <div onClick={() => handleClick(2)} className={`daily ${selected === 2 ? 'clicked' : " "}`}>
                Rental
              </div>
              <div onClick={() => handleClick(3)} className={`daily ${selected === 3 ? 'clicked' : " "}`}>
                Outstation
              </div>
            </div>
            <div className="bottom">

              <div className="bottomleft">
                <div className="curloc">
                  <div className="circle"></div>
                  <input type="text" placeholder='Current Location' />
                </div>
                <hr style={{
                  background: 'lime',
                  color: 'lime',
                  borderColor: 'lime',
                  height: '0.7px',
                  width: '30px',
                }} />
                <div className="entdes">
                  <div className="circle1"></div>
                  <input type="text" placeholder='Enter Destination' />
                </div>
              </div>
              <div className="bottomright">
                <button>SEARCH OLA CABS</button>
              </div>
            </div>
          </div>
          <img src="/assets/olas1banner.png" alt="" />
          <p className='global'>Global mobility ecosystem driving <br /> communities forward</p>
          <div className="statgraph">
            <div className="img1">
              <img src="/assets/olastat1.jpg" alt="" />
              <span>250+</span>
              <span>Cities covered</span>
              <span>Across India, Australia, New Zealand and the UK</span>
            </div>
            <div className="img2">
              <img src="/assets/olastat2.jpg" alt="" />
              <span>55 Cr+</span>
              <span>Yearly rides</span>
              <span>Booked by our customers every year</span>
            </div>
            <div className="img3">
              <img src="/assets/olastat3.jpg" alt="" />
              <span>12 Cr+</span>
              <span>Kilometers on S1</span>
              <span>Distance covered on Ola S1 scooters within a year of launch</span>
            </div>

          </div>
        </div>
      </div>
      <div className="sectionblack">
        <div className="containerb">
          <span className='s1'>Ola S1. The best scooter ever built</span>
          <img src="/assets/s1-sport-web.png" alt="" />
          <div className="specifications">
            <p className='spec-content'>
              With fantastic features such as Hyper Mode and Eco Mode,
              get an unbelievable top speed of 116 KM/H and an
              unbeatable range that can reach up to 300 km.
            </p>
            <div className="spec1">
              <span>181 KM</span>
              <span>Range</span>
            </div>
            <div className="spec1">
              <span>116 KM/H</span>
              <span>TOP SPEED</span>
            </div>
            <div className="spec1">
              <span>2.9 SEC</span>
              <span>0 TO 40 KM/H</span>
            </div>
          </div>

          <span>More about Ola S1</span>
          <img src="/assets/pink-banner-desktop.png" alt="" />
        </div>
      </div>

      <div className="sectiontech">
        <div className="containertech">
          <span className='tech'>Tech for the world, made in India</span>
          <button onClick={handleJoke}>hello</button>
          <div className="box1">
            <img src="/assets/ola-futurefactory.png" alt="" />
            <div className="right1">
              <span>Ola Futurefactory</span>
              <span>Powered by over 3000 AI-driven robots,
                the Ola Futurefactory is the worlds most
                advanced two wheeler manufacturing facility</span>
            </div>
          </div>

          <div className="box2">
            <img src="/assets/battery-innovation-center.png" alt="" />
            <div className="right2">
              <span>Battery Innovation Centre</span>
              <span>
                We are building a state of the art
                centre with a $500 million investment making
                it one of the worlds largest most advanced cell
                R&D facility.
              </span>
            </div>
          </div>

          <div className="box3">
            <img src="/assets/battery-img.png" alt="" />
            <div className="right3">
              <span>Indias first
                Indigenous Cell</span>
              <span>We are working towards making our own
                cell technology to scale faster and revolutionise
                the EV segment.</span>
            </div>
          </div>
        </div>

      </div>

      <div className="sectioncar">
        <div className="containercar">
          <span>Indias most ambitious car</span>
          <video src="/assets/video/ola-car-video.mp4"></video>

        </div>
      </div>

      <div className="sectionride">
        <div className="container1">
          <span className='ridetext'>Theres an Ola ride for everyone</span>
          <div className="rect">
            <div className="rect1">
              <img src="/assets/auto1.jpg" alt="" />
              <span>For any budget</span>
              <span>
                From Bikes and Autos to Prime Sedans
                and Prime SUVs, you will find a ride in your
                budget at your convenience any time.
              </span>
            </div>
            <div className="rect2">
              <img src="/assets/auto2.jpg" alt="" />
              <span>For any distance</span>
              <span>
                Book rides within the city with Daily,
                or take a trip to your favourite destinations
                outside the city with Outstation.
              </span>
            </div>
            <div className="rect3">
              <img src="/assets/auto3.jpg" alt="" />
              <span>For any duration</span>
              <span>
                Easily plan a day out without having to worry
                about conveyance with an hour-based package
                from Rental.
              </span>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="left">
            <video src="/assets/video/for-drivers.mp4"></video>
          </div>
          <div className="right">
            <span>Making innovations since 2011</span>
            <span>For Riders</span>
            <span>
              We constantly experiment to come up
              with industry-first features for our
              riders that eventually become a norm.
            </span>
            <span>For Drivers</span>
            <span>
              Our drivers get real time stats to help
              optimize their rides better and earn
              more, straight from the app.
            </span>
          </div>
        </div>
      </div>


      <div className="sectionexper">
        <div className="maincontainerexp">
          <span>Experience the smarter way to pay</span>
          <div className="containerexp">
            <div className="leftexp">
              <img src="/assets/insurance-shop-img.png" alt="" />
            </div>
            <div className="rightexp">
              <div className="posttext">
                <span>Postpaid + </span>
                <span>Trusted by 40 lakh+ users</span>
              </div>
              <span>
                Buy now, pay later for
                all spends once a month
              </span>
              <div className="phimg">
                <div className="ph1">
                  <img src="/assets/ins1.jpg" alt="" />
                  <span>buy now, pay after 30 days</span>
                </div>
                <div className="ph2">
                  <img src="/assets/ins2.jpg" alt="" />
                  <span>Shop across 20,000 apps</span>
                </div>
                <div className="ph3">
                  <img src="/assets/ins3.jpg" alt="" />
                  <span>Credit limit upto ₹100,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="containerinsurance">
            <div className="instext">
              <span>Insurance</span>
              <span>Effective insurances for all your risks</span>
              <span>Explore more on the Ola app</span>
            </div>
            <div className="ins1">
              <img src="/assets/eff1.jpg" alt="" />
            </div>
            <div className="ins2">
              <img src="/assets/eff2.jpg" alt="" />
            </div>
            <div className="ins3">
              <img src="/assets/eff3.jpg" alt="" />
            </div>

          </div>
          <span className='moreins'>+ much more</span>
        </div>

      </div>
      <div className="sectiondiff">
        <div className="containerdiff">
          <p className='diff'>Making a Difference</p>
          <div className="textdiff">
            <span>
              Ola Foundation, the social welfare arm of Ola,
              is an outcome of a belief based on real
              interactions, research, and extensive study on
              the far-reaching impact of enabling and
              equipping people.
            </span>
            <span>
              1 Lakh+
              Families impacted in FY 2020-21
            </span>
            <span>
              93 Lakh+
              Meals enabled across India in FY 2020-21
            </span>
          </div>
          <div className="imgd">
            <div className="imgdleft">
              <img src="/assets/womens.png" alt="" />
              <img src="/assets/donating.png" alt="" />
            </div>
            <img src="/assets/mother-son.png" alt="" />
          </div>
          <span>More about Ola Foundation</span>
        </div>
      </div>
      <div className="sectionblog">
        <div className="containerblog">
          <span>Recent from our blogs</span>
          <div className="blogbox">
            <div className="blog1">
              <img src="/assets/end_for_ice_age.jpeg" alt="" />
              <span>2022: Beginning of the End for ICE Age</span>
              <span>Know more</span>
            </div>
            <div className="blog2">
              <img src="/assets/pli-agreement.png" alt="" />
              <span>Ola signs PLI agreement</span>
              <span>Know more</span>
            </div>
            <div className="blog3">
              <img src="/assets/ola-to-invest.png" alt="" />
              <span>Ola to invest $500 million</span>
              <span>Know more</span>
            </div>
            <div className="blog3">
              <img src="/assets/indigenous-cell.png" alt="" />
              <span>Indias first indigenous cell</span>
              <span>Know more</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sectiondown">
        <div className="containerdown">
          <span>Download our apps to get the best experience</span>
          <div className="downbox">
            <div className="down1">
              <img src="/assets/d1.jpg" alt="" />
            </div>
            <div className="down2">
              <img src="/assets/d2.jpg" alt="" />
            </div>
            <div className="down3">
              <img src="/assets/d3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="home">
    //   <div className="features">
    //     <div className="container">
    //       <img src="../../assets/ola_top.jpg" alt="" />
    //       <span>Moving people, and the world</span>

    //       <div className="enterbox">
    //         <span>Daily</span>
    //         <span>Rental</span>
    //         <span>Outstation</span>
    //         <div className="locationbox">
    //           <span>Current Location</span>
    //           <span>Enter Destination</span>
    //           <span>Search OLA CABS</span>
    //         </div>
    //       </div>

    //       <div className="s1container">
    //         <img src="" alt="" />
    //       </div>

    //       <span>Global mobility ecosystem driving communities forward</span>


    //       <div className="graphcontainer">
    //         <div className="img1">
    //           <img src="" alt="" />
    //           <span>250+</span>
    //           <span>Cities covered</span>
    //           <span>Across India, Australia, New Zealand and the UK</span>
    //         </div>
    //         <div className="img2">
    //           <img src="" alt="" />
    //           <span>55 Cr+</span>
    //           <span>Yearly rides</span>
    //           <span>Booked by our customers every year</span>
    //         </div>
    //         <div className="img3">
    //           <img src="" alt="" />
    //           <span>12 Cr+</span>
    //           <span>Kilometers on S1</span>
    //           <span>Distance covered on Ola S1 scooters within a year of launch</span>
    //         </div>
    //       </div>

    //     </div>

    //     <span>Ola S1. The best scooter ever built</span>
    //     <div className="s1imagecontainer">
    //       <img src="" alt="" />
    //       <span>With fantastic features such as Hyper Mode and Eco Mode,
    //         get an unbelievable top speed of 116 KM/H and an unbeatable
    //         range that can reach up to 300 km.
    //       </span>
    //       <div className="box1">
    //         <span>181 km</span>
    //         <span>range</span>
    //       </div>
    //       <div className="box2">
    //         <span>161 km/H</span>
    //         <span>range</span>
    //       </div>
    //       <div className="box3">
    //         <span>2.9 SEC</span>
    //         <span>0 To 40 KM/H</span>
    //       </div>
    //       <Link>More about Ola S1</Link>
    //       <img src="" alt="" />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home

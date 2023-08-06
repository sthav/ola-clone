import "./Sone.scss"

const Sone = () => {
    return (
        <div className="sone">
            <img src="/assets/tr_info_web_banner_fe63951937.png" alt="" />
            <div className="maincontainer">
                <div className="logo">
                    <img src="/assets/ola_logo.jpg" alt="" />
                </div>
                <div className="testcontainer">
                    <span>Test ride at your convenience</span>
                    <span>Experience the Ola S1 Pro at your doorstep</span>
                    <button>Book test ride</button>
                    <img src="/assets/home_Banner_down_arrow_55e67352c7.png" alt="" />
                </div>
            </div>
            <div className="specswrapper">
                <div className="specscontainer">
                    <div className="spec1">
                        <div className="spec1left">
                            <span>Turn heads wherever you go </span>
                            <span>Available in 10 stunning colors</span>
                            <span>36 litres large boot space</span>
                        </div>
                        <div className="specs1right">
                            <img src="/assets/scooter_Infoimage1_7f7f2d3e24.png" alt="" />
                        </div>
                    </div>
                    <div className="spec2">
                        <div className="spec2left">
                            <span>Glide through the distance </span>
                            <span>116 kmph top speed</span>
                            <span>
                                181 km ARAI certified /
                                170 Ola True range
                            </span>
                        </div>
                        <div className="specs2right">
                            <img src="/assets/scooter_Imfoiomage2_65d52702d2.png" alt="" />
                        </div>
                    </div>
                    <div className="spec3">
                        <div className="spec3left">
                            <span>Technology that truly moves you </span>
                            <span>
                                Remote Lock/Unlock, Navigation,
                                Music-on-the-go, Companion App and
                                much more
                            </span>

                        </div>
                        <div className="specs3right">
                            <img src="/assets/scooter_Imfo_Image3.png" alt="" />
                        </div>
                    </div>
                    <div className="spec4">
                        <div className="spec4left">
                            <span>Be immune to rising fuel costs </span>
                            <span>
                                40% lower cost compared to petrol scooters*
                            </span>
                            <span>Delivery in hyper-mode</span>
                        </div>
                        <div className="specs4right">
                            <img src="/assets/scooter_Imfo_Image4_.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerwrapper">
                <div className="footercontainer">
                    <div className="footerleft">
                        <img src="/assets/ola_logo.jpg" alt="" />
                        <span>Copyright © 2022 Ola Electric Mobility
                            Pvt Ltd. All Rights Reserved.</span>
                    </div>
                <div className="footerright">
                    <span>Beware of fake revolutionaries!</span>
                    <span>
                        We do not have any dealerships. If you
                        are approached by any person or
                        organisation(s) claiming to sell our
                        revolutionary Ola Scooter through any
                        website / phone call / poster / social
                        media post / whatsapp forward, we urge
                        you to inform the local police and / or
                        report it to legal@olaelectric.com.
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Sone

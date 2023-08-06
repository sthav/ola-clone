import "./Bookride.scss";

const Bookride = () => {
    return (
        <div className="bookride">
            <div className="bookrideWrapper">
                <div className="bookrideleft">
                    <span className="blue">Track your current rides</span>
                    <div className="ridesNavbar">
                        <span>hamburger</span>
                        <span>logo</span>
                        <span>humanicon</span>                        
                    </div>
                    <div className="menu">
                        <span>DAILY RIDES</span>
                        <span>OUTSTATION</span>
                        <span>RENTALS</span>
                    </div>
                    <div className="form">
                        <input className="formtext" type="text" placeholder="From" />
                        <input className="formtext" type="text" placeholder="TO" />
                        <input className="formtext" type="text" placeholder="WHEN" />
                    </div>
                    <div className="rides">
                        <span>AVAILABLE RIDES</span>
                        <div className="ridemodes">
                            <div className="auto">
                                <div className="autoimg">
                                    <img src="" alt="" />
                                    <span>1 min</span>
                                </div>
                                <div className="autodesc">
                                    <span>Auto</span>
                                    <span>Get an auto at your doorstep</span>
                                </div>
                                <div className="autofair">
                                    <span>$211</span>
                                    <span> - </span>
                                </div>
                            </div>

                            <div className="mini">
                                <div className="miniimg">
                                    <img src="" alt="" />
                                    <span>1 min</span>
                                </div>
                                <div className="minidesc">
                                    <span>Mini</span>
                                    <span>Comfy hatchbacks at pocket-friendly fares</span>
                                </div>
                                <div className="minifair">
                                    <span>$262</span>
                                    <span> - </span>
                                </div>
                            </div>

                            <div className="sedan">
                                <div className="sedanimg">
                                    <img src="" alt="" />
                                    <span>1 min</span>
                                </div>
                                <div className="sedandesc">
                                    <span>Prime Sedan</span>
                                    <span>Sedans with free wifi and top drivers</span>
                                </div>
                                <div className="sedanfair">
                                    <span>$367</span>
                                    <span> - </span>
                                </div>
                            </div>

                            <div className="suv">
                                <div className="suvimg">
                                    <img src="" alt="" />
                                    <span>5 min</span>
                                </div>
                                <div className="suvdesc">
                                    <span>Prime SUV</span>
                                    <span>SUVs with free wifi and top drivers</span>
                                </div>
                                <div className="suvfair">
                                    <span>$470</span>
                                    <span> - </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="bookrideright">
                    <img src="/assets/bg_city.jpg" alt="" />
                    <div className="righttext">
                        <span>Everyday City commute</span>
                        <span>Affordable AC cab rides at your doorstep</span>
                        <span>#olaForWeb</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookride

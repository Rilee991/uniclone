import React from 'react';

import './Section.css';

const Section3 = () => {
    return (
        <div style={{ background: "black", color: "white", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <div style={{ margin: 30 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <div style={{ fontSize: "30px"}}>
                            <b>We’ve all heard of instant groceries, now say hello to <span style={{ color: "greenyellow" }}>instant credit.</span></b><span style={{ opacity: "0.8"}}>The more you spend, the more you earn.</span>
                        </div>
                        <br/>
                        <div style={{ opacity: "0.8", fontSize: "20px" }}>
                        0% hassle, 100% paperless. Get your Uni Card instantly.
                        </div>
                    </div>
                    <div>
                        <img src="https://www.uni.cards/images/nx-wave/app_screen_1.webp" width="440px" />
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <div style={{ fontSize: "30px"}}>
                            <b>With Uni, <span style={{ color: "greenyellow" }}>you’re always in control.</span></b><span style={{ opacity: "0.8"}}>The more you spend, the more you earn.</span>
                        </div>
                        <br/>
                        <div style={{ opacity: "0.8", fontSize: "20px" }}>
                        Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.
                        </div>
                    </div>
                    <div>
                        <img src="https://www.uni.cards/images/nx-wave/app_screen_2.webp" width="440px" />
                    </div>
                </div>
            </div>
            <div className="flex" style={{ gap: "10px",  width: "100%", "marginLeft": "30px", "marginRight": "30px", justifyContent: "space-around" }}>
                <div>
                    <div>
                        <img src="https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp" />
                    </div>
                    <br/>
                    <div style={{ fontSize: 20}}>
                        Help, just a WhatsApp away. Anytime, Anyday.
                        <br/>
                        <br/>
                        <div style={{ opacity: 0.7 }}>
                            During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://www.uni.cards/images/nx-wave/rupee_bubble.webp" />
                    </div>
                    <br/>
                    <div style={{ fontSize: 20}}>
                        No hidden charges, no last minute surprises.
                        <br/>
                        <br/>
                        <div style={{ opacity: 0.7 }}>
                            100% money back guarantee if a charge is applied without your knowledge.
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp" />
                    </div>
                    <br/>
                    <div style={{ fontSize: 20}}>
                        Super secure. Because we care about your money.
                        <br/>
                        <br/>
                        <div style={{ opacity: 0.7 }}>
                            During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;

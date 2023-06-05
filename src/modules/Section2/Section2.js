import React from 'react';

import './Section.css';

const Section2 = () => {
    return (
        <div style={{ margin: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <div style={{ fontSize: 30 }}>
                <b>Earn 1% assured cashback</b> on your spends. Get <b>5X more value than cashback</b> at the Uni Store. Enjoy round the clock <b>Whatsapp support.</b> And it's <b>lifetime free</b>; no joining fee, no annual charges.
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)", width: "90px", height: "90px", borderRadius: "50%"}}>
                    <img src="https://www.uni.cards/images/down_arrow.svg" width="40px" />
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <div style={{ fontSize: "30px"}}>
                        <b>1% assured cashback on your spends.</b><span style={{ opacity: "0.5"}}>The more you spend, the more you earn.</span>
                    </div>
                    <br/>
                    <div style={{ opacity: "0.5" }}>
                        Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.
                    </div>
                </div>
                <div>
                    <img src="https://www.uni.cards/images/one_percent_cashback.png" width="440px" />
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <img src="https://www.uni.cards/images/five_x_rewards.png" width="440px" />
                </div>
                <div>
                    <div style={{ fontSize: "30px"}}>
                        <b>5x more value than your cashback,</b> <span style={{ opacity: "0.5"}}>only at the Uni Store.</span>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <div style={{ fontSize: "30px"}}>
                        <b>Zero Forex Markup.</b><span style={{ opacity: "0.5"}}>Go international, without any fees.</span>
                    </div>
                </div>
                <div>
                    <img src="https://www.uni.cards/images/forex_globe.png" width="440px" />
                </div>
            </div>
            <div>
                <div style={{ fontSize: "30px"}}>
                    <div>
                        <b>Lifetime <span style={{ color: "rgba(90,214,196)"}}>free.</span> No joining fee.</b>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center"}}>
                        No annual charges.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;

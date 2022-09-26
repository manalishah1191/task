import React from 'react'
import img2 from '../assets/images/img2.jpg'
import Line from './Line'
import ThirdChart from './ThirdChart'
import FourthChart from './FourthChart'

const Page2 = () => {
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col-8">
        <img src={img2} height="300px" width="600px"></img>
        </div>
        <div className="col-4">
        <h1 class='text-center'>Start now</h1>
        <p>Our market outlooks are part of the carporate account</p>
        <button type="button" class="btn btn-success mx-4">Aceess Data </button>
        <h3 class='text-center mt-4'>Try Them Out</h3>
        <p>Request a webinar about our outlooks and the information you are looking for free</p>
        <button type="button" class="btn align-items-center mx-4">Request Webinar </button>
        </div>
    </div>
</div>
<div className="container mt-4">
    <div className="row">
        <div className="col">
            <h2>Analyst Opinion</h2>
            <p>The alcoholic drinks market has witnessed a secular decline in volume sales in developed markets while demand in emerging markets is still growing. Value growth is mostly driven by premiumization as well as by  growth in the out-of home segment. Worldwide, more than two out of five US$ spent on alcoholic drinks are attributable to consumption away from home (in bars,restaurants etc) hightlightning the importance of the on-trade sales channel for the industry.</p>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col">
            <h2>Sales Channel</h2>
            <Line/>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col">
            <h2>Volume</h2>
            <ThirdChart/>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col">
            <h2>Sales</h2>
            <FourthChart/>
        </div>
    </div>
</div>
<div className="container mt-4">
    <div className="row">
        <div className="col">
            <h2>Methodology</h2>
            <p>The alcoholic drinks market has witnessed a secular decline in volume sales in developed markets while demand in emerging markets is still growing. Value growth is mostly driven by premiumization as well as by  growth in the out-of home segment. Worldwide, more than two out of five US$ spent on alcoholic drinks are attributable to consumption away from home (in bars,restaurants etc) hightlightning the importance of the on-trade sales channel for the industry.</p>
        </div>
    </div>
</div>
<div className="container mt-4">
    <div className="row">
        <div className="col">
            <h2>Key Market Indicators</h2>
            <p> Value growth is mostly driven by premiumization as well as by  growth in the out-of home segment. Worldwide, more than two out of five US$ spent on alcoholic drinks are attributable to consumption away from home (in bars,restaurants etc) hightlightning the importance of the on-trade sales channel for the industry.</p>
        </div>
    </div>
</div>
<div className="container mt-4">
    <div className="row">
        <div className="col-8">
            <h4 class='heading'>Explore more high quality data on related topic</h4>
            <h2>Alcoholic Beverage Industry Worldwide</h2>
            <h2>-Statistics and facts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam pariatur quo tempora, iusto, nisi accusamus modi alias ipsam ipsa mollitia nobis illo dolores cumque, adipisci earum similique qui animi fugit.</p>
           </div>
        <div className="col-4">
        <button type="button" class="btn btn-primary">Total alcoholic sales beverahe in US 222.59bn USD</button>
        <button type="button" class="btn btn-dark mt-2">wholesale alcoholic sales beverahe in US 20bn USD</button>
        <button type="button" class="btn btn-success mt-2">Beer Production in US 180.89m bbi</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Page2
import React from 'react'

import Tv_logo from '../../Assets/images/icons/apple-tv-logo.png'
import Banker from '../../Assets/images/home/banker.png'
import Watch_logo from '../../Assets/images/icons/watch-series5-logo.png'
import Arcade_logo from '../../Assets/images/icons/arcade.png'

function Main() {
    return (
        <div>
                
        {/* <!-- Alert Section --> */}
            <section class="alert-section top-50">
                <div class="container">
                    <div class="alert-title">
                        We’re open for you.
                    </div>
                    <div class="alert-text">
                        Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br />
                        For service and support, visit <a href="https://support.apple.com/" >support.apple.com</a>.
                    </div>
                </div>
            </section>

        {/* <!--iPod Pro Section--> */}
            <section class="iPodPro-container">
                <div class="container">
                    <div class="iPodPro-text-container">
                    <div class="new-alert">
                        New
                    </div>
                    <div class="title-container bold black ">
                        iPod Pro
                    </div>
                    <div class="links-container">
                        <ul>
                        <li class="iPodPro-learn-more-link">
                            <a href="#">Learn more</a>
                        </li>
                        <li class="iPodPro-order-link">
                            <a href="#">Order</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="iPodPro-caption row">
                    <div class="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
                    <div class="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
                    </div>
                </div>
            </section>
        {/* <!--iPodPro-container ends here--> */}

        {/* <!--MacBook Air Section--> */}

            <section class="macBookAir-container">
                <div class="container">
                    <div class="macBookAir-text-container">
                    <div class="new-alert">
                        New
                    </div>
                    <div class="title-container bold black ">
                        MacBook Air
                    </div>
                    
                    <div class="description-container black">
                        Twice the speed. Twice the storage.
                    </div>
                    <div class="price-container grey">
                        From $999.
                    </div>
                    <div class="links-container">
                        <ul>
                        <li class="macBookAir-learn-more-link">
                            <a href="#">Learn more</a>
                        </li>
                        <li class="macBookAir-order-link">
                            <a href="#">Buy</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        {/* <!--macBookAir-container ends here--> */}

        {/* <!--iPhone 11 Pro Section--> */}

            <section class="iPhone11Pro-container">
                <div class="container">
                    <div class="iPhone11Pro-text-container">
                    <div class="title-container bold ">
                        iPhone 11 Pro
                    </div>
                    
                    <div class="description-container">
                        Pro cameras. Pro display. Pro performance.
                    </div>
                    <div class="price-container grey">
                        From $24.95/mo. or $599 with trade‑in.
                    </div>
                    <div class="links-container">
                        <ul>
                        <li class="iPhone11Pro-learn-more-link">
                            <a href="#">Learn more</a>
                        </li>
                        <li class="iPhone11Pro-order-link">
                            <a href="#">Buy</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        {/* <!--iPhone11Pro-container ends here--> */}

        {/* <!--iPhone 11 Section--> */}
            <section class="iPhone11-container">
                <div class="container-fluid">
                    <div class="row">
                    <div class="left-side-wrapper col-sm-12 col-md-6">
                        <div class="left-side-container">
                        <div class="title-container">
                            iPhone 11 
                        </div> 
                        <div class="price-container">
                            Just the right amount of everything.
                            From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                        </div>
            
                        <div class="links-container">
                            <ul>
                            <li><a href="">Learn more</a></li>
                            <li><a href="">Apply now</a></li>
                            </ul> 
                        </div>
                        </div>
                    </div>
                    <div class="right-side-wrapper col-sm-12 col-md-6">
                        <div class="right-side-container">
                        <div class="title-container white">
                            Get the latest CDC response to COVID-19. 
                        </div> 
            
                        <div class="links-container white">
                            <ul>
                            <li><a href="">Watch the PSA</a></li>
                            </ul> 
                        </div>
                        </div>
                    </div>					
                    </div>
                </div> 
            </section>
        {/* <!--iPhone11-container ends here--> */}

        {/* <!-- Apple TV and AirPod Pro Section--> */}
            <section class="tv-watch-container">
                <div class="container-fluid">
                    <div class="row">
                    <div class="left-side-wrapper col-sm-12 col-md-6">
                        <div class="left-side-container">
                        <div class="top-logo-wrapper">
                            <div class="logo-wrapper">
                            <img src={Tv_logo} />
                            </div>
                        </div>
            
                        <div class="tvshow-logo-wraper">
                            <img src= {Banker} />
                        </div>
            
                        <div class="watch-more-wrapper">
                            <a href="#">Watch now on the Apple TV App</a>
                        </div>
                        </div>
                    </div>
                    <div class="right-side-wrapper col-sm-12 col-md-6">
                        <div class="right-side-container">
                        <div class="top-logo-wrapper">
                            <div class="logo-wrapper">
                            <img src= {Watch_logo}/>
                            </div>
                        </div>
                        <div class="description-wraper">
                            With the Always-On Retina display.<br />
                            You’ve never seen a watch like this.
                        </div>
                        <div class="links-container">
                            <ul>
                            <li><a href="">Learn more</a></li>
                            <li><a href="">Buy</a></li>
                            </ul> 
                        </div>
                        </div>
                    </div>					
                    </div>
                </div>
            </section>
        {/* <!--tv-watch-container ends here--> */}

            <section class="card-arcade-container">
                <div class="container-fluid">
                    <div class="row">
                    <div class="left-side-wrapper col-sm-12 col-md-6">
                        <div class="left-side-container">
                        <div class="top-logo-wrapper">
                            <div class="logo-wrapper">
                            <img src= {Arcade_logo} />
                            </div>
                        </div>
                        <div class="description-wraper white">
                            Agent 8 is a small hero on a big mission.
                        </div>
                        <div class="links-container">
                            <ul>
                            <li><a href="">Play now<sup>2</sup></a></li>
                            <li><a href="">Learn about Apple Arcade</a></li>
                            </ul> 
                        </div>						
                        </div>
                    </div>
                    <div class="right-side-wrapper col-sm-12 col-md-6">
                        <div class="right-side-container">
                        <div class="title-container">
                            Apple Card Monthly Installments 
                        </div> 
                        <div class="description-wraper">
                            Pay for your next iPhone over time, interest-free with Apple Card.
                        </div>
                        <div class="links-container">
                            <ul>
                            <li><a href="">Learn more</a></li>
                            <li><a href="">Apply now</a></li>
                            </ul> 
                        </div>
                        </div>
                    </div>					
                    </div>
                </div>
            </section>
        {/* <!--card-arcade-container ends here--> */}
        </div>
    );
}

export default Main;

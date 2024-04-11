import React from 'react';
import './App.css';
//import seasky from './Components/Images/seasky.jpg';
//import sea from './Components/Images/sea.jpg';
import girl from './Components/Images/girl.jpg';
import beach from './Components/Images/beach.jpg';
import green from './Components/Images/green.jpg';
//import travelpeople from './Components/Images/travelpeople.jpg'
import mumbai from './Components/Images/mumbai.jpg';
import delhi from './Components/Images/delhi.jpg';
import jaipur from './Components/Images/jaipur.jpg';
import goa from './Components/Images/goa.jpg';
import bengaluru from './Components/Images/bengaluru.jpg';
import agra from './Components/Images/agra.jpg';
import kolkata from './Components/Images/kolkata.jpg';
// import varanasi from './Components/Images/varanasi.jpg';
//import udaipur from './Components/Images/udaipur.jpg';
import tajmahal from './Components/Images/tajmahal.jpg';
import hms from './Components/Images/hms.jpg';
import indiagate from './Components/Images/indiagate.jpg';
import shimla from './Components/Images/shimla.jpg';
import manali from './Components/Images/manali.jpg';
import redfort from './Components/Images/redfort.jpg';
import amber from './Components/Images/amber.jpg';
import hawamahal from './Components/Images/hawamahal.jpg';
import rishikesh from './Components/Images/rishikesh.jpg';
import chennai from './Components/Images/chennai.jpg';
import CitySearch from './Components/JS files/citysearch';

function App()
{
  return(
    <> 
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="wallpaper1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Wallpaper2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Wallpaper3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={beach} className="center-block w-100 " style={{height: "650px"}} alt="wallpaper1" />
              <div className="carousel-caption">
                <h2><b>Welcome to the JourneyPro!</b></h2>
                <p>Embark on unforgettable journeys with us! Discover new horizons and create lasting memories. Join now to explore the world.</p>
                <button type="button" id='registerbtn' class="btn btn-warning">Register now</button>
              </div>
          </div>
          <div className="carousel-item">
            <img src={green} className="d-block w-100" style={{height: '650px'}} alt="wallpaper2" />
              <div className="carousel-caption">
                <h2><b>Discover, Book, and Go!</b></h2>
                <p>From cozy stays to reliable car rentals and seamless flights, find everything you need for your next journey right here.</p>
                <button type="button" id='registerbtn' class="btn btn-warning">Register now</button>
              </div>
          </div>
          <div className="carousel-item">
            <img src={girl} className="d-block w-100" style={{height: "650px"}} alt="Wallpaper3" />
              <div className="carousel-caption">
                <h2><b>Indulge in Luxurious Comfort Every Step of Your Journey!</b></h2>
                <p>Effortlessly Book Your Stays, Cars, and Flights for a Travel Experience Tailored to Your Utmost Comfort and Convenience.</p>
                <button type="button" id='registerbtn' class="btn btn-warning">Register now</button>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true">
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <CitySearch></CitySearch>
      <div className='popularDestinations'>
      <h4>Popular Destinations in India</h4>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='cardsContainer'>
              <div className="card" style={{width: '18rem'}}>
                <img src={mumbai} className="card-img-top" alt="mumbai" />
                <div className="card-body">
                  <h5 className="card-title">Mumbai</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan Travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={delhi} className="card-img-top" alt="delhi" />
                <div className="card-body">
                  <h5 className="card-title">New Delhi</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={jaipur} className="card-img-top" alt="jaipur" />
                <div className="card-body">
                  <h5 className="card-title">Jaipur</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={agra} className="card-img-top" alt="agra" />
                <div className="card-body">
                  <h5 className="card-title">Agra</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='cardsContainer'>
            <div className="card" style={{width: '18rem'}}>
                <img src={agra} className="card-img-top" alt="agra" />
                <div className="card-body">
                  <h5 className="card-title">Agra</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={goa} className="card-img-top" alt="goa" />
                <div className="card-body">
                  <h5 className="card-title">Goa</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={bengaluru} className="card-img-top" alt="bengaluru" />
                <div className="card-body">
                  <h5 className="card-title">Bengaluru</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={kolkata} className="card-img-top" alt="kolkata" />
                <div className="card-body">
                  <h5 className="card-title">Kolkata</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='cardsContainer'>
              <div className="card" style={{width: '18rem'}}>
                <img src={kolkata} className="card-img-top" alt="goa" />
                <div className="card-body">
                  <h5 className="card-title">Kolkata</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={chennai} className="card-img-top" alt="bengaluru" />
                <div className="card-body">
                  <h5 className="card-title">Chennai</h5>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='touristDestinations'>
      <h4>Top Tourist places in India</h4>
      <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='cardsContainer'>
              <div className="card" style={{width: '18rem'}}>
                <img src={tajmahal} className="card-img-top" alt="mumbai" />
                <div className="card-body">
                  <h7 className="card-title">Taj Mahal</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan Travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={hms} className="card-img-top" alt="delhi" />
                <div className="card-body">
                  <h7 className="card-title">Sri Harmandir Sahib</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={indiagate} className="card-img-top" alt="jaipur" />
                <div className="card-body">
                  <h7 className="card-title">India Gate</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={shimla} className="card-img-top" alt="agra" />
                <div className="card-body">
                  <h7 className="card-title">Shimla</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='cardsContainer'>
            <div className="card" style={{width: '18rem'}}>
                <img src={shimla} className="card-img-top" alt="agra" />
                <div className="card-body">
                  <h7 className="card-title">Shimla</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={manali} className="card-img-top" alt="goa" />
                <div className="card-body">
                  <h7 className="card-title">Manali</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={redfort} className="card-img-top" alt="bengaluru" />
                <div className="card-body">
                  <h7 className="card-title">Red Fort</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={amber} className="card-img-top" alt="kolkata" />
                <div className="card-body">
                  <h7 className="card-title">Amber Palace</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='cardsContainer'>
              <div className="card" style={{width: '18rem'}}>
                <img src={amber} className="card-img-top" alt="goa" />
                <div className="card-body">
                  <h7 className="card-title">Amber Palace</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={hawamahal} className="card-img-top" alt="bengaluru" />
                <div className="card-body">
                  <h7 className="card-title">Hawa Mahal</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={rishikesh} className="card-img-top" alt="bengaluru" />
                <div className="card-body">
                  <h7 className="card-title">Rishikesh</h7>
                  <a href="#" className="btn btn-warning btn-sm">Plan travel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" data-bs-target="#carouselExampleControls2" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carouselExampleControls2" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

    </>
  );
}
export default App;
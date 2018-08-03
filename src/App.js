import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">




      <div id="topColor"></div>


      <div className="container-fluid"> {/*<!--to add opacity to background -->*/}

      <div className="company-logo">
        <img id="d-pad" className="img-fluid" src={require("./images/d-pad-logo.png")} alt="D-pad image" />
        &nbsp;Play<strong>Stickerz</strong>
      </div>

      <button type="button" className="btn btn-primary" id="EmptyBasket">Empty Basket</button>

      <div className="worldShipping">
        Free world shipping&nbsp;
        <i id="AddToBasketIcon" className="far fa-check-circle"></i>
      </div>


      <div className="container-fluid">
        <img id="controller" className="img-fluid" src={require("./images/controller.png")} alt="Controller" />
      </div>
      <div className="container-fluid">
        <img id="sticker" className="img-fluid" src={require("./images/sticker.png")} alt="Sticker" />
      </div>
      <div className="container-fluid">
        <img id="sticker-logos" className="img-fluid" src={require("./images/destiny-logo.png")} alt="Sticker" />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="mx-auto color-container">
            {/*<!-- <div className="col-md-4 text-center color-container"> -->*/}
            <div className="colors blue" id="blue"></div>
            <div className="colors pink" id="pink"></div>
            <div className="colors red" id="red"></div>
            <div className="colors green" id="green"></div>
          </div>
        </div>
      </div>

      </div>

      <div className="container-fluid">
      <button type="button" className="btn btn-secondary" id="AddToBasket"> &nbsp;&nbsp;&nbsp;<i id="AddToBasketIcon" className="fas fa-chevron-circle-down
      "></i> &nbsp; Select sticker</button>
      </div>


      <footer className="footer navbar-fixed-bottom">
      <div className="container-fluid">
        <div className="row logo-container">
          {/*<!-- !!! IMPORTANT !!!   "mx-auto" KEY  TO CENTERING WITH BOOTSTRAP 4 !!!!!!!!!!!!!! -->*/}
          <div className="mx-auto">
            <div className="logo-caption" id="batman-footer">
              <img id="batman-logo" className="logo img-fluid float" src={require("./images/batman-logo.png")} alt="Batman Logo" />
              <p id="batman-caption">Batman</p>
            </div>
            <div className="logo-caption" id="destiny-footer">
              <img id="destiny-logo" className="logo img-fluid" src={require("./images/destiny-logo.png")} alt="Destiny Logo" />
              <p id="destiny-caption">Destiny</p>
            </div>
            <div className="logo-caption" id="mass-effect-footer">
              <img id="mass-effect-logo" className="logo img-fluid" src={require("./images/mass-effect-logo.png")} alt="Mass Effect Logo" />
              <p id="mass-effect-caption">Mass Effect</p>
            </div>
            <div className="logo-caption" id="skyrim-footer">
              <img id="skyrim-logo" className="logo img-fluid" src={require("./images/skyrim-logo.png")} alt="Skyrim Logo" />
              <p id="skyrim-caption">Skyrim</p>
            </div>
            <div className="logo-caption" id="transformers-footer">
              <img id="transformers-logo" className="logo img-fluid" src={require("./images/transformers-logo.png")} alt="Transformers Logo" />
              <p id="transformers-caption">Transformers</p>
            </div>
            <div className="logo-caption" id="ps4-footer">
              <img id="PS4-logo" className="logo img-fluid" src={require("./images/PS4-logo.png")} alt="PS4 Logo" />
              <p id="PS4-caption">Playstation 4</p>
            </div>
          </div>
        </div>
        <div className="row copyright">
          {/*<!-- <div className=""> -->*/}
            <strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike>
            &nbsp;&nbsp;&nbsp; ©2018 PlayStickerz &nbsp;&nbsp;&nbsp;
            <strike>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strike>
          {/*<!-- </div> -->*/}
        </div>
      </div>
      </footer>

        {/*<!--NOTE: NEEDS ATTENTION--><!-- Accompanied JS file with scripts written to add more interaction -->*/}
        <script src="script.js"> </script>

        {/*<!-- Bootstrap 4 JS requirements: jQuery, Popper.js, BootstrapJS script -->*/}
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>



      {/* React App closing div: */}
      </div>
    );
  }
}

export default App;

import React from "react";
import "./Home.css";
import Products from "./Products";
function Home() {
  return (
    <div className="home">
      <img
        className="home_Image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Products
          id="1"
          title='HP 15 (2021) Thin & Light 10th Gen Intel Core i3 Laptop, 8GB RAM, 512GB SSD, 39.62 cms (15.6") FHD Screen, Windows 10, MS Office, Jet Black (15s-du1516TU)'
          image="https://m.media-amazon.com/images/I/41LhgBrER6L.__AC_SY200_.jpg"
          price="₹ 43,490.00"
          rating={5}
        />
        <Products
          id="2"
          title="OPPO F19 Pro+ 5G (Fluid Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          image="https://m.media-amazon.com/images/I/413B3aiSBdL.__AC_SY200_.jpg"
          price="₹ 25,990.00"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Products
          id="3"
          title="Mivi Collar Flash Bluetooth Earphones. Fast Charging Wireless Earphones with mic, 24hrs Battery Life, HD Sound, Powerful Bass, Made in India Neckband -Black"
          image="https://m.media-amazon.com/images/I/31+rLk3CZ7S.__AC_SY200_.jpg"
          price="₹ 999.00"
          rating={3}
        />
        <Products
          id="4"
          title="OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden)"
          image="https://m.media-amazon.com/images/I/41JUbD67xQS._AC_SY200_.jpg"
          price="₹ 492"
          rating={4}
        />
        <Products
          id="5"
          title="HP 680 Original Ink Advantage Cartridge (Black)"
          image="https://m.media-amazon.com/images/I/51AljrVmUGL._AC_SY200_.jpg"
          price="₹ 794"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Products
          id="6"
          title="TP-Link Archer C6 Gigabit MU-MIMO Wireless Router, Dual Band 1200 Mbps Wi-Fi Speed, 5 Gigabit Ports, 4 External Antennas and 1 Internal Antenna WiFi Coverage with Access Point Mode, Qualcomm Chipset"
          image="https://m.media-amazon.com/images/I/41VDUqScJFL._AC_SY200_.jpg"
          price="₹ 2,599.00"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;

import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"engine"} heading={"Top Engines"}/>
      <HorizontalCardProduct category={"transmission"} heading={"Popular's transmission"}/>

      <VerticalCardProduct category={"struts"} heading={"Struts"}/>
      <VerticalCardProduct category={"brakes"} heading={"Brakes"}/>
      <VerticalCardProduct category={"battery"} heading={"Battery"}/>
      <VerticalCardProduct category={"radiator"} heading={"Radiator"}/>
      <VerticalCardProduct category={"fuel"} heading={"Fuel"}/>
      <VerticalCardProduct category={"exhaust"} heading={"Exhaust"}/>
      <VerticalCardProduct category={"bodypanels"} heading={"BodyPanels"}/>
      <VerticalCardProduct category={"seats"} heading={"Seats"}/>
      <VerticalCardProduct category={"aircon"} heading={"Aircon"}/>
      <VerticalCardProduct category={"tyres"} heading={"Tyres"}/>

    </div>
  )
}

export default Home
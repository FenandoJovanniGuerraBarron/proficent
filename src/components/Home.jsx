import React, { useState } from 'react'
import Button from './Button'
import Card from './Card'
import './styles/home.css'

const Home = () => {

  //States of Items
  const [beds, setBeds] = useState(0)
  const [refrigerador, setRefrigerador] = useState(0)
  const [furniture, setFurniture] = useState(0)
  const [oven, setOven] = useState(0)
  const [sofa, setSofa] = useState(0)
  const [tv, setTv] = useState(0)
  const [washer, setWasher] = useState(0)
  const [dining, setDining] = useState(0)
  const [desk, setDesk] = useState(0)
  const [wardrobe, setWardrobe] = useState(0)

//States of Totals
  const [totalItems, setTotalItems] = useState(0)
  const [totalM, setTotalM] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)
  const [due, setDue] = useState(0)

  let m2= (beds*1.2)+refrigerador+(furniture*0.5)+(oven*0.6)+(sofa*1.5)+(tv*0.25)+(washer*0.5)+(dining*2)+(desk*0.75)+(wardrobe*3.2)
  
  const handleCalculate=()=>{
  setTotalItems(beds+refrigerador+furniture+oven+sofa+tv+washer+dining+desk+wardrobe)
  setTotalM((m2).toFixed(2))
  setSubTotal((m2*200).toFixed(2))
  setTax((((m2*200)/100)*16).toFixed(2))
  setTotal(((m2*200)+(((m2*200)/100)*16)).toFixed(2))
  setDue((((m2*200)+(((m2*200)/100)*16))/2).toFixed(2))
  }

  const handleReset =()=>{
    setBeds(0)
    setRefrigerador(0)
    setFurniture(0)
    setOven(0)
    setSofa(0)
    setTv(0)
    setWasher(0)
    setDining(0)
    setDesk(0)
    setWardrobe(0)
    setTotalItems(0)
    setTotalM(0)
    setTax(0)
    setSubTotal(0)
    setTotal(0)
    setDue(0)
  }

  return (
    <div className='home'>
      <div className='home__text' >
        <h1 className='text__title' >What items to store?</h1>
        <p className='text__p' >Select wich items you wish to store before movig to your nwe home. We'll keep 'em safe!</p>
      </div>
      <div className='home__list' >
        <div>
          <Card title='Beds' link={'/Beds.png'} />
          <Button state={beds} set={setBeds} />
        </div>
        <div>
          <Card title='Refrigerador' link={'/Refrigerador.png'} />
          <Button state={refrigerador} set={setRefrigerador} />
        </div>
        <div>
          <Card title='Furniture' link={'/Furniture.png'} />
          <Button state={furniture} set={setFurniture} />
        </div>
        <div>
          <Card title='Oven' link={'/Oven.png'} />
          <Button state={oven} set={setOven} />
        </div>
        <div>
          <Card title='Sofa' link={'/Sofa.png'} />
          <Button state={sofa} set={setSofa} />
        </div>
        <div>
          <Card title='TV' link={'/TV.png'} />
          <Button state={tv} set={setTv} />
        </div>
        <div>
          <Card title='Washer-dryer' link={'/Washer-dryer.png'} />
          <Button state={washer} set={setWasher} />
        </div>
        <div>
          <Card title='Dining' link={'/Dining.png'} />
          <Button state={dining} set={setDining} />
        </div>
        <div>
          <Card title='Desk' link={'/Desk.png'} />
          <Button state={desk} set={setDesk} />
        </div>
        <div>
          <Card title='Wardrobe' link={'/Wardrobe.png'} />
          <Button state={wardrobe} set={setWardrobe} />
        </div>
      </div>
      <div className='home__button' >
        <button  onClick={handleReset}  className='button__clear' >Clear</button>
        <button  onClick={handleCalculate} className='button__cal' >Calculate</button>
      </div>
      <div className='home__summary' >
        <h2 className='summary__title' >Summary</h2>
        <div className='summary__list' >
          <div className='list__div' >
            <h5 className='list__div-title' >Total Items</h5>
            <span className='list__div-p' >{totalItems}</span>
          </div>
          <div className='list__div' >
            <h5 className='list__div-title' >Total M2</h5>
            <span className='list__div-p' >{totalM}</span>
          </div>
          <div className='list__div' >
            <h5 className='list__div-title' >Subtotal</h5>
            <span className='list__div-p' >${subTotal}</span>
          </div>
          <div className='list__div' >
            <h5 className='list__div-title' >Tax</h5>
            <span className='list__div-p' >${tax}</span>
          </div>
          <div className='list__div' >
            <h5 className='list__div-title font-700 ' >Total</h5>
            <span className=' list__div-p font-700' >${total}</span>
          </div>
          <div className='list__div' >
            <h5 className='list__div-title font-700 ' >Due Today 50%</h5>
            <span className=' list__div-p font-700' >${due}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
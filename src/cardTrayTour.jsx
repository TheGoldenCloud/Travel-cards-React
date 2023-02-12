import React,{ useState,useEffect } from 'react'
import style from './style/still.module.css'
import "bootstrap/dist/css/bootstrap.css";
import CardTour from './cardTour'

function CardTray() {

  let [cards,setCards] = useState([]);
  let [show,setShow] = useState(true);

  let start = <div className={ style.title }>
                <h1><strong>Our Tours</strong></h1>
                <div className={style.titleLine}></div>
              </div>
  
  let end = <div className={ style.title }>
              <h1><strong>No Tours Left</strong></h1>
              <div className={style.titleButton}>
                <button className='btn btn-primary' onClick={ () => window.location.reload(true) }>Refresh</button>
              </div>
            </div>

  useEffect(() => {
    fetch('productData.json').then(resData=>resData.json()).then(res=>setCards(res));
  },[]);
  
  return (
    <React.Fragment>
    { cards.length == 0 ? end : start }
      <div className={ style.cardTray }>
          { cards.map(c=><CardTour key={c.id} id={c.id} img = {c.img} title = {c.title} textBody = {c.text} price = {c.price} onDelete = { (e) => setCards(cards.filter(c => c.id != e)) } />) } 
      </div>
    </React.Fragment>
  )
}

export default CardTray
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from './style/still.module.css'

function CardTour({ img, title, textBody, price, onDelete, id }) {

  let objectStyle = {
    button:{
      border: "6px",
      backgroundColor:"rgba(137, 216, 230, 0.8)", //Fix opacity
      color:"blue",
      borderRadius: "6px",
      paddingLeft: "1.5%",
      paddingRight: "1.5%"
    },

    card:{
      width: "35rem",
      marginTop: "5%",
      marginBottom: "5%"
    }

  }

  return (
    <React.Fragment>
      <div className="card" style={objectStyle.card}>
        <img src={ img } className="card-img-top" alt="Image not displaying!" />
        <div className="card-body">
          <div className="title-price">
            <h5 className="title float-start">{title}</h5>
            <div className="price float-end" style={objectStyle.button}>$ { price }</div>
          </div>
          <br></br>
          <p className="card-text float-start">{ textBody }</p>
          <div href="#" className = { style.cardButton }><button onClick={ ()=>onDelete(id) }>Not interested</button></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardTour;

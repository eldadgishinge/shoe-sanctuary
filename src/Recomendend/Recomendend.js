import React from "react";
import "./Recomendend.css";
import Buttons from "../components/Buttons";

function Recomendend({ handleClick = { handleClick } }) {
  return (
    <>
      <div>
        <h2 className="Recommendend-title">Recomendend</h2>
        <div className="Recomendend-btns">
          <Buttons
            onClicHandler={handleClick}
            value=""
            className="btns"
            title="All Products"
          />
          <Buttons
            onClicHandler={handleClick}
            value="Nike"
            className="btns"
            title="Nike"
          />
          <Buttons
            onClicHandler={handleClick}
            value="Adidas"
            className="btns"
            title="Adidas"
          />
          <Buttons
            onClicHandler={handleClick}
            value="Vans"
            className="btns"
            title="Vans"
          />
          <Buttons
            onClicHandler={handleClick}
            value="Puma"
            className="btns"
            title="Puma"
          />
        </div>
      </div>
    </>
  );
}
export default Recomendend;

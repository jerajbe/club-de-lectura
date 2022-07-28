import React from "react";

export const Home = () => {
  return (
    <>
      <div className="header fondo">
        <div className="row1">
          <h1>Welcome to Lectur's Club</h1>
        </div>
        <div className="row2">
          <h2>Find your Book</h2>
          <div className="inputSearch">
            <input type="text" placeholder="Enter your Book Name" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="https://img.freepik.com/vector-premium/libreria-biblioteca-libreria-bestseller-estilo-dibujos-animados-ilustracion-vectorial_499431-682.jpg" />
        </div>
      </div>
      <div className="container"></div>
    </>
  );
};

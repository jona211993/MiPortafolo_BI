import React from "react";

function Card() {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <div className="poster">
            <img
              src="https://i.postimg.cc/gkTcGX3F/gesemp.png"
              alt="TiendaVirtual"
            />
          </div>
          <div className="details">
            <h1>Reporte de GESEMP</h1>
            <h2>2021 Diciembre</h2>
          
            <div className="tags">
              <span className="tag-web-tienda-gladicita"><a href="https://app.fabric.microsoft.com/links/MxibWiRPVU?ctid=12278756-9176-4d86-b727-c8f7caab3375&pbi_source=linkShare&bookmarkGuid=d12c13d5-a04e-4e8f-ba3f-551d82c1af11" target="_blank" rel="noopener noreferrer">Ver el Reporte</a></span>
                        
            </div>
            <p className="desc">
              Dale click en el boton y ve a Power BI en la nube para poder ver el reporte.
            </p>            
          </div>
        </div>
        <div className="card">
          <div className="poster">
            <img
              src="https://i.postimg.cc/Fs2NJtz7/reporte-cantdad-E.png"
              alt="TiendaVirtual"
            />
          </div>
          <div className="details">
            <h1>Reporte Cantidad de Entrega de Pedidos</h1>
            <h2>Empresa Olist -2022 Diciembre</h2>
          
            <div className="tags">
              <span className="tag-web-tienda-gladicita"><a href="https://app.fabric.microsoft.com/links/KRpWT7LbVr?ctid=12278756-9176-4d86-b727-c8f7caab3375&pbi_source=linkShare" target="_blank" rel="noopener noreferrer">Ver el Reporte</a></span>
                        
            </div>
            <p className="desc">
            Dale click en el boton y ve a Power BI en la nube para poder ver el reporte.
            </p>            
          </div>
        </div>
        <div className="card">
          <div className="poster">
            <img
              src="https://i.postimg.cc/T1NmcdF8/suscriptores.png"
              alt="TiendaVirtual"
            />
          </div>
          <div className="details">
            <h1>Reporte de Suscripciones</h1>
            <h2>Empresa Olist-2022 Diciembre</h2>
          
            <div className="tags">
              <span className="tag-web-tienda-gladicita"><a href="https://app.fabric.microsoft.com/links/QJHn4QzN3G?ctid=12278756-9176-4d86-b727-c8f7caab3375&pbi_source=linkShare" target="_blank" rel="noopener noreferrer">Ver el Reporte</a></span>
                        
            </div>
            <p className="desc">
            Dale click en el boton y ve a Power BI en la nube para poder ver el reporte.
            </p>            
          </div>
        </div>
        {/* Reclamos */}
        <div className="card">
          <div className="poster">
            <img
              src="https://i.postimg.cc/yNsJcC5V/reporte-reclamos-olist.png"
              alt="TiendaVirtual"
            />
          </div>
          <div className="details">
            <h1>Reporte de Reclamos</h1>
            <h2>Empresa Olist-2022 Diciembre</h2>
          
            <div className="tags">
              <span className="tag-web-tienda-gladicita"><a href="https://app.fabric.microsoft.com/links/Vswrp-japg?ctid=12278756-9176-4d86-b727-c8f7caab3375&pbi_source=linkShare" target="_blank" rel="noopener noreferrer">Ver el Reporte</a></span>
                        
            </div>
            <p className="desc">
            Dale click en el boton y ve a Power BI en la nube para poder ver el reporte.
            </p>            
          </div>
        </div>
        
       
        
      </div>
    </>
  );
}

export default Card;

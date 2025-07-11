import React, { useState } from "react";

export const Semaforo = ({ botones }) => {

    const [activo, setActivo] = useState(0);

    const timeaut = () => {
        setTimeout(() => {
            if (activo < botones.length - 1) {
                setActivo(activo + 1)
            } else { setActivo(0) }
        }, 1000);
    }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center gap-4">
            <div id="cuerpoSemaforo" className="d-flex flex-column justify-content-center align-items-center gap-4" >

                {botones.map((botones, index) => (
                    <button type="button"
                        className="btn rounded-circle fs-2"
                        key={index}
                        onClick={() => setActivo(activo === index ? null : index)}
                        style={{
                            backgroundColor: `${botones.color}`,
                            width: "70px",
                            height: "70px",
                            boxShadow: activo === index ? "0 0 15px 5px rgba(235, 228, 228, 0.5)" : "none"
                        }}
                    ></button>
                ))}
            </div>
            <button id="rotar" className="btn btn-primary" onClick={()=>setTimeout(() => {
                if (activo < botones.length - 1) {
                    setActivo(activo + 1)
                } else { setActivo(0) }
                  }, 100)}>Cambia de boton</button> 
        </div >
    )
}
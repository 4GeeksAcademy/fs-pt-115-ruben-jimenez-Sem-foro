
import React, { useState, useEffect } from "react";
//include images into your bundle
import { Semaforo } from "./Semaforo"
//create your first component

const Home = () => {
	const botones = [
		{ id: 1, color: "green" },
		{ id: 2, color: "yellow" },
		{ id: 3, color: "red" },
	];

	const botonesMorados = [...botones, { id: 4, color: "purple" }];

	const [botonesActivos, setBotonesActivos] = useState(true)
	const resultado = botonesActivos ? botones : botonesMorados;
// intento BIN BANBAN
  useEffect(() => {
        document.body.classList.remove("fondo-normal", "fondo-morado");
        document.body.classList.add(botonesActivos ? "fondo-normal" : "fondo-morado");
    }, [botonesActivos]);
// intento BIN BANBAN 
	return (
		<div className="d-flex flex-column justify-content-center align-items-center min-vh-100 gap-4">
			<Semaforo botones={resultado}></Semaforo>

			<button id="añade" className="btn " onClick={() => setBotonesActivos(!botonesActivos)}>Añade morado</button>
		</div>
	);
};

export default Home;
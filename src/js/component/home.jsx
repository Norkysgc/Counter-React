import React from "react";
 

import ReactDOM from "react-dom";
import { SecondsCounter } from "./secondsCounter.js";

export function Home() {
	return (
		<div className="container rounded fondo d-flex justify-content-center py-3">
			<SecondsCounter seconds={<i className="far fa-clock"></i>} />
			<SecondsCounter seconds="0" identificador="sexto-digito" />
			<SecondsCounter seconds="0" identificador="quinto-digito" />
			<SecondsCounter seconds="0" identificador="cuarto-digito" />
			<SecondsCounter seconds="0" identificador="tercer-digito" />
			<SecondsCounter seconds="0" identificador="segundo-digito" />
			<SecondsCounter seconds="0" identificador="primer-digito" />
		</div>
	);
}

let counter = 1;
let temporizador = function() {
	let aux = counter; //aux me va a ayudar a modificar el valor de counter sin afectarlo
	ReactDOM.render(
		(aux % 10).toString(), //Obtengo el valor del ultimo digito de counter
		document.getElementById("primer-digito")
	);
	aux = Math.floor(aux / 10); //Quito el ultimo numero del counter y lo guardo
	ReactDOM.render(
		(aux % 10).toString(), //Obtengo el valor del siguiente digito de counter y asi hasta el final
		document.getElementById("segundo-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("tercer-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("cuarto-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("quinto-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("sexto-digito")
	);
	counter++; //Incremento el valor del counter en cada iteracion
};

window.setInterval(temporizador, 1000); //Llamo a la funcion temporizador cada 1 segundo



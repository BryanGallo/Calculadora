var Calculadora = {
	/* Declaración de variable*/
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	controlen: 8,
	stop: 0,
	num1: 0,
	opcion: 0,
	auxnum: 0,
	auxestado: 0,
	auxresultado: 0,
	inicio: (
		function(){
			this.EventosClick();
		}
	),

	/*Animación botones*/
	animacionuno: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},

	/*Funcion restar*/
		menos: function(){
		    this.animacionuno("menos");
			this.num1 = Number(this.pantalla);
			this.pantalla = "",
			this.opcion = 2,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},

	/*Funcion multiplica*/
		por: function(){
		    this.animacionuno("por");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 3,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},

	/*Funcion dividir*/
		dividido: function(){
		    this.animacionuno("dividido");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 4,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},

	/*Función sumar*/
	mas: function(){
		    this.animacionuno("mas");
			this.num1 += Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 1,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},

	/*Función igual*/
	igual: function(){
		this.animacionuno("igual");
		switch(this.opcion){
			case 1:
					if(this.auxestado == 0){
						this.auxnum = Number(this.pantalla),
						this.pantalla = this.num1 + Number(this.pantalla),
						this.auxestado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)+this.auxnum;
					}
				break;
			case 2:
					if(this.auxestado == 0){
						this.auxnum = Number(this.pantalla),
						this.pantalla = this.num1 - Number(this.pantalla),
						this.auxestado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)-this.auxnum;
					}
				break;
			case 3:
					if(this.auxestado == 0){
						this.auxnum = Number(this.pantalla),
						this.pantalla = this.num1 * Number(this.pantalla),
						this.auxestado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)*this.auxnum;
					}
				break;
			case 4:
					if(this.auxestado == 0){
						this.auxnum = Number(this.pantalla),
						this.pantalla = this.num1 / Number(this.pantalla),
						this.auxestado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)/this.auxnum;
					}
				break;
			default:
				break;
		}
		this.viewdisplay();
	},

	/* Se asignan teclas */
	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.viewnum("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.viewnum("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.viewnum("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.viewnum("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.viewnum("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.viewnum("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.viewnum("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.viewnum("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.viewnum("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.viewnum("9")});
		document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
		document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
		document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
	},

	/* Función vision de calculadora*/
	viewnum: function(valor){
		this.animacionuno(valor);
		if(this.signo == 1 && this.stop == 0){
			this.controlen += 1,
			this.stop = 1;
		}
		if(this.decimal == 1  && this.stop == 0){
			this.controlen += 1,
			this.stop = 1;
		}
		if(this.pantalla.length < this.controlen){
			if(this.pantalla != "0"){
				this.pantalla += valor;
			}else if(valor != 0){
				this.pantalla = "",
				this.pantalla += valor;
			}
			this.viewdisplay();
		}
	},

	/* Función limpieza*/
	on: function(){
		this.animacionuno("on");
		this.pantalla = "0",
		this.decimal = 0,
		this.signo = 0,
		this.stop = 0,
		this.controlen = 8
		this.num1 = 0,
		this.auxestado = 0,
		this.auxnum = 0,
		this.opcion = 0,
		this.auxresultado = 0,
		this.viewdisplay();
	},

	/* Función estado negativo o positivo*/
	sign: function(){
		this.animacionuno("sign");
		if(this.pantalla != 0){
			if(this.signo == 0){
				this.pantalla = "-" + this.pantalla,
				this.signo = 1;
			}else{
				this.pantalla = this.pantalla.slice(1);
				this.signo = 0;
			}
		}
		this.viewdisplay();
	},

	/*Función decimal*/
	punto: function(){
		this.animacionuno("punto");
		if(this.decimal == 0){
			this.pantalla += ".";
		}
		this.decimal = 1,
		this.viewdisplay();
	},
	/*imprime en pantalla*/
	viewdisplay: function(){
		if(this.pantalla.toString().length > this.controlen){
			this.pantalla = this.pantalla.toString().substring(0,8);
		}
		document.getElementById("display").innerHTML = this.pantalla;
	}
}
Calculadora.inicio();

import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {
  Nombre:String;
  Localidad:String;
  Estudios:String;
  Email:String;
  Contrasena:String;

  constructor() { }

  ngOnInit() {
  }
  submit(){
    if (this.Nombre==null){
      alert("Introduzca un nombre");
    
  }else if(this.Localidad==null){
    alert("Introduzca una localidad");
  }else if(this.Estudios==null){
    alert("Introduzca los estudios");
  }else if(this.Email==null){
    alert("Introduzca tu email");
  }else if(this.Contrasena==null){
    alert("Introduzca la contraseña");
  }else{
    alert("Formulario enviado");
    this.Nombre="";
    this.Localidad="";
    this.Contrasena="";
    this.Estudios="";
    this.Email="";
  }
}
}

import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { CheckboxChangeEventDetail } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class DAM2Page implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  modulos=[
    {
      nombre:"Procesos y Servicios",
      icono:"https://img2.freepng.es/20180715/yrc/kisspng-computer-icons-business-process-customer-service-5b4aee04a5e3a3.9497486715316372526795.jpg",
      clase:"danger",
      chequear:false
    },
    {
      nombre:"Desarrolo de Interfaces",
      icono:"https://img2.freepng.es/20180424/eiq/kisspng-web-development-computer-icons-user-interface-web-ui-5adf0ac19d4883.7544620115245667216442.jpg",
      clase:"primary",
      chequear:true
    },
    {
      nombre:"Sistemas de Gestion Empresarial",
      icono:"https://cdn-icons-png.flaticon.com/512/2637/2637211.png",
      clase:"secondary",
      chequear:true
    },
    {
      nombre:"Acceso a Datos",
      icono:"https://img2.freepng.es/20180426/xdw/kisspng-computer-icons-database-data-access-microsoft-acce-5ae1d7a08987e5.6181182615247502405634.jpg",
      clase:"light",
      chequear:false
    },
    {
      nombre:"Programacion Multimedia",
      icono:"https://cdn-icons-png.flaticon.com/512/115/115756.png",
      clase:"dark",
      chequear:false
    },
    {
      nombre:"Empresas",
      icono:"https://cdn-icons-png.flaticon.com/512/3891/3891710.png",
      clase:"success",
      chequear:true
    }
  ]
}

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class DAM1Page implements OnInit {
  Prog:boolean=false;
  Lenguaje:boolean=false;
  BDD:boolean=false;
  FOL:boolean=false;
  SI:boolean=false;
  ING:boolean=false;
  

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    
  }
  
  async programacion() {
    const toast = await this.toastController.create({
      message:"Has elegido programacion",
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }
    async lenguaje() {
      const toast = await this.toastController.create({
        message:"Has elegido Lenguaje de Marcas",
        duration: 1500,
        position: 'top'
      });
      await toast.present();
    }
      async base() {
        const toast = await this.toastController.create({
          message:"Has elegido Base de Datos",
          duration: 1500,
          position: 'top'
        });
        await toast.present();
      }
  async fol() {
    const toast = await this.toastController.create({
      message:"Has elegido Formacion y Orientacion Laboral",
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }
    async sistemas() {
      const toast = await this.toastController.create({
        message:"Has elegido Sistemas Informaticos",
        duration: 1500,
        position: 'top'
      });
    await toast.present();
  }

  async ingles() {
    const toast = await this.toastController.create({
      message:"Has elegido Ingles",
      duration: 1500,
      position: 'top'
    });
  await toast.present();
}
}


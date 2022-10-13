import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {
  @Input() titulo: string;
  constructor(private toastController: ToastController) { }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'top'
    });
    
    await toast.present();
  }
  ngOnInit() {}

}

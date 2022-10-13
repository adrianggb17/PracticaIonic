import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fct',
  templateUrl: './fct.page.html',
  styleUrls: ['./fct.page.scss'],
})
export class FCTPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

}

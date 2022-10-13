import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
        {
          path: 'Dam1',
          loadChildren: () => import('../dam1/dam1.module').then( m => m.DAM1PageModule)
        }
      ,
      {
        path: 'Dam2',
        loadChildren: () => import('../dam2/dam2.module').then( m => m.DAM2PageModule)
      },
      {
        path: 'Fct',
        loadChildren: () => import('../fct/fct.module').then( m => m.FCTPageModule)
      }
      
    ]
  }
 
    ];
  





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

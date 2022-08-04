import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/Services-Admin/services-auth/auth.service';

import { OrderStatisticsComponent } from './order-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: OrderStatisticsComponent, canActivate: [AuthService],
    data: {
      title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderStatisticsRoutingModule {
}

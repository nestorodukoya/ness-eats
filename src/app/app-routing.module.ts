import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReservationComponent } from './pages/new-reservation/new-reservation.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:NewReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

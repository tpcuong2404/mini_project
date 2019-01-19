import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPrimengComponent } from './myComponent/input-primeng/input-primeng.component';
const routes: Routes = [
  {path: "input/first" , component: InputPrimengComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[
    InputPrimengComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

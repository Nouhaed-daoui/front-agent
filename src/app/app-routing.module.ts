import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  // {
  //   path : "add-balance",
  //   component : AddBalanceComponent
  // },
  // {
  //   path : "",
  //   component : CoursesComponent
  // },
  // {
  //   path : "courses/:id",
  //   component : CoursesComponent
  // },
  // {
  //   path : "panel",
  //   component : PanelComponent
  // },
  // {
  //   path : "**",
  //   component : NotFoundComponent
  // },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

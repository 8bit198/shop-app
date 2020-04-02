import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './shop-page/items-list/items-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: ItemsListComponent},
  // {path: 'card', component: ItemsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

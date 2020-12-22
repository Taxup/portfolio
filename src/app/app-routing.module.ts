import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AnixartComponent} from "./components/applications/anixart/anixart.component";
import {IcqComponent} from "./components/applications/icq/icq.component";
import {MiFitComponent} from "./components/applications/mi-fit/mi-fit.component";
import {GithubComponent} from "./components/applications/github/github.component";
import {LeaveFormGuard} from "./guard/leave-form.guard";
import {WeatherComponent} from "./components/applications/weather/weather.component";

const routes: Routes = [
  {path: '', component: HomeComponent, canDeactivate: [LeaveFormGuard]},
  {path: 'anixart', component: AnixartComponent},
  {path: 'icq', component: IcqComponent},
  {path: 'mi-fit', component: MiFitComponent},
  {path: 'github', component: GithubComponent},
  {path: 'weather', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

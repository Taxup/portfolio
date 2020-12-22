import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './components/home/home.component';
import {ContactModalComponent} from './components/common/contact-modal/contact-modal.component';
import {LoaderComponent} from './components/common/loader/loader.component';
import {ApplicationsComponent} from './components/applications/applications.component';
import {NavigationComponent} from './components/common/navigation/navigation.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {AnixartComponent} from './components/applications/anixart/anixart.component';
import {IcqComponent} from './components/applications/icq/icq.component';
import {MiFitComponent} from './components/applications/mi-fit/mi-fit.component';
import {GithubComponent} from './components/applications/github/github.component';
import {SearchFilterPipe} from "./pipe/my-filter.pipe";
import { FormComponent } from './components/common/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WeatherComponent } from './components/applications/weather/weather.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    ContactModalComponent, LoaderComponent,
    NavigationComponent, FooterComponent,
    ApplicationsComponent,
    AnixartComponent, IcqComponent, MiFitComponent, GithubComponent,
    SearchFilterPipe,
    FormComponent,
    WeatherComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

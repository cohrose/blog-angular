import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./components/home/home.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { IosSearchComponent } from './components/cards/ios-search/ios-search.component';

const MatModules = [
  FlexLayoutModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [AppComponent, HomeComponent, IosSearchComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, RouterModule, ...MatModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

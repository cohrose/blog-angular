import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { HomeComponent } from './components/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IosSearchComponent } from './components/cards/ios-search/ios-search.component';
import { GridComponent } from './components/cards/grid/grid.component';
import { MediaQueriesComponent } from './components/cards/media-queries/media-queries.component';
import { CenteringComponent } from './components/cards/centering/centering.component';
import { ZipComponent } from './components/cards/zip/zip.component';
import { GridDirectionComponent } from './components/cards/grid-direction/grid-direction.component';

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
  declarations: [AppComponent, HomeComponent, IosSearchComponent, GridComponent, MediaQueriesComponent, CenteringComponent, ZipComponent, GridDirectionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ...MatModules,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
        themePath: 'assets/github-dark.css',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ParallaxTitleComponent } from './parallax-title/parallax-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatGridListModule
} from "@angular/material";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';
import { CardComponent } from './common/card/card.component';
import { HjohnsoniiComponent } from './hjohnsonii/hjohnsonii.component';
import { CardgameAIComponent } from './cardgame-ai/cardgame-ai.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ParallaxTitleComponent,
    ProjectsComponent,
    AboutComponent,
    ResearchComponent,
    CardComponent,
    HjohnsoniiComponent,
    CardgameAIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

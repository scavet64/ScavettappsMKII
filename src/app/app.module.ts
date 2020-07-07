import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ParallaxTitleComponent } from './homepage/parallax-title/parallax-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ProjectsComponent } from './homepage/projects/projects.component';
import { AboutComponent } from './homepage/about/about.component';
import { ResearchComponent } from './homepage/research/research.component';
import { CardComponent } from './common/card/card.component';
import { HjohnsoniiComponent } from './hjohnsonii/hjohnsonii.component';
import { CardgameAIComponent } from './cardgame-ai/cardgame-ai.component';
import { MenuModalComponent } from './menu-modal/menu-modal.component';
import { FooterComponent } from './footer/footer.component';

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
    CardgameAIComponent,
    MenuModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    MenuModalComponent
  ]
})
export class AppModule { }

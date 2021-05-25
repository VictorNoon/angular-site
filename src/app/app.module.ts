//Misc Imports

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


//App Mat Includes
import { MatRippleModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

//External Modules PrimeNG


//Personnal Modules
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MailToFormComponent } from './mail-to-form/mail-to-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeViewComponent } from './home-view/home-view.component';
import { MailToViewComponent } from './mail-to-view/mail-to-view.component';
import { CvViewComponent } from './cv-view/cv-view.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { TopBarLinkCardComponent } from './top-bar-link-card/top-bar-link-card.component';
import { ConsentSnackBarComponent } from './consent-snack-bar/consent-snack-bar.component';


//Services Imports
import { LanguageService } from './services/language.service';
import { UserAnalyticsService } from './services/user.analytics.service';
import { CodeFourOFourViewComponent } from './code-four-o-four-view/code-four-o-four-view.component';
import { CodeFourOEightViewComponent } from './code-four-o-eight-view/code-four-o-eight-view.component';
import { CodeFourOThreeViewComponent } from './code-four-o-three-view/code-four-o-three-view.component';
import { CodeFourOEighteenViewComponent } from './code-four-o-eighteen-view/code-four-o-eighteen-view.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarLinkCardComponent } from './side-bar-link-card/side-bar-link-card.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimeLineEntryComponent } from './time-line-entry/time-line-entry.component';
import { SkillDisplayComponent } from './skill-display/skill-display.component';
import { SkillDisplayCardComponent } from './skill-display-card/skill-display-card.component';

const appRoutes : Routes = [
  { path: 'cv', component: CvViewComponent},
  { path: 'portfolio', component: PortfolioViewComponent},
  { path: 'mail-to', component: MailToViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'not-found', component:CodeFourOFourViewComponent },

  { path: '**', redirectTo:'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MailToFormComponent,
    HomeViewComponent,
    MailToViewComponent,
    CvViewComponent,
    PortfolioViewComponent,
    TopBarLinkCardComponent,
    ConsentSnackBarComponent,
    CodeFourOFourViewComponent,
    CodeFourOEightViewComponent,
    CodeFourOThreeViewComponent,
    CodeFourOEighteenViewComponent,
    FooterComponent,
    SideBarComponent,
    SideBarLinkCardComponent,
    TimeLineComponent,
    TimeLineEntryComponent,
    SkillDisplayComponent,
    SkillDisplayCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatRippleModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    LanguageService,
    UserAnalyticsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

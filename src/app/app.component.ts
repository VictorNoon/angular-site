import { ConsentSnackBarComponent } from './consent-snack-bar/consent-snack-bar.component';
import { UserAnalyticsService, UserAnalyticsServiceResponse } from './services/user.analytics.service';
import { LanguageService } from './services/language.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import { HostListener, Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  languageServiceSubscription : Subscription;
  siteLanguage : string | undefined;

  minWidthForMobile = 800;
  mobile : boolean = false;

  UserAnalyticsServiceSubscription : Subscription;
  sendWarnUserSnackBar = true;

  constructor(private languageService: LanguageService,
              private userAnalitycsService : UserAnalyticsService,
              private _snackBar: MatSnackBar) {
    // Subscription to language service
    this.languageServiceSubscription = this.languageService.languageServiceSubject.subscribe(
      (language: string[]) => {
        this.siteLanguage = language[0];
        console.log("subscription:" + language);
      }
    );
    this.languageService.emitlanguageServiceSubject();

    // Subscription to UserAnalyticsService
    this.UserAnalyticsServiceSubscription = this.userAnalitycsService.userAnalitycsServiceSubject.subscribe(
      (userAnalyticsResponse :UserAnalyticsServiceResponse) => {
        if (userAnalyticsResponse.agreeToBeIdentifed !== undefined ) {
          this.sendWarnUserSnackBar = false;
        }
      }
    )
    this.userAnalitycsService.emitUserAnalyticsService();
  }

  openSnackBar() {
      if (this.sendWarnUserSnackBar) {
        this._snackBar.openFromComponent(ConsentSnackBarComponent);
        this.userAnalitycsService.sendSnackBarRef(this._snackBar);
      }
  }

  ngOnInit() {
    /*this.openSnackBar();
    if (window.innerWidth <= this.minWidthForMobile) { // 768px portrait
      this.mobile = true;
    }*/
  }

  onChangeLanguage() {
    this.languageService.switchToNextLanguage();
  }

  @HostListener('window:resize') CheckForSideBar() {
    if (window.innerWidth <= this.minWidthForMobile) { // 768px portrait
      this.mobile = true;
    }
    else {
      this.mobile = false;
    }
  }
  
}

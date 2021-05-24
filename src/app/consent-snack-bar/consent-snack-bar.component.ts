import { UserAnalyticsService } from '../services/user.analytics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consent-snack-bar',
  templateUrl: './consent-snack-bar.component.html',
  styleUrls: ['./consent-snack-bar.component.scss']
})
export class ConsentSnackBarComponent implements OnInit {

  constructor(private userAnalitycsService: UserAnalyticsService) { }

  ngOnInit(): void {
  }

  onAgree() {
    console.log("AgreementStatus Updated");
    this.userAnalitycsService.sendUserAgreementResponse(true);
  }

  onDisagree() {
    console.log("AgreementStatus Updated");
    this.userAnalitycsService.sendUserAgreementResponse(false);
  }

}

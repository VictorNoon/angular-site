import { CookieService } from 'ngx-cookie-service';
import { Injectable, resolveForwardRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

export class UserAnalyticsServiceResponse {
    agreeToBeIdentifed :boolean | undefined;
    isIdentified :boolean;
    userId: number;
    
    constructor(agreeToBeIdentifed :boolean | undefined,
                isIdentified :boolean,
                userId :number) {
        this.agreeToBeIdentifed = agreeToBeIdentifed;
        this.isIdentified = isIdentified;
        this.userId = userId;
    }
}

@Injectable()
export class UserAnalyticsService {

    userAnalitycsServiceSubject = new Subject<UserAnalyticsServiceResponse>();

    agreeToBeIdentifed : boolean | undefined = undefined;
    isIdentified = false;
    userId: number = -1;

    itemsGet: any;
    itemsPost: any;

    snackBar :MatSnackBar | undefined;

    constructor(private httpClient : HttpClient, private cookieService:CookieService){
        this.checkForCookies();
    }

    checkForCookies() {
        if (this.cookieService.check("identificationAgreement") === false) {
            this.agreeToBeIdentifed = undefined;
            console.log("Identification Agreement=" + this.agreeToBeIdentifed)
        }
        else if (this.cookieService.get("identificationAgreement") == "true"){
            this.agreeToBeIdentifed = true;
            console.log("Identification Agreement=" + this.agreeToBeIdentifed)
        }
        else {
            this.agreeToBeIdentifed = false;
            console.log("Identification Agreement=" + this.agreeToBeIdentifed)
        }
        
        if (this.cookieService.check("userID")) {
            this.userId = +this.cookieService.get("userID");
            console.log("Uid=" + this.userId)
        } 
        else {
            this.userId = -1;
        }

        this.cookieService.set('isIdentified', 'false');
        if (this.agreeToBeIdentifed && this.cookieService.check("userID")) {
            this.identifieUserFromServer()
        } 
        else if (!this.cookieService.check("userID")) {
            this.saveUserToServer();
        }
    }

    updateIdentificationCookies(response :any) {
        console.log('Identify !!');
        //console.log("response is:" + response);

        if (typeof(response) === "boolean") {
            this.isIdentified = false;
        }
        if (response[0].token == this.userId) {
            this.isIdentified = true;
            this.cookieService.set('isIdentified', 'true');
        }
    }

    emitUserAnalyticsService() {
        var response = new UserAnalyticsServiceResponse(this.agreeToBeIdentifed,
                                                 this.isIdentified,
                                                 this.userId);
        this.userAnalitycsServiceSubject.next(response);
    }

    saveUserToServer() {
        this.httpClient.get('http://localhost:3000/identifie' )
            .toPromise().then(
                (data) =>  {
                    console.log("Saved !!");
                    console.log(data);
                    this.itemsGet = data;
                    if (data !== false) {
                        this.setCookies()
                    }
                    //this.cookieService.set('userId');
                },
                (err) => {
                    console.log("Failled to access save user!! ");
                    console.log(err);
                }
            );
    }

    identifieUserFromServer(){
        var dataSent = new HttpParams().set('token', this.userId.toString())
        this.httpClient.post('http://localhost:3000/identifie', dataSent )
        .toPromise().then(
            (data) =>  {
                console.log("Identified !!");
                console.log(data);
                this.itemsPost = data;
                this.updateIdentificationCookies(data)
            },
            (err) => {
                console.log("Failled to access identifie!!");
                console.log(err);
            }
        );
    }
    

    setCookies() {
        this.userId = this.itemsGet["token"];
        console.log("Uid=" + this.userId);
        this.cookieService.set('isIdentified', 'true');
        this.cookieService.set('userID', this.userId.toString());  
    }

    sendSnackBarRef(snackBar :MatSnackBar) {
        this.snackBar = snackBar;
    }

    deleteUserFromServer() {
        //Clear DB from infos
        this.isIdentified = false;
    }

    sendUserAgreementResponse(response :boolean) {
        //Get Agreement from User;
        this.agreeToBeIdentifed = response;
        if (this.snackBar != undefined)
            this.snackBar.dismiss();
        
        
        if (this.agreeToBeIdentifed) {
            this.saveUserToServer();
            this.cookieService.set('identificationAgreement', 'true')
        }
        else {
            this.cookieService.set('identificationAgreement', 'false')
        }
            
        console.log("AgreementStatus Updated to:" + this.agreeToBeIdentifed)

    }

}
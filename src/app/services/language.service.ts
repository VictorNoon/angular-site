import { Subject } from "rxjs";

export class LanguageService {

    languageServiceSubject = new Subject<string[]>();

    private siteLanguage :string = "fr";
    private siteLanguages :string[] = ["fr", "en"];

    emitlanguageServiceSubject() {
        let languageServiceResArray: string[] = []; 
        languageServiceResArray.push(this.siteLanguage)
        languageServiceResArray.push(this.getNextLanguage())
        this.languageServiceSubject.next(languageServiceResArray);
    }

    getNextLanguage() :string {
        var nextLanguageIndex : number;

        nextLanguageIndex = this.siteLanguages.indexOf(this.siteLanguage) + 1;
        if (nextLanguageIndex >= this.siteLanguages.length)
            nextLanguageIndex = 0;        

        return this.siteLanguages[nextLanguageIndex];
    }

    switchToNextLanguage() {      
        this.siteLanguage = this.getNextLanguage();
        this.emitlanguageServiceSubject();
    }
}
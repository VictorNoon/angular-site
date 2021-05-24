import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

enum Language {
  fr = "fr",
  en = "en"
};

@Component({
  selector: 'app-mail-to-form',
  templateUrl: './mail-to-form.component.html',
  styleUrls: ['./mail-to-form.component.scss']
})
export class MailToFormComponent implements OnInit {

  @Input() siteLanguage :string | undefined;
  language :Language = Language.en;

  submitButtonDisabled :boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (this.siteLanguage === undefined ) {
      this.language = Language.fr;
    }
    if (Language.fr == this.siteLanguage){
      this.language = Language.fr
    } else if (Language.en == this.siteLanguage) {
      this.language = Language.en
    }
    else {
      console.log("Error On component Init: " + this.siteLanguage + "is not recognised as supported Language"); 
      this.language = Language.fr;
    }
  }

  getMailFormTitle() :string {
    if (this.language == Language.fr)
    {
      return "Me Contacter"
    }
    else if (this.language == Language.en) {
      return "Contact Me"
    }
    console.log("Language detection Error assumed French...")
    return ""
  }

  getButtonCss() : string {
    return "submit"
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    
    const name = form.value['name'];
    const email = form.value['e-mail'];
    const phone = form.value['phone'];
    const topic = form.value['topic'];
    const mailText = form.value['mail-text'];

    this.memoriseMailRequest(form);

    this.sendMail(topic, mailText);
  }

  memoriseMailRequest(form: NgForm) {

  }

  sendMail(subject :string, message:string)
  {
      document.location.href = "mailto:victor.lawrence.noon@gmail.com?subject="
          + encodeURIComponent(subject)
          + "&body=" + encodeURIComponent(message);
  }


}

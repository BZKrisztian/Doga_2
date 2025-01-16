import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage(lang: string){
    this.translate.use(lang)
  }




}


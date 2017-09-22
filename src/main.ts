import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

if (window['cordova']) {
  console.log('Running with cordova');
  document.addEventListener('deviceready', () => {
      bootstrap();
  }, false);

  document.addEventListener('backbutton', () => {
    window['angularComponentRef'].zone.run(() => {
      window['angularComponentRef'].component.goBack();
    })
  }, false);

} else {
  bootstrap();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

export function refresh(){
  window['HomeComponentRef'].zone.run(()=>{
    window['HomeComponentRef'].component.loadData();
  })
}

export function showLoader(){
  window['HomeComponentRef'].zone.run(()=>{
    window['HomeComponentRef'].component.showLoad();
  })
}

export function hideLoader(){
  window['HomeComponentRef'].zone.run(()=>{
    window['HomeComponentRef'].component.hideLoad();
  })
}



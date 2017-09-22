import {OnInit, Component, NgZone} from '@angular/core';
import {Contact} from '../model/contact.model';
import {AppComponent} from '../app.component';
import 'rxjs/add/operator/filter';
import {DomSanitizer} from "@angular/platform-browser";

declare var addressBookSync;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactList: Contact[] = [];
  filteredContacts: Contact[] = [];
  countryContacts: Contact[] = [];
  public searchTerm: any;
  country = 'Nepal';
  showNav: boolean = true;
  showLoader: boolean = true;
  showContacts:boolean = true;

  constructor(private appComponent: AppComponent, private zone: NgZone, private sanitizer: DomSanitizer) {
    window['HomeComponentRef'] = {component: this, zone: this.zone};
    this.appComponent.showSync = true;
  }

  ngOnInit() {
    this.contactList = JSON.parse(localStorage.getItem('contacts'));
    if (this.contactList === null) {
      this.showLoad();
    } else {
      this.showLoad();
      this.loadData();
    }
  }

  loadData() {
    if (JSON.parse(localStorage.getItem('userRole')) === 'owner' || JSON.parse(localStorage.getItem('userRole')) === 'writer'){
      this.appComponent.showDownload = true;
    } else {
      this.appComponent.showDownload = false;
    }
    this.contactList = JSON.parse(localStorage.getItem('contacts'));
    if(this.contactList !== null){
      this.filteredContacts = this.contactList.filter(contact => contact.country == this.country);
      this.countryContacts = this.filteredContacts;
      this.sort();
      this.hideLoad();
      if(this.filteredContacts.length === 0) {
        this.hideContact();
      }
      else{
        this.showContact();
      }
    }
    else{
      this.hideLoad();
      this.hideContact();
    }
    this.clearInput();
  }

  search() {
    const term = this.searchTerm;
    this.filteredContacts = this.countryContacts.filter(function (tag) {
      return tag.firstName.toLowerCase().indexOf(term.toLowerCase()) >= 0
    });
    this.sort();
    if (this.filteredContacts.length > 0){
      this.showContact();
    } else {
      this.hideContact();
    }
  }

  sort() {
    this.filteredContacts.sort(function (contact1, contact2) {
      if (contact1.firstName.toLowerCase() < contact2.firstName.toLowerCase()) {
        return -1;
      }
      else if (contact2.firstName.toLowerCase() < contact1.firstName.toLowerCase()) {
        return 1;
      }
      else {
        if (contact1.middleName.toLowerCase() < contact2.middleName.toLowerCase()) {
          return -1;
        }
        else if (contact2.middleName.toLowerCase() < contact1.middleName.toLowerCase()) {
          return 1;
        }
        else {
          if (contact1.lastName.toLowerCase() < contact2.lastName.toLowerCase()) {
            return -1;
          }
          else if (contact2.lastName.toLowerCase() < contact1.lastName.toLowerCase()) {
            return 1;
          }
          else {
            return 0;
          }
        }
      }
    });
    this.hideLoad();
  }

  setCountry(country){
    this.country = country;
    this.loadData();
    const display = document.getElementById('displayDiv');
    display.scrollTop = 0;
  }

  showLoad() {
    this.showLoader = true;
  }

  hideLoad() {
    this.showLoader = false;
  }

  showContact(){
    this.showContacts = true;
  }

  hideContact(){
    this.showContacts = false;
  }

  clearInput(){
    this.searchTerm = '';
    document.getElementById('searchTerm').blur();
  }
  sanitize(url:string){
    //return this.sanitizer.bypassSecurityTrustHtml(url);
    console.log('reached the home component');
    return this.sanitizer.bypassSecurityTrustUrl(url);
    
    //return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

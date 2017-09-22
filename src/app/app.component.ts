import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {ContactsService} from './services/contacts.service';
import {Contact} from './model/contact.model';
import {APP_BASE_HREF, Location} from '@angular/common';
import {Router} from '@angular/router';
import {Response} from './model/response.format';
import {hideLoader, refresh, showLoader} from '../main';
import {TranslateService} from '@ngx-translate/core';

declare var addressBookSync;
declare var swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private userRole: any;
  private responseContacts: Response;
  private contactList: Contact[] = [];
  public showSync: boolean = true;
  public showDownload: boolean;
  public language: any = 'en';

  constructor(private contactsService: ContactsService, private location: Location,
              private router: Router, private zone: NgZone,
              private translate: TranslateService,
              @Inject(APP_BASE_HREF) private baseHref: string) {
    this.translate.setDefaultLang('en');
    window['angularComponentRef'] = {component: this, zone: this.zone};
  }

  ngOnInit() {
    this.router.navigate(['/Home']);
    if (!(JSON.parse(localStorage.getItem('contacts'))) || !(JSON.parse(localStorage.getItem('userRole')))) {
      this.loadData();
    }
    else {
      if (JSON.parse(localStorage.getItem('userRole')) === 'owner' || JSON.parse(localStorage.getItem('userRole')) === 'writer') {
        this.showDownload = true;
      }
      else {
        this.showDownload = false;
      }
      this.router.navigate(['/Home']);
    }
  }

  loadData() {
    this.contactsService.getAll().then(
      response => this.onSuccess(response),
      error => this.onError(error)
    );
  }

  onSuccess(res) {
    this.responseContacts = res;
    if (!(res.status === 'error')) {
      if (this.responseContacts.driveDetails.fileContent.contacts) {
        localStorage.clear();
        this.contactList = this.responseContacts.driveDetails.fileContent.contacts;
        this.userRole = this.responseContacts.driveDetails.userRole;
        localStorage.setItem('contacts', JSON.stringify(this.contactList));
        localStorage.setItem('userRole', JSON.stringify(this.userRole));
      }
      else {
        swal({
          title: 'Error',
          text: res.message,
          showCancelButton: false,
          confirmButtonColor: '#a7a7a7'
        });
        hideLoader();
      }
    }
    else {
      swal({
        title: 'Error',
        text: res.message,
        showCancelButton: false,
        confirmButtonColor: '#a7a7a7'
      });
      hideLoader();
    }
    refresh();
  }

  onError(err) {
    swal({
      title: 'Error',
      text: err.message,
      showCancelButton: false,
      confirmButtonColor: '#a7a7a7'
    });
    hideLoader();
    refresh();
  }

  downloadFile() {
    this.contactsService.dumpContacts().then(
      response => this.onSuccessFileWrite(),
      error => this.onErrorFileWrite(error)
    );
  }

  goBack() {
    if (this.location.path(false) === this.baseHref || this.location.path(false) === '/Home') {
      const that = this;
      swal({
        title: 'Exit',
        text: 'Do you want to exit from application?',
        showCancelButton: true,
        confirmButtonColor: '#a7a7a7',
        cancelButtonColor: '#a7a7a7',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',

      }).then(
        function () {
          addressBookSync.exit();
        },
        function () {
        }
      );
    } else {
      this.location.back();
    }
  }

  syncContacts() {
    const that = this;
    swal({
      title: 'Sync',
      text: 'Do you want to sync data from server?',
      showCancelButton: true,
      confirmButtonColor: '#a7a7a7',
      cancelButtonColor: '#a7a7a7',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes'
    }).then(
      function () {
        showLoader();
        that.loadData();
      },
      function () {
      }
    );
  }


  private onSuccessFileWrite() {
    swal({
      title: 'Success',
      text: 'Contacts successfully exported to device.',
      confirmButtonColor: '#a7a7a7',
    })
  }

  private onErrorFileWrite(err) {
    swal({
      title: 'Error',
      text: err.message,
      confirmButtonColor: '#a7a7a7',
    })
  }

  selectLanguage() {
    let that = this;
    swal({
      title: 'Select Language',
      input: 'radio',
      inputOptions: {'en': 'English', 'du': 'Dutch'},
      inputValue: that.language,
      inputValidator: function (result) {
        return new Promise(function (resolve, reject) {
          if (result) {
            resolve()
          } else {
            reject('You need to select something!')
          }
        })
      },
      showCancelButton: true,
      confirmButtonColor: '#a7a7a7',
      cancelButtonColor: '#a7a7a7',
      cancelButtonText: 'Not now',
      confirmButtonText: 'Ok'
    }).then(
      function (value) {
        that.language = value;
        that.switchLanguage();
      },
      function () {
      }
    );
  }

  switchLanguage(){
    this.translate.use(this.language);
  }
}


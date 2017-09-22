import {Component, OnInit} from "@angular/core";
import {Contact} from "../model/contact.model";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {ContactsService} from "../services/contacts.service";
import {DomSanitizer} from "@angular/platform-browser";
import {AppComponent} from "../app.component";
declare var swal;


@Component({
  selector: 'update-details',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  contact: Contact;
  id: any;
  contactList: any;
  index: number;

  constructor(private location: Location, private route: ActivatedRoute, private contactsService:ContactsService, private appComponent: AppComponent, private sanitizer: DomSanitizer) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = (params['id']);
    });
    this.loadData();
  }

  loadData() {
    this.contactList = JSON.parse(localStorage.getItem('contacts'));
    this.filter();
  }

  filter() {
    let contactId = this.id;
    this.contact = this.contactList.filter(function (tag) {
      return tag.id == contactId;
    })["0"];
    this.index = this.contactList.indexOf(this.contact);
  }

  onSave() {
    this.contactList.splice(this.index, 1, this.contact);
    localStorage.removeItem('contacts');
    localStorage.setItem('contacts', JSON.stringify(this.contactList));
    this.location.back();
  }

  takePicture() {
    this.contactsService.captureImage().then(
      response=>this.onSuccess(response),
      error=>this.onError(error)
    );
  }

  onSuccess(res){
    this.contact.image=res;
  }

  onError(err){
    swal({
      title: '',
      text: err,
      confirmButtonColor: '#a7a7a7',
    })
  }

  deletePicture() {
    var that = this;
    swal({
      title: 'Remove',
      text: "Are you sure you want to remove the picture?",
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#a7a7a7',
      cancelButtonColor: '#a7a7a7'
    }).then(
      function () {
        that.contact.image = "";
      },
      function () {

      }
    );
  }

  sanitize(url:string){
    //return this.sanitizer.bypassSecurityTrustHtml(url);
    console.log('reached here ' + url);
    return this.sanitizer.bypassSecurityTrustUrl(url);
    
    //return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

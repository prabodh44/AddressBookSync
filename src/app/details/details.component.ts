import {Component, OnInit} from "@angular/core";
import {Contact} from "../model/contact.model";
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/filter";
import {AppComponent} from "../app.component";
import {DomSanitizer} from "@angular/platform-browser";

declare var addressBookSync;

@Component({
  selector: 'contact-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  contact:Contact;
  contactList:Contact[]=[];
  id:any;
  userRole:any;
  showEdit:boolean;

  

  constructor(private route:ActivatedRoute, private appComponent:AppComponent, private sanitizer: DomSanitizer){
    this.appComponent.showSync=false;
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id=(params['id']);
    });
    this.loadData();
  }

  loadData(){
    this.contactList=JSON.parse(localStorage.getItem('contacts'));
    this.userRole=JSON.parse(localStorage.getItem('userRole'));
    this.onSuccess();
  }

  onSuccess(){
    if(this.userRole==="owner"||this.userRole==="writer"){
      this.showEdit=true;
    }
    else{
      this.showEdit=false;
    }
    let contactId=this.id;
    this.contact = this.contactList.filter(function (tag) {
      return tag.id==contactId;
    })["0"];
  }

  sanitize(url:string){
    //return this.sanitizer.bypassSecurityTrustHtml(url);
    console.log('reached here ' + url);
    return this.sanitizer.bypassSecurityTrustUrl(url);
    
    //return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

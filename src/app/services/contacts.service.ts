import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

declare var addressBookSync;
declare var navigator;
declare var Camera;
declare var requestFileSystem;
declare var LocalFileSystem;
declare var window;

@Injectable()
export class ContactsService {
  constructor(private http: Http) {

  }

  public getJSON(jsonFile): Observable<any> {
    return this.http.get(jsonFile)
      .map((res: any) => res.json())
      .catch((error: any) => error);

  }

  getAll() {
    return new Promise((response, error) => {
      if (typeof addressBookSync !== 'undefined') {
        addressBookSync.sync(
          '',
          function (data) {
            response(data);
          },
          function (err) {
            error(JSON.parse(err));
          });
      } else {
        console.log('Local data');
        this.getJSON('assets/data/data.json').subscribe(data => response(data), err => error(err));
        // this.getJSON('assets/data/ProcitAddressBookData.json').subscribe(data => response(data), err => error(err));
      }
    });
  }

  captureImage() {
    return new Promise((response, error) => {
        navigator.camera.getPicture(
          function (data) {
            response(data);
          },
          function (err) {
            error(err);
          },
          {
            saveToPhotoAlbum: true,
            correctOrientation: true,
            targetWidth: 100,
            targetHeight: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA
          }
        );
      }
    );
  }

  dumpContacts() {
    return new Promise((resolve, reject) => {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
          function (fs) {
            console.log('file system open: ' + fs.name);
            fs.root.getFile('ProcitAddressBook.json', {create: true}, function (fileEntry) {
              fileEntry.createWriter(function (fileWriter) {
                  fileWriter.onwriteend = function () {
                    resolve('Write completed.');
                  };
                  fileWriter.onerror = function (e) {
                    reject(e);
                  };
                  let content = JSON.parse('{"contacts":'+localStorage.getItem('contacts')+'}');
                  fileWriter.write(content);
                },
                function (error) {
                  reject(error);
                }
              );
            });
          },
          function (fileError) {
            reject(fileError);
          }
        );
      }
    );
  }

}

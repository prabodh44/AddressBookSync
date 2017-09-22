import {Contact} from './contact.model';
/**
 * Created by ith on 7/27/2017.
 */
export class Response {
  public status: string;
  public driveDetails: DriveDetails;
}

class DriveDetails {
  public fileId: string;
  public userRole: string;
  public fileContent: FileContent;
}

class FileContent {
  public contacts: Contact[];
}

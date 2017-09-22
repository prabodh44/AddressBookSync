export class Contact{
  public id?:number;
  public firstName?: string;
  public middleName?: string;
  public lastName?: string;
  public address?: string;
  public country?: string;
  public projectGroup?: string;
  public officialEmail?: string;
  public personalEmail?: string;
  public mobilePhoneA?: string;
  public mobilePhoneB?: string;
  public homePhoneA?: string;
  public homePhoneB?: string;
  public emergencyPhoneA?: string;
  public emergencyPhoneB?: string;
  public bloodGroup?: string;
  public birthDay?: string;
  public image?: string;
  public dateCreated?: string;
  public dateModified?: string;
  public dateDeleted?: string;


  constructor(id?: number, firstName?: string, middleName?: string, lastName?: string, address?: string, country?: string,
              projectGroup?: string, officialEmail?: string, personalEmail?: string, mobilePhoneA?: string,
              mobilePhoneB?: string, homePhoneA?: string, homePhoneB?: string, emergencyPhoneA?: string, emergencyPhoneB?: string,
              bloodGroup?: string, birthDay?: string, image?: string, dateCreated?: string, dateModified?: string, dateDeleted?: string) {
    this.id = id?id:null;
    this.firstName = firstName?firstName:null;
    this.middleName = middleName?middleName:null;
    this.lastName = lastName?lastName:null;
    this.address = address?address:null;
    this.country = country?country:null;
    this.projectGroup = projectGroup?projectGroup:null;
    this.officialEmail = officialEmail?officialEmail:null;
    this.personalEmail = personalEmail?personalEmail:null;
    this.mobilePhoneA = mobilePhoneA?mobilePhoneA:null;
    this.mobilePhoneB = mobilePhoneB?mobilePhoneB:null;
    this.homePhoneA = homePhoneA?homePhoneA:null;
    this.homePhoneB = homePhoneB?homePhoneB:null;
    this.emergencyPhoneA = emergencyPhoneA?emergencyPhoneA:null;
    this.emergencyPhoneB = emergencyPhoneB?emergencyPhoneB:null;
    this.bloodGroup = bloodGroup?bloodGroup:null;
    this.birthDay = birthDay?birthDay:null;
    this.image = image?image:null;
    this.dateCreated = dateCreated?dateCreated:null;
    this.dateModified = dateModified?dateModified:null;
    this.dateDeleted = dateDeleted?dateModified:null;
  }
}

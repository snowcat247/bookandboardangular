export class HolidayPackage {
   constructor(
   public HolidayPackageId: number, 
   public HolidayPackageName: string, 
   public HolidayPackageDescription: string,
   public HolidayPackageTypeId :number,
   public HolidayImagePath : string,
   public HolidayEndDate : Date,
   public HolidayStartDate : Date,
   public HolidayPrice : Number
   
   ) {
   }
   }
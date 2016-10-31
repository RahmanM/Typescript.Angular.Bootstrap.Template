
module Payroll.Models {

    export class Employee {
        firstName: string;
        lastName: string;
        payType: string;
        perks: Perks;
        department: string; //sillyly
    }

    export class Perks {
        hasCompanyCar: boolean;
        hasBonus: boolean;
        hasShares: boolean;
    }

}
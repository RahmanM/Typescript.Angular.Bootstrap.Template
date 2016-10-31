/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />


module Payroll {

    import Employee = Payroll.Models.Employee;
    import Perks = Payroll.Models.Perks;

    export class EmployeeService {

        public employee: Employee;

        constructor() {
            this.employee = new Employee();
            this.employee.firstName = "rahman";
            this.employee.lastName = "mahmoodi";
            this.employee.payType = "ft";
            this.employee.perks = new Perks();
            this.employee.perks.hasBonus = true;
            this.employee.perks.hasCompanyCar = true;
            this.employee.perks.hasShares = true;
            this.employee.department = "Development";
        }

        public getEmployee(): Employee {
            return this.employee;
        }

    }

    angular.module("prl").service("Payroll.EmployeeService", EmployeeService);
}
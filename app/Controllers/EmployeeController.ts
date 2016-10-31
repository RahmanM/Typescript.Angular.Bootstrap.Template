/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />


module Payroll {

    import Employee = Payroll.Models.Employee;

    export class EmployeeController {

        public employee: Employee;
        public departments : Array<string>;
        private employeeService: EmployeeService;

        static $inject = ["Payroll.EmployeeService"];

        constructor(employeeService: EmployeeService) {
            this.employeeService = employeeService;
            this.getEmployee();
            this.departments = ["Development","Testing","Support"];
        }

        public getEmployee(): Employee {
            this.employee = this.employeeService.getEmployee();
            return this.employee;
        }

    }

    angular.module("prl").controller("Payroll.EmployeeController", EmployeeController);

}
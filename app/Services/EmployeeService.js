/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var Payroll;
(function (Payroll) {
    var Employee = Payroll.Models.Employee;
    var Perks = Payroll.Models.Perks;
    var EmployeeService = (function () {
        function EmployeeService() {
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
        EmployeeService.prototype.getEmployee = function () {
            return this.employee;
        };
        return EmployeeService;
    }());
    Payroll.EmployeeService = EmployeeService;
    angular.module("prl").service("Payroll.EmployeeService", EmployeeService);
})(Payroll || (Payroll = {}));
//# sourceMappingURL=EmployeeService.js.map
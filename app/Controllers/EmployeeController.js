/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var Payroll;
(function (Payroll) {
    var EmployeeController = (function () {
        function EmployeeController(employeeService) {
            this.employeeService = employeeService;
            this.getEmployee();
            this.departments = ["Development", "Testing", "Support"];
        }
        EmployeeController.prototype.getEmployee = function () {
            this.employee = this.employeeService.getEmployee();
            return this.employee;
        };
        EmployeeController.$inject = ["Payroll.EmployeeService"];
        return EmployeeController;
    }());
    Payroll.EmployeeController = EmployeeController;
    angular.module("prl").controller("Payroll.EmployeeController", EmployeeController);
})(Payroll || (Payroll = {}));
//# sourceMappingURL=EmployeeController.js.map
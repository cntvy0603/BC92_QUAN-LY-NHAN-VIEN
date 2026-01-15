export default class EmployeeManager{
    constructor(){
        this.employees = [];
    };

    addEmployee(data){
        this.employees.push(data);
    };

    deleteEmployee(id){
        const employeeIndex = this.employees.findIndex((employee) => employee.id === id);

        if(employeeIndex !== -1){
            this.employees.splice(employeeIndex, 1);
        };
    };

    getEmployeeById(id){
        return this.employees.find((employee) => employee.id === id);
    }

    updateEmployee(data){
        const employeeIndex = this.employees.findIndex((employee) => employee.id === data.id);

        if(employeeIndex !== -1){
            this.employees[employeeIndex] = data;
        }
    }

    
};


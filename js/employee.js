export default class Employee {
    constructor(id, name, email, password, date, basicSalary, position, workingHours){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.date = date;
        this.basicSalary = Number(basicSalary);
        this.position = position;
        this.workingHours = Number(workingHours);
        this.totalSalary = 0;
       this.ranking = "";
    }

    calculateTotalSalary(){
        if(this.position === "Sếp"){
            return this.totalSalary = this.basicSalary * 3;
        }else if(this.position === "Trưởng phòng"){
            return this.totalSalary = this.basicSalary * 2;
        }else if(this.position === "Nhân viên"){
            return this.totalSalary = this.basicSalary * 1;
        }
    }

    calculateRanking(){
        if(this.workingHours >= 192){
            return "Nhân viên xuất sắc";
        }else if(this.workingHours >= 176){
            return "Nhân viên giỏi";
        }else if(this.workingHours >= 160){
            return "Nhân viên khá";
        }else{
            return "Nhân viên trung bình";
        }
    }
};
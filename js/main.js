import Employee from "./employee.js";
import EmployeeManager from "./employeeManager.js";
import Validation from "./validation.js";

const validation = new Validation();
const employeeManager = new EmployeeManager ();

const getInfoEmployee = (isAdd) => {
    const id = document.getElementById("tknv").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const date = document.getElementById("datepicker").value;
    const basicSalary = document.getElementById("luongCB").value;
    const position = document.getElementById("chucvu").value;
    const workingHours = document.getElementById("gioLam").value;

    let isValid = true;
    if(isAdd){
      //Tài khoản
        isValid &=
    validation.checkEmpty(id, "tbTKNV", "Tài khoản không được để trống") && validation.checkLengthCharacter(
      id,
      "tbTKNV",
      "Tài khoản tối đa 4-6 ký số",
      1,
      6
    );

     //Tên nhân viên
      isValid &=
    validation.checkEmpty(name, "tbTen", "Tên nhân viên không được để trống") &&
    validation.checkCharacter(
      name,
      "tbTen",
      "Tên nhân viên chỉ được chứa ký tự chữ"
    );

    //Email
      isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không được để trống") &&
    validation.checkEmail(
      email,
      "tbEmail",
      "Vui lòng nhập đúng định dạng địa chỉ email"
    );

    //Mật khẩu
     isValid &=
    validation.checkEmpty(password, "tbMatKhau", "Tài khoản không được để trống") && validation.checkPassword(
      password,
      "tbMatKhau",
      "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt",
      
    ) && validation.checkLengthCharacter(
      password,
      "tbMatKhau",
      "Mật khẩu phải từ 6-10 ký tự",
      6,
      10
    );

    //Ngày làm
    isValid &=
    validation.checkEmpty(date, "tbNgay", "Ngày làm không được để trống");

    //Lương cơ bản
     isValid &=
    validation.checkEmpty(basicSalary, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkBasicSalary(
      basicSalary,
      "tbLuongCB",
      "Lương từ 1000000 - 20000000",
      1000000,
      20000000
    );

    //Chức vụ
      isValid &= validation.checkEmpty(position, "tbChucVu", "Chức vụ không được để trống") && validation.checkSelectOption(
    "chucvu",
    "tbChucVu",
    "Vui lòng chọn chức vụ hợp lệ"
  );

    //Giờ làm
    isValid &=
    validation.checkEmpty(workingHours, "tbGiolam", "Giờ làm không được để trống") && validation.checkWorkingHours(
      workingHours,
      "tbGiolam",
      "Số giờ từ 80 - 200 giờ",
      80,
      200
    );
      if (!isValid) return; 
    };

    const employee = new Employee (
        id,
        name,
        email,
        password,
        date,
        basicSalary,
        position,
        workingHours,
    )

    employee.calculateTotalSalary();
    employee.calculateRanking();
    return employee;
};

const renderEmployeeList = (data) => {
   let content = "";
   for(let employee of data){
    content += `
    <tr>
    <td>${employee.id}</td>
    <td>${employee.name}</td>
    <td>${employee.email}</td>
    <td>${employee.date}</td>
    <td>${employee.position}</td>
    <td>${employee.totalSalary}</td>
    <td>${employee.calculateRanking()}</td>
    <td>
    <button class ="btn btn-info" data-toggle="modal" data-target="#myModal" onclick ="handleEditEmployee('${employee.id}')">Edit</button>
    <button class="btn btn-danger" onclick ="handleDeleteEmployee('${employee.id}')">Delete</button>
    </td>
    </tr>
     `
   };
   document.getElementById("tableDanhSach").innerHTML = content;
};

document.getElementById("btnThemNV").onclick = function(){
    const employee = getInfoEmployee(true);
      if (!employee) return; 
    employeeManager.addEmployee(employee);
    renderEmployeeList(employeeManager.employees);
    // setLocalStorage();
};

const handleDeleteEmployee = (id) => {
  
    employeeManager.deleteEmployee(id);
    renderEmployeeList(employeeManager.employees);
    // setLocalStorage();

};

window.handleDeleteEmployee = handleDeleteEmployee;

// const setLocalStorage = () => {
//     const dataStringify = JSON.stringify(employeeManager.employees);
//     localStorage.setItem("EMPLOYEES", dataStringify);
// }

// const getLocalStorage = () => {
//     const data = localStorage.getItem("EMPLOYEES");
//     if(data){
//         const dataParse = JSON.parse(data);
//         employeeManager.employees = dataParse;
//         renderEmployeeList(employeeManager.employees);
//     };
// };

// getLocalStorage();

const handleEditEmployee = (id) => {
    const employee = employeeManager.getEmployeeById(id);
    if(employee){
    document.getElementById("tknv").value = employee.id;
    document.getElementById("name").value = employee.name;
    document.getElementById("email").value = employee.email;
    document.getElementById("password").value = employee.password;
    document.getElementById("datepicker").value = employee.date;
    document.getElementById("luongCB").value = employee.basicSalary;
    document.getElementById("chucvu").value = employee.position;
    document.getElementById("gioLam").value = employee.workingHours;
    }
};

window.handleEditEmployee = handleEditEmployee;

document.getElementById("btnCapNhat").onclick = function (){
    const employee = getInfoEmployee(true);
      if (!employee) return; 
    employeeManager.updateEmployee(employee);
    renderEmployeeList(employeeManager.employees);
    // setLocalStorage();
};

const searchEmployeeByRanking = () => {
    const keyword = document.getElementById("searchName").value.toLowerCase().trim();
    const result = employeeManager.employees.filter(employee => {
        const ranking = employee.calculateRanking().toLowerCase();
        return ranking.includes(keyword);
    });

    renderEmployeeList(result);
};
document.getElementById("btnTimNV").onclick = searchEmployeeByRanking;










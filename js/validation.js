export default class Validation{
      checkEmpty(value, spanId, mess) {
    if (value === "") {
      document.getElementById(spanId).innerHTML = mess;
      document.getElementById(spanId).style.display = "block";
      return false; 
    }

    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).style.display = "none";
    return true;
  }


    checkLengthCharacter(value, spanId, mess, min, max){
        if(value.trim().length >= min && value.trim().length <= max){
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
      return true;
    }
        document.getElementById(spanId).innerHTML = mess;
        document.getElementById(spanId).style.display = "block";
       return false;
    }

    checkCharacter(value, spanId, mess) {
    const letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      document.getElementById(spanId).innerHTML = "";
      document.getElementById(spanId).style.display = "none";
      return true;
    }

    document.getElementById(spanId).innerHTML = mess;
    document.getElementById(spanId).style.display = "block";
    return false;
  }

   checkEmail(value, spanId, mess) {
    const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (value.match(mail)) {
      document.getElementById(spanId).innerHTML = "";
      document.getElementById(spanId).style.display = "none";
      return true;
    }

    document.getElementById(spanId).innerHTML = mess;
    document.getElementById(spanId).style.display = "block";
    return false;
  }

  checkPassword(value, spanId, mess) {
    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    if (value.match(pass)) {
      document.getElementById(spanId).innerHTML = "";
      document.getElementById(spanId).style.display = "none";
      return true;
    }

    document.getElementById(spanId).innerHTML = mess;
    document.getElementById(spanId).style.display = "block";
    return false;
  }

   checkBasicSalary(value, spanId, mess, min, max){
        if(value.trim() >= min && value.trim() <= max){
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
      return true;
    }
        document.getElementById(spanId).innerHTML = mess;
        document.getElementById(spanId).style.display = "block";
       return false;
    }

      checkSelectOption(idSelect, spanId, mess) {
    const element = document.getElementById(idSelect);
    if (element.selectedIndex !== 0) {
      document.getElementById(spanId).innerHTML = "";
      document.getElementById(spanId).style.display = "none";
      return true;
    }

    document.getElementById(spanId).innerHTML = mess;
    document.getElementById(spanId).style.display = "block";
    return false;
  }

  checkWorkingHours(value, spanId, mess, min, max){
        if(value.trim() >= min && value.trim() <= max){
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
      return true;
    }
        document.getElementById(spanId).innerHTML = mess;
        document.getElementById(spanId).style.display = "block";
       return false;
    }

      checkExistId(value, spanId, mess, arr) {
    let exist = false;

    for (let i = 0; i < arr.length; i++) {
      const employee = arr[i];
      if (employee.id === value) {
        exist = true;
        break;
      }
    }

    if (exist) {
      document.getElementById(spanId).innerHTML = mess;
      document.getElementById(spanId).style.display = "block";
      return false;
    }

    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).style.display = "none";
    return true;
  }
}






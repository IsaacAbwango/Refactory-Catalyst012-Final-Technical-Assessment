const validate = () => {
    let val = 0;

    var userName = document.registration.userName;
    var lName = document.registration.lastName;
    var title = document.registration.title;
    var image = document.registration.image;
    var date = document.registration.date;
    var country = document.registration.country;
    var restype = document.registration.restype;
    var nationality = document.registration.nationality;


    // Error
    var userNameError = document.getElementById(userNameerr);
    var lastNameError = document.getElementById(lastNameerr);
    var titleError = document.getElementById(titleerr);
    var imageError = document.getElementById(imageerr);
    var dateError = document.getElementById(dateerr);
    var countryError = document.getElementById(countryerr);
    var restypeError = document.getElementById(restypeerr);
    var nationalityError = document.getElementById(nationalityerr);

    // First name Validations
    const alphabet = /^([A-Za-z]{1,16})$/;
    if(userName.value==''){
        userName.style.border='1px solid red';
        userNameError.textContent ='This field is required.'
        userNameError.style='color: red; , font-size:10;'
        val++
    }else if(!(userName.value.match(alphabet))){
        userName.style.border='1px solid red';
        userNameError.textContent ='This field is alphabetic.'
        userNameError.style='color: red; , font-size:10;'
        return false;
    }else{
        userName.style.border='1px solid green';
        userNameError.textContent ='';
    }

    // Last name Validations
    i
    if(lastName.value==''){
        lastName.style.border='1px solid red';
        lastNameError.textContent ='This field is required.'
        lastNameError.style='color: red; , font-size:10;'
        val++
    }else if(!(lastName.value.match(alphabet))){
        lastName.style.border='1px solid red';
        lastNameError.textContent ='This field is alphabetic.'
        lastNameError.style='color: red; , font-size:10;'
        return false;
    }else{
        lastName.style.border='1px solid green';
        lastNameError.textContent ='';
    }

    // title Validations
    if(title.value==''){
        title.style.border='1px solid red';
        titleError.textContent ='This field is required.'
        titleError.style='color: red; , font-size:10;'
        val++
    }else{
        title.style.border='1px solid green';
        titleError.textContent ='';
    }

    // image Validations
    if(image.value==''){
        image.style.border='1px solid red';
        imageError.textContent ='This field is required.'
        imageError.style='color: red; , font-size:10;'
        val++
    }else{
        image.style.border='1px solid green';
        imageError.textContent ='';
    }

    // date Validations
    if(date.value==''){
        date.style.border='1px solid red';
        dateError.textContent ='This field is required.'
        dateError.style='color: red; , font-size:10;'
        val++
    }else{
        date.style.border='1px solid green';
        dateError.textContent ='';
    }

    // country Validations
    if(country.value==''){
        country.style.border='1px solid red';
        countryError.textContent ='This field is required.'
        countryError.style='color: red; , font-size:10;'
        val++
    }else{
        country.style.border='1px solid green';
        countryError.textContent ='';
    }

     // restype Validations
     if(restype.value==''){
        restype.style.border='1px solid red';
        restypeError.textContent ='This field is required.'
        restypeError.style='color: red; , font-size:10;'
        val++
    }else{
        restype.style.border='1px solid green';
        restypeError.textContent ='';
    }

// nationality Validations
if(nationality.value==''){
    nationality.style.border='1px solid red';
    nationalityError.textContent ='This field is required.'
    nationalityError.style='color: red; , font-size:10;'
    val++
    return false;
}else{
    nationality.style.border='1px solid green';
    nationalityError.textContent ='';
}

}
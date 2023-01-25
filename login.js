 function validation(){
    var clg = document.getElementById('clg').value;
    var plc = document.getElementById('plc').value;
    var tm = document.getElementById('tm').value;
    var mem  = document.getElementById('mem').value;
    var ldr = document.getElementById('ldr').value;
    var cnt = document.getElementById('cnt').value;
 }
 form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


 if(clg == ""){
    document.getElementById('college').innerHTML="*Please enter the college name";
    return false;
}

if(plc == ""){
    document.getElementById('place').innerHTML="*Please enter the college name";
    return false;
}

if(tm == ""){
    document.getElementById('team').innerHTML="*Please enter the college name";
    return false;
}

if(mem == ""){
    document.getElementById('members').innerHTML="*Please enter the college name";
    return false;
}

if(ldr== ""){
    document.getElementById('leader').innerHTML="*Please enter the college name";
    return false;
}

if(clg == ""){
    document.getElementById('contact').innerHTML="*Please enter the college name";
    return false;
}
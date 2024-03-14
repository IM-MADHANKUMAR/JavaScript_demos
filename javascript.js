function convert(){
    const cmval = document.getElementById("input_for_cm_js").value;
    const inchval = cmval/2.54;
    const answer = document.getElementById("answer_box_cm_js")
    answer.innerHTML = inchval.toFixed(2) +" inches"

}

function convert_cel_fah(){
    const celval = document.getElementById("input_for_cel_js").value;
    const fahval = (celval*1.8)+32;
    const answer_2 = document.getElementById("answer_box_cel_js");
    answer_2.innerHTML = fahval.toFixed(3) +"^F ";
}

function convert_cel_kel(){
    let celcius_val = Number(document.querySelector(".kel_val").value);
    let kel_val = celcius_val+273;
    const answer_3=document.querySelector(".kel_ans");
    answer_3.innerHTML = kel_val.toFixed(1)+"K";
}

function convert_cm_feet(){
    let cm_val = Number(document.querySelector(".cm_val").value);
    let feet = cm_val*0.0328;
    const answer_3=document.querySelector(".feet_ans");
    answer_3.innerHTML = feet.toFixed(1)+"ft";
}
/*
Program name: patient-form.html
    Author: Taylor Cooper
    Date created: 2025-02-02
    Date last edited: 2025-02-02
    Version: (start with 1.0 and change it as you make changes)
    Description: MIS 7731 Homework 1 HTML Patient Form
*/

    //dynamic date js code//
    const d = new Date();
    let text = d.toLocaleDateString();
    document.getElementById("today").innerHTML = text;

//range slider in js code//
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

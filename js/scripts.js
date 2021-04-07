"use strict";
const questions = document.querySelector('#faqs-body')
let questionNumber = 1;

const renderData = async () => {
    let uri = 'http://localhost:3000/rows';

    const res = await fetch(uri);
    const rows = await res.json();
    
    let template = '';
    rows.forEach(row => {
        template += 
        `<div class="accordion">
            <div class="title"> ${questionNumber++}. ${row.title}? </div>
            <div class="answers"> ${row.content} </div>
        </div>
        `
    }) 

    questions.innerHTML = template;

    document.querySelectorAll('.accordion').forEach(item => {
        const c = item.children;
        // Expands/collapses accordion on click & toggles arrow icon
        c[0].addEventListener('click', () => {
        c[0].classList.toggle("active");
        c[1].classList.toggle("expand");
        })
      })
}

window.addEventListener('DOMContentLoaded', () => renderData())

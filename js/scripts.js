"use strict";

const questions = document.querySelector('#faqs-body')
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

}

window.addEventListener('DOMContentLoaded', () => renderData())

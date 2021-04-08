const faqsBody = document.querySelector('#faqs-body')
let questionNumber = 1;

const renderData = async () => {
    let uri = './js/data.json';

    const res = await fetch(uri);
    const data = await res.json();
    let template = '';
    data.rows.forEach(row => {
        template += 
        `<div class="accordion">
            <div class="title"> ${questionNumber++}. ${row.title}? </div>
            <div class="answers"> ${row.content} </div>
        </div>
        `
    }) 

    faqsBody.innerHTML = template;
    toggleAccordion();
}

const toggleAccordion = async () => {
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

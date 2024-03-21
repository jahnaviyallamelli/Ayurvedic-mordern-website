// Script for navigation bar
let bar=document.querySelector("#bar");
let close=document.querySelector("#close");
let nav=document.querySelector("#nav-bar");
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}
let avaliableKeywords=[
    'Ayurveda',
    'doctors',
    'treatment',
    'price',
    'Fever and cold',
    'Weight loss',
    'Herbal tea',
    'how to loose weight in 4 months',
    'How to be peaceful without any stress',
    'About ayurveda',
    'is Ayurveda safe',
    'is ayurveda is good for health',
    'What is Ayurveda and how does it work',
    'How can i determine my dosha type',
    'What are some common Ayurvedic herbs and their benefits',
    'Can Ayurveda help with specific health conditions, such as digestion issues or stress?',
    'What role does diet play in Ayurveda? Are there specific dietary guidelines to follow?',
    'How can i incorporate ayurvedic principles into my daily routine',
    'Can Ayurveda help with weight management',
    'Are there any ayurvedic remedies for common aliments like cold or headaches',
    'can ayurveda be combined with conventional medicine',
    'how long does it take to see results from ayurvedic treatments',
    'is Ayurveda suitable for children, pregnent women or older adults?',
    'Ayurvedic skincare practices for healthy skin',
    'can Ayurveda improves mental health',
    'can we improve our spiritual growth with Ayurveda'
];
const resultBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result=[];
    let input=inputBox.value ;
    if(input.length){
        result=avaliableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML='';
    }
}
function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultBox.innerHTML="<ul>"+content.join('') +"</ul>";
}
function selectInput(list){
    inputBox.value=list.innerHTML;
    resultBox.innerHTML='';
}
function search(){
    var query=inputBox.value;
    var searchURL="https://www.google.com/search?q="+encodeURIComponent(query);
    window.open(searchURL,"_blank");
}
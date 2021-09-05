const header=document.querySelector('h1');
const btn=document.querySelector('button');
btn.addEventListener('click',() =>{
    const r=Math.floor(Math.random() * 255);
    const g=Math.floor(Math.random() * 255);
    const b=Math.floor(Math.random() * 255);
    const newColor= `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor=newColor;
    header.innerText = newColor.toUpperCase();
    if (r<100 || g<100 || b<100) {
        header.style.color= 'white';
    }
    else{
        header.style.color= 'black';
    }
});
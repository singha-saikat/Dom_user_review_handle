document.querySelector('#submit-btn').addEventListener('click',function(){
    const textArea = document.querySelector('#text-area')
    const textValue = textArea.value ;
    console.log(textValue);
    const p = document.createElement('p');
    p.innerText = textValue;
    p.style.border = '5px solid skyblue';
    p.style.borderRadius = '3px';
    
    document.querySelector('.comment-container').appendChild(p);
    
    textArea.value ='';
})
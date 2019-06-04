let divs = document.querySelectorAll('div');


for (let i=0; i<divs.length; i++){
    divs[i].addEventListener('click', function(event){
        event.stopPropagation();
        console.log(this.getAttribute('id'))
    });
}
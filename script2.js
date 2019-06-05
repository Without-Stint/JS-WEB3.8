document.querySelector('#alert').addEventListener('click', function(){
    alert('Вы красавчик!!!')
} )

document.querySelector('#confirm').addEventListener('click', function(){
    let decision = confirm('Давай давай КУЧ!!!!!')
    
    if (decision) {
        alert('Вы успешно нажали на кнопку')
    }
} )


document.querySelector('#prompt').addEventListener('click', function(){
    let age = prompt('Введите свой возраст');


    if (age => 18) {
        alert('Вы можете пройти')
    } else {
        alert('Вы ещё слишком молоды')
    }
})

console.log('console.log')
console.warn('console.warn')
console.info('console.info')
window.addEventListener('click', function(event){

    let counter

    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

        const counterWrapper = event.target.closest('.counter-wrapper')

        counter = counterWrapper.querySelector('[data-counter]')
    }
    
    if(event.target.dataset.action === 'plus'){

        counter.innerText = ++counter.innerText
    }

    if(event.target.dataset.action === 'minus'){

        if(parseInt(counter.innerText) > 1){
            
            counter.innerText = --counter.innerText
        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
            //Удаляем товар из корзины
            event.target.closest('.cart-item').remove()

            // Отображение статуса корзины (пустая / полная)
            toggleCartStatus()

            calcCartPrice()
        }
    }

    //Проверка на клик по + или - внутри корзины
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPrice()
    }

})
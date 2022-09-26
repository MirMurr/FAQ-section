const accItem = document.querySelectorAll('.accordion-item');

accItem.forEach((acc) => acc.addEventListener('click', toggleAccItem))

function toggleAccItem() {
    accItem.forEach((item) => item != this ? item.classList.remove('accordion-item--active') : null) 

        if(this.classList != 'accordion-item--active') {
            this.classList.toggle('accordion-item--active')
        }

    };


const counters = document.querySelectorAll('.counter');
const speed = 250;

counters.forEach(item => {
    function updateCount() {
       
        const target = +item.getAttribute('data-target');
        const count = +item.innerText;

        const inc = target / speed;

        if(count < target) {
            item.innerText = count + inc;
           
            setTimeout(updateCount, 1);
        }
        else {
            item.innerText = target;
        }
    }
    updateCount();
})
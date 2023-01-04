const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            // console.log(entry.target);
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})
 
const hiddenElements = document.querySelectorAll('.anime')
hiddenElements.forEach((el) => observer.observe(el));
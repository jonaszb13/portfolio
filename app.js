function textCycle() {
    const letters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";


    let iterations = 0;

    test = document.querySelector(".hedding")

    const interval = setInterval(() => {
        test.innerText = test.innerText.split("").map((letter, index) => {
            if (index < iterations) {
                return test.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 25)]
        })
            .join("");

        if (iterations >= test.dataset.value.length) clearInterval(interval);

        iterations += 1 / 2;
    }, 30)
        ;
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



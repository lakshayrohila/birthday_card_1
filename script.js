function button_1_click(button) {
    const nextBtn = button.nextElementSibling;
    button.style.display = 'none';
    nextBtn.style.display = 'block';
    button_1_animation();
}

function button_1_animation() {
    /* src: https://confetti.js.org/ */
    const count = 200,
    defaults = { origin: { y: .7 } };

    function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, { particleCount: Math.floor(count * particleRatio) }));
    }
    fire(.25, {
    spread: 26,
    startVelocity: 55
    });
    fire(.2, { spread: 60 });
    fire(.35, {
    spread: 100,
    decay: .91,
    scalar: .8
    });
    fire(.1, {
    spread: 120,
    startVelocity: 25,
    decay: .92,
    scalar: 1.2
    });
    fire(.1, {
    spread: 120,
    startVelocity: 45
    });
}

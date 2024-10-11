function tab1() {
    const intro = document.getElementById('intro')
    intro.classList.add('hidden')

    const tabDisaster = document.getElementById('disaster');
    tabDisaster.classList.remove('hidden');
}
function tab2() {
    const tabDisaster = document.getElementById('disaster');
    tabDisaster.classList.add('hidden');

    const tabFLop = document.getElementById('flop');
    tabFLop.classList.remove('hidden');
}
function tab3() {
    const tabFLop = document.getElementById('flop');
    tabFLop.classList.add('hidden');

    const tabBlockbaster = document.getElementById('blokebaster')
    tabBlockbaster.classList.remove('hidden');
}
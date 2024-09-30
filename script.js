const loveButton = document.getElementById('loveButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

loveButton.addEventListener('click', () => {
    // Berikan efek animasi pada tombol setelah diklik
    loveButton.classList.add('clicked');
    
    // Setelah 1 detik, pindah ke halaman kedua
    setTimeout(() => {
        page1.classList.remove('active');
        page2.classList.add('active');
    }, 1000);
});

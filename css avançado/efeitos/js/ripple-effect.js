document.querySelectorAll('.ripple').forEach(elemento => {
    elemento.addEventListener('click', function(e) {
        // Remove animações anteriores
        this.classList.remove('active');

        // Calcula posição do clique
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Define a posição do ripple
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);

        // Ativa animação
        this.classList.add('active');

        //Remove classe após animação
        setTimeout(() => this.classList.remove('active'), 600);
    });
})
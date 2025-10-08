document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
            const fullImagePath = event.currentTarget.getAttribute('data-full');
            
            mainImage.src = fullImagePath;
            mainImage.alt = `Large display of ${event.currentTarget.alt}`;

            thumbnails.forEach(t => t.classList.remove('active'));

            event.currentTarget.classList.add('active');
        });
    });

    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
});
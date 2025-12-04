document.addEventListener('DOMContentLoaded', () => {
    const imageSelector = document.getElementById('imageSelector');
    const alertOverlay = document.getElementById('alert-overlay');
    const alertModal = document.getElementById('alert-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const imageData = [
        {
            id: 'Gunung Sinabung',
            filename: 'https://i.pinimg.com/1200x/53/13/70/5313703bc0bf120e6dbe79d92ee1f22a.jpg',
            description: 'Terletak di Dataran Tinggi Karo, Gunung Sinabung menjadi sangat terkenal setelah erupsinya yang besar pada 2010 dan terus aktif hingga sekarang. Karena aktivitas vulkaniknya yang tinggi, pendakian ke puncaknya saat ini ditutup untuk umum, namun gunung ini menjadi objek penelitian dan daya tarik tersendiri dari kejauhan.'
        },
        {
            id: 'Gunung Sibayak',
            filename: 'https://i.pinimg.com/1200x/43/fe/25/43fe253941351588bcedb8bd9c2fae51.jpg',
            description: 'Gunung berapi aktif yang terletak dekat dengan kota wisata Berastagi. Gunung Sibayak sangat populer di kalangan pendaki pemula karena jalurnya yang relatif mudah. Puncaknya menawarkan pemandangan matahari terbit yang spektakuler dan kawah belerang yang masih mengepul.'
        },
        {
            id: 'Gunung Leuser',
            filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0K3vjq95AmEIaSBygbmm659lTUcr8_kj9roOs8VftZmLZRfKloiUmdqd2fZR9jm9M3Q8&usqp=CAU',
            description: 'Gunung Leuser adalah puncak dari Taman Nasional Gunung Leuser, salah satu kawasan konservasi terpenting di Asia Tenggara dan Situs Warisan Dunia UNESCO. Kawasan ini terkenal sebagai habitat alami bagi satwa langka seperti orangutan, harimau sumatera, dan badak sumatera. Pendakian di sini lebih fokus pada jelajah hutan dan wisata satwa liar.'
        },
        {
            id: 'Pantai Sekitar Danau Toba',
            filename: 'https://i.pinimg.com/1200x/17/37/7c/17377cba3e5566804da8f4808b636d7b.jpg',
            description: 'Meskipun bukan pantai laut, area pinggir Danau Toba, terutama di sekitar Parapat, memiliki "pantai" yang populer. Pengunjung dapat menikmati pasir hitam yang unik dan berenang di air danau yang segar sambil dikelilingi pemandangan perbukitan dan pegunungan yang hijau.'
        },
        {
            id: 'Pantai Pandan',
            filename: 'https://i.pinimg.com/1200x/2b/3c/d5/2b3cd52e10f38bab7162741e9c8f1637.jpg',
            description: 'Terletak di Tapanuli Tengah, dekat Kota Sibolga, pantai ini terkenal dengan pasir putihnya yang lembut dan air lautnya yang tenang dan jernih. Suasana di Pantai Pandan cukup tenang, cocok untuk bersantai dan menikmati pemandangan pulau-pulau kecil di sekitarnya.'
        },
        {
            id: 'Pulau Weh',
            filename: 'https://i.pinimg.com/1200x/45/06/84/4506846d59121439cc8472cd682b9eb5.jpg',
            description: 'Terletak di ujung paling barat Indonesia, Pulau Weh adalah surga bagi penyelam dan peselancar. Pulau ini memiliki pantai-pantai dengan pasir putih, air laut yang jernih berwarna biru toska, dan terumbu karang yang masih sangat terjaga. Pantai Iboih dan Gapang adalah dua yang paling terkenal di sini.'
        },
        {
            id: 'Pantai Sorake',
            filename: 'https://i.pinimg.com/1200x/ca/d7/b1/cad7b1e5a2bde7c53b4bde97e601907e.jpg',
            description: 'Pantai ini sangat terkenal di kalangan peselancar internasional karena memiliki ombak kelas dunia yang konsisten dan panjang. Pantai Sorake dan Lagundri, yang terletak di Pulau Nias, sering menjadi tuan rumah kompetisi selancar internasional dan dianggap sebagai salah satu spot surfing terbaik di dunia.'
        }
    ];

    function populateDropdown() {
        imageSelector.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Pilih Gambar --';
        imageSelector.appendChild(defaultOption);

        imageData.forEach(image => {
            const option = document.createElement('option');
            option.value = image.id;
            option.textContent = image.id;
            imageSelector.appendChild(option);
        });
    }

    function showCustomAlert(imageData) {
        modalImage.src = imageData.filename;
        modalImage.alt = imageData.description;
        modalTitle.textContent = imageData.id;
        modalDescription.textContent = imageData.description;
        
        alertOverlay.classList.add('show');
    }

    function hideCustomAlert() {
        alertOverlay.classList.remove('show');
    }

    imageSelector.addEventListener('change', (event) => {
        const selectedId = event.target.value;
        const selectedImage = imageData.find(img => img.id === selectedId);

        if (selectedImage) {
            showCustomAlert(selectedImage);
        }
    });

    modalCloseBtn.addEventListener('click', hideCustomAlert);
    alertOverlay.addEventListener('click', (event) => {
        if (event.target === alertOverlay) {
            hideCustomAlert();
        }
    });

    populateDropdown();
});
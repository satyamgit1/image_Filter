document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li');
    const gallery = document.querySelectorAll('.images');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const category = event.target.dataset.category;
            filterSearch(category);
        });
    });

    const filterSearch = (value) => {
        gallery.forEach((image) => {
            if (value === "all" || image.dataset.category === value) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    };
});

const locationFilter = document.getElementById('location');
const results = document.querySelectorAll('.result');

locationFilter.addEventListener('change', filterResults);

function filterResults() {
    const selectedLocation = locationFilter.value;
    results.forEach(result => {
        if (selectedLocation === 'all' || result.dataset.location === selectedLocation) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }
    });
}
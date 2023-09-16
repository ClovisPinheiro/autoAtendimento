
const menuSelect = document.getElementById('menu-select');

menuSelect.addEventListener('change', function() {
    const selectedValue = menuSelect.value ;

    if (selectedValue) {
        window.location.href = selectedValue + 'html';
    }
})
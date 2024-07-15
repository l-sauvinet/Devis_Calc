document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('li');

    items.forEach(function(item) {
        const yesCheckbox = item.querySelector('.yes-checkbox');
        const noCheckbox = item.querySelector('.no-checkbox');

        yesCheckbox.addEventListener('change', function() {
            if (yesCheckbox.checked) {
                noCheckbox.checked = false;
            }
        });

        noCheckbox.addEventListener('change', function() {
            if (noCheckbox.checked) {
                yesCheckbox.checked = false;
            }
        });
    });
});

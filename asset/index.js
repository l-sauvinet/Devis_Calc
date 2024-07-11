document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.single-checkbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            checkboxes.forEach(function(otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        });
    });
});

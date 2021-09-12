$(document).ready(function () {
    $('body').on('click', ".logout-btn", function() {
        localStorage.clear();
    });
});
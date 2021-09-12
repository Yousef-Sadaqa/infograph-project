$(document).ready(function () {
    $('body').on('click', ".delete-product", function() {
        const productID = $(this).attr('p_id');
        $.ajax({type:"DELETE",url: "http://localhost:8000/delete-product/"+productID, success: function(result){
            location.reload();
        }});
    });
});
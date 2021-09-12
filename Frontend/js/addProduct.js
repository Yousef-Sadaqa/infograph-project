$(document).ready(function () {
    $(".save-product").click(function(){
      if($('#product-name').val() == ''){
        $('#product-name').addClass('required');
        return;
      }
      if($('#product-price').val() == 0 || $('#product-price').val() == ''){
        $('#product-price').addClass('required');
        return;
      }
        const formData={
            name: $('#product-name').val(),
            price:$('#product-price').val(),
            description:$('#product-description').val(),
            isAvailable:$('#is-available').prop( "checked" ) ? true : false,
            numberToTake:$('#product-number-to-take').val(),
        }
        console.log(formData);
        $.ajax({
        type:"POST",
        headers: {"token": localStorage.getItem('token')},
        url: "http://localhost:8000/add-product",
        data:formData,
        success: function(result){
          location.reload();
        }});
      });
});
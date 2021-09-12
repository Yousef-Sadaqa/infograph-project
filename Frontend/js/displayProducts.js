$(document).ready(function () {
    
    $.ajax({type:"GET",url: "http://localhost:8000/get-products", success: function(result){
        let products = result;
        if (products.length > 0) {
            products.forEach(function (product) { 
              $(".products").append(
                '<div id="'+product._id+'" class="card product-item"><div class="card-body"><h5 class="card-title">' +
                  product.name +
                  '</h5><h6 class="card-subtitle mb-2 text-muted">' +
                  "Price:" +
                  product.price +
                  "$" +
                  '</h6>'+
                  '<h6 class="card-subtitle mb-2 text-muted">Number to Take Per Day:'+
                  product.numberToTake+
                  '</h6><p class="card-text">' +
                  product.description +
                  '</p><p class="' +
                  (product.isAvailable ? "text-success" : "text-danger") +
                  '">' +
                  (product.isAvailable ? "In Stock" : "Out Stock") +
                  "</p></div></div>"
              );
            });
            // if ($(".products").hasClass('products-admin') && window.localStorage.getItem('token')){
            //   $('.login-page').addClass('d-none');
            //   $('.login-page').after( "<a class='btn btn-primary logout-btn' href='login.html'>Log out</a>" );
            //   $('.product-item').each(function () {
            //         $(this).append('<i class="delete-product text-danger fas fa-trash-alt" p_id='+ $(this).attr('id') +'></i>');
            //     });
            //   $('.add-product-container').append('<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Product</button>')
            // }
          }
          else{
            $(".products").append('<h1>There in no products!</h1>');
          }
          if ($(".products").hasClass('products-admin') && window.localStorage.getItem('token')){
            $('.login-page').addClass('d-none');
            $('.login-page').after( "<a class='logout-btn text-white' href='login.html'>Log out</a>" );
            $('.product-item').each(function () {
                  $(this).append('<i class="delete-product text-danger fas fa-trash-alt" p_id='+ $(this).attr('id') +'></i>');
              });
            $('.add-product-container').append('<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Product</button>')
          }
    }});  
    
});
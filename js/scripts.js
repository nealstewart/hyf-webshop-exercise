$(document).ready(function() {
    
    // FUNCTION TO LOAD ALL THE PRODUCTS ON THE PAGE USING A TEMPLATE DEFINED ON HTML PAGE
    var template = $('#template').html();
    $.getJSON("data.json", function(json) {
        console.log(json);
    
    var productsArray = json.products;
    productsArray.forEach(function(val) {

    var product = $(template).clone();
    // add visible attributes
    product.find('.product-img').attr({"src": "images/products/" + val.id + ".jpg"});
    product.find('.product-name').text(val.item_name);
    product.find('.product-price').text("€" + val.price);
    product.find('.qty').attr({"name": "qty-" + val.id, "id": "qty-" + val.id});
    product.find('.label').attr("for", "qty-" + val.id);

    // add data attributes
    product.find('.productData').attr("data-name", val.item_name);
    product.find('.productData').attr("data-price", val.price);
    product.find('.productData').attr("data-country", val.country_of_origin);

    // append product to HTML
    $("#products").append(product);
    }); // end of the forEach loop
    
  }); // end of getJSON function

}); // end of document.ready function
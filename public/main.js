$(function() {
    //introduce template for table
    var tableTemplate = document.querySelector(".tableTemplate").innerHTML;
    //Compile that  into a template
    var tableTemplateInst = Handlebars.compile(tableTemplate);
    var displayTableStock = document.getElementById('displayTableStock');
    var addBtn = document.getElementById('addBtn')


    $.ajax({
        type: "GET",
        url: "/api/shoes",
        dataType: 'json',
        success: function(oders) {
            displayTableStock.innerHTML = tableTemplateInst({
                shoes: oders.data
            })


        }

    });

$("#addBtn").click(function() {

  var new_color = document.getElementById("new_color");
  var new_size = document.getElementById("new_size");
  var new_brand = document.getElementById("new_brand");
  var new_price = document.getElementById("new_price");
  var new_stock = document.getElementById("new_stock");

  var newOjbShoes = {
    brand: new_brand.value,
    size: new_size.value,
    color: new_color.value,
    price: new_price.value,
    in_stock: new_stock.value
  }


    $.ajax({
        type: "POST",
        url: "/api/shoes",
        data: newOjbShoes,
        dataType: 'json',
        success: function(oders) {

            }


        })

    });
        });

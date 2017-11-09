  //introduce template for table
  var tableTemplate = document.querySelector(".tableTemplate").innerHTML;
  //Compile that  into a template
  var tableTemplateInst = Handlebars.compile(tableTemplate);
  var displayTableStock = document.getElementById('displayTableStock');
  var addBtn = document.getElementById('addBtn')
  var soldBtn = document.getElementById('soldBtn')


  function showAllStock() {
      console.log("first time");
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
  }
  showAllStock();



  function addStock() {
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
              showAllStock();
          }

      })
  }

  //filter by brand name
  var filterBrand = document.querySelector('#filterByBrand');

  $("#filteByrBrand").click(function() {
      var filterBrandText = document.querySelector("#filterBrand");
      var brand = filterBrandText.value

      $.ajax({
          type: "GET",
          url: "/api/shoes/brand/" + brand,
          success: function(results) {
              displayTableStock.innerHTML = tableTemplateInst({
                  shoes: results
              })
          }

      })
  })

  //filter by shoe size
  var filterSize = document.querySelector('#filterBySize');

  $("#filterBySize").click(function() {
      var filterSizeText = document.querySelector("#filterSize");
      var size = filterSizeText.value

      $.ajax({
          type: "GET",
          url: "/api/shoes/size/" + size,
          success: function(results) {
              displayTableStock.innerHTML = tableTemplateInst({
                  shoes: results
              })
          }

      })
  })

  //function for update
$('#displayTableStock').on('click', function(e){
  var sold = e.target.value;
  $.ajax({
    type: "POST",
    url: "/api/shoes/sold/" +sold,
    dataType: 'json',
    success: function(oders) {}

  })

})

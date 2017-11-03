$(function(){
//introduce template for table
var tableTemplate = document.querySelector(".tableTemplate").innerHTML;
//Compile that  into a template
var tableTemplateInst = Handlebars.compile(tableTemplate);
var displayTableStock = document.getElementById('displayTableStock');


    $.ajax({
        type: "GET",
        url: "/api/shoes",
        dataType: 'json',
        success: function(oders){
            displayTableStock.innerHTML = tableTemplateInst({
                shoes: oders.data
              })


        }

    });
});

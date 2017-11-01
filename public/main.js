$(function() {
    $.ajax({
        type: "GET",
        url: "/api/shoes"
    })
})
//introduce template for table
var tableTemplate = document.querySelector("#tableTemplate").innerHTML;
//Compile that  into a template
var tableTemplateInst = Handlebars.compile(tableTemplate);

var dropTemp = document.querySelector("#dropTemp").innerHTML;
var dropDownTemplateInst = Handlebars.compile(dropTemp);

var shoeData = [{

        color: 'black',
        brand: 'puma',
        price: 275,
        size: 2,
        in_stock: 1
    },
    {
        color: 'orange',
        brand: 'adidas',
        price: 275,
        size: 2,
        in_stock: 10

    },
];
var addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function() {

    var new_color = document.getElementById("new_color");
    var new_brand = document.getElementById("new_brand");
    var new_price = document.getElementById("new_price");
    var new_size = document.getElementById("new_size");
    var new_stock = document.getElementById("new_stock");
    if (new_color !== undefined && new_size !== undefined && new_brand !== undefined && new_price !== undefined) {
        shoeData.push({
            color: new_color.value,
            brand: new_brand.value,
            price: Number(new_price.value),
            size: Number(new_size.value),
            in_stock: Number(new_stock.value)
        })
    }
    displayMyShoe(shoeData)
});

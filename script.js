const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

/*document.getElementById("addPart").onclick=function() {
    var form = document.getElementById("myForm");
    var input1 = document.createElement("input");
    input1.type = "text";
    var input2 = document.createElement("input");
    input2.type = "text";
    var input3 = document.createElement("input");
    input3.type = "text";
    var br = document.createElement("br");
    form.appendChild(input1);
    form.appendChild(br);
    form.appendChild(input2);
    form.appendChild(br);
    form.appendChild(input3);
    form.appendChild(br);

    var table = document.getElementById("orderList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    newRow.appendChild(input1)
    // appendChild(input2)
    // appendChild(input3)
}*/

const container1 = document.getElementById('partNumber');
const container2 = document.getElementById('quantity');
const container3 = document.getElementById('description');
let number = 1

// Call addInput() function on button click
function addInput(){

    // Add Margins/Padding Between the Created elements
    let partNumber = document.createElement("input");
    partNumber.className = "col-12 text-center";
    partNumber.setAttribute("type","text");
    partNumber.setAttribute("name","Part #" + number);
    partNumber.setAttribute("placeholder","Part #" + number);
    container1.appendChild(partNumber);

    let quantity = document.createElement("input");
    quantity.className = "col-12 text-center";
    quantity.setAttribute("type","text");
    quantity.setAttribute("name","Quantity #" + number);
    quantity.setAttribute("placeholder","Quantity " + number);
    container2.appendChild(quantity);

    let description = document.createElement("input");
    description.placeholder = "Brief Description";
    description.className = "col-12 text-center";
    description.setAttribute("type","text");
    description.setAttribute("name","Description #" + number);
    description.setAttribute("placeholder","Description " + number);
    container3.appendChild(description);

    number += 1
}

function removeInput(){
    var input_tag1 = container1.getElementsByTagName('input');
    if(input_tag1.length > 1) {
      container1.removeChild(input_tag1[(input_tag1.length) - 1]);
    }

    var input_tag2 = container2.getElementsByTagName('input');
    if(input_tag2.length > 1) {
      container2.removeChild(input_tag2[(input_tag2.length) - 1]);
    }

    var input_tag3 = container3.getElementsByTagName('input');
    if(input_tag3.length > 1) {
      container3.removeChild(input_tag3[(input_tag3.length) - 1]);
    }

    number -= 1
  }


  function customMessage() {

    const poNumber = document.getElementById("PO")

    return "Thank You For Your Order, Use " + poNumber + " To Track This Order"
  }
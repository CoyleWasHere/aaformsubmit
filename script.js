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
const container2 = document.getElementById('quantity1');
const container3 = document.getElementById('description1');

// Call addInput() function on button click
function addInput(){

    // Add Margins/Padding Between the Created elements
    let input1 = document.createElement("input");
    input1.placeholder = "Part #";
    input1.className = "col-12 text-center"
    container1.appendChild(input1);

    let input2 = document.createElement("input");
    input2.placeholder = "Quantity";
    input2.className = "col-12 text-center"
    container2.appendChild(input2);

    let input3 = document.createElement("input");
    input3.placeholder = "Brief Description";
    input3.className = "col-12 text-center"
    container3.appendChild(input3);
}
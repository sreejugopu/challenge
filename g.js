function ajax() {
    var xhttp = new XMLHttpRequest();
    var table = document.getElementById("tab");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
            tblCustomers.deleteRow(i);
        }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var j = response.grocery;

            for (var i = 0; i < j.length; i++) {
                // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(i + 1);

                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);


                // Add some text to the new cells:
                cell1.innerHTML = j[i].no;
                cell2.innerHTML = j[i].name;
                cell3.innerHTML = j[i].quantity;
                cell4.innerHTML = j[i].unit;
                cell5.innerHTML = j[i].dep;
                cell6.innerHTML = j[i].notes;
            }


        }
    }
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}
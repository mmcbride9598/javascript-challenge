// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(spaceReport){
    console.log(spaceReport);
    var row = tbody.append("tr");

    Object.entries(spaceReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
    cell.text(value);
      });
});

var button = d3.select("#filter-btn");

var form = d3.select("#filters");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){

    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    var Date = tableData.datetime
    var City = tableData.city
    var State = tableData.state
    var Country = tableData.country
    var Shape = tableData.shape
    var Duration = tableData.durationMinutes
    var Comments = tableData.comments

    var list = d3.select(".list-group");

    list.html("");

    list.append("li").text(`${Date}`);
    list.append("li").text(`${City}`);
    list.append("li").text(`${State}`);
    list.append("li").text(`${Country}`);
    list.append("li").text(`${Shape}`);
    list.append("li").text(`${Duration}`);
    list.append("li").text(`${Comments}`);
}
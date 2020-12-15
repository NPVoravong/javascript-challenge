// from data.js
var tableData = data;

// YOUR CODE HERE!

data.forEach(item => {
console.log(item)
let tr = d3.select("tbody").append("tr");
let datetime = tr.append("td").text(item.datetime);
let city = tr.append("td").text(item.city);
let state = tr.append("td").text(item.state);
let country = tr.append("td").text(item.country);
let shape = tr.append("td").text(item.shape);
let durationMinutes = tr.append("td").text(item.durationMinutes);
let comments = tr.append("td").text(item.comments);
});

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() {

document.getElementById("ufo-tbody").innerHTML = "";

let user_input = d3.select("#datetime");
let input_val = user_input.property("value");

let datetime_result = tableData.filter(item => item.datetime === input_val);
// console.log(datetime_result);

var filter_tbody = d3.select("#ufo-table>tbody");

datetime_result.forEach(item =>{
    console.log(item)
    let tr = filter_tbody.append("tr");
    let datetime = tr.append("td").text(item.datetime);
    let city = tr.append("td").text(item.city);
    let state = tr.append("td").text(item.state);
    let country = tr.append("td").text(item.country);
    let shape = tr.append("td").text(item.shape);
    let durationMinutes = tr.append("td").text(item.durationMinutes);
    let comments = tr.append("td").text(item.comments);
})

};


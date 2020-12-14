// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(item => {
console.log(item)
let tr = tbody.append("tr");
let datetime = tr.append("td").text(item.datetime);
let city = tr.append("td").text(item.city);
let state = tr.append("td").text(item.state);
let country = tr.append("td").text(item.country);
let shape = tr.append("td").text(item.shape);
let durationMinutes = tr.append("td").text(item.durationMinutes);
let comments = tr.append("td").text(item.comments);
});


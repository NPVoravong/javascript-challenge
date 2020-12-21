// from data.js
const tableData = data;

// YOUR CODE HERE!

runDefault();

function runDefault() {
  d3.select("#ufo-tbody").html("");
  data.forEach((item) => {
    console.log(item);
    let tr = d3.select("tbody").append("tr");
    let datetime = tr.append("td").text(item.datetime);
    let city = tr.append("td").text(item.city);
    let state = tr.append("td").text(item.state);
    let country = tr.append("td").text(item.country);
    let shape = tr.append("td").text(item.shape);
    let durationMinutes = tr.append("td").text(item.durationMinutes);
    let comments = tr.append("td").text(item.comments);
  })
}

const button_filter = d3.select("#filter-btn").on("click", runFilter);
const button_reset = d3.select("#reset-btn").on("click", runDefault);
const form = d3.select("#form").on("submit", runFilter);

function runFilter() {
  d3.select("#ufo-tbody").html("");

  let user_input = d3.selectAll(".form-control");
  let input_val = user_input.property("value");

  let result = tableData.filter((item) => item.datetime === input_val);
  console.log(result);

  result.forEach((item) => {
    console.log(item);
    let tr = d3.select("#ufo-table>tbody").append("tr");
    let datetime = tr.append("td").text(item.datetime);
    let city = tr.append("td").text(item.city);
    let state = tr.append("td").text(item.state);
    let country = tr.append("td").text(item.country);
    let shape = tr.append("td").text(item.shape);
    let durationMinutes = tr.append("td").text(item.durationMinutes);
    let comments = tr.append("td").text(item.comments);
  })
}

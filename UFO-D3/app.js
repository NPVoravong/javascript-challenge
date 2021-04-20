const tableData = data;

function buildTable(d){
    let selection = d3.select("#ufo-tbody").selectAll("tr").data(d)
    selection.exit().remove();
    selection
    .enter()
    .append("tr")
    .merge(selection)
    .html(addData);
    function addData(row, i){
        return `<td> ${row.datetime} </td>
        <td> ${row.city} </td>
        <td> ${row.state} </td>
        <td> ${row.country} </td>
        <td> ${row.shape} </td>
        <td> ${row.durationMinutes} </td>
        <td> ${row.comments} </td>
        `;
    }
}

buildTable(data)

// const button_filter = d3.select("#filter-btn").on("click", runFilter);
// const button_reset = d3.select("#reset-btn").on("click", buildTable(data));
// const form = d3.select("#form").on("submit", runFilter);

// function runFilter() {
//   let user_input = d3.selectAll(".form-control");
//   let input_val = user_input.property("value");

//   let result = data.filter((item) => item.datetime === input_val);
//   console.log(result);

//   buildTable(result);
// }

var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}

function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  }

d3.selectAll(".filter").on("change", updateFilters);

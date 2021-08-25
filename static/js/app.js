const samples = "./static/data/samples.json";

// Fetch the JSON data and console log it
d3.json(samples).then(function(data) {
  console.log(data);
});
// fetch("data.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log("error" + err);
//   });

// Fetch template
// The fetch will return a promise.
// The then will run the JSON data when it's fetched.
// The catch function will run if there are any errors.
// file/url
// fetch()
//   .then(function (response) {
//     // The JSON data.
//   })
//   .catch(function (err) {
//     // The error
//   });

// The fetch code
// fetching the data.json file
fetch("data.json")
  // Runs the response
  .then(function (response) {
    // To extract JSON data the function runs json()
    // .json() returns a promise
    return response.json();
  })
  // Retrives the JSON data as a parameter
  .then(function (data) {
    // This function will append the JSON to html.
    appendData(data);
  })
  // logs the error message to the console.
  .catch(function (err) {
    console.log("error" + err);
  });

function appendData(data) {
  // Finds the div
  let dataContainer = document.getElementById("dataDiv");

  // Appends the data to the page
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = data[i].title;
    dataContainer.appendChild(div);
  }
}

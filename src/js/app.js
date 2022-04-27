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

  // Appends the data to the page
  for (let i = 0; i < data.length; i++) {
    const dataCont = document.createElement("div");
    dataCont.className = "container";

    const bgCont = document.createElement("div");
    bgCont.classList.add("bg", "image" + i);

    const statsCont = document.createElement("div");
    statsCont.className = "stats";

    const titleCont = document.createElement("div");
    titleCont.className = "title";
    const timeCont = document.createElement("div");
    timeCont.className = "time";

    const dailyCurrent = document.createElement("p");
    dailyCurrent.className = "dailyCurr";
    const dailyPrevious = document.createElement("p");
    dailyPrevious.className = "dailyCurr";

    dailyPrevious.innerHTML = data[i].timeframes.daily.previous + "hrs";
    dailyCurrent.innerHTML = data[i].timeframes.daily.current + " hrs";

    titleCont.innerHTML = data[i].title;

    document.body.appendChild(dataCont);
    dataCont.appendChild(bgCont);
    dataCont.appendChild(statsCont);
    statsCont.appendChild(titleCont);
    statsCont.appendChild(timeCont);
    timeCont.appendChild(dailyCurrent);
    timeCont.appendChild(dailyPrevious);

    //dataContainer.appendChild(titleCont);
  }
}

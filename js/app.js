// class
const ui = new UI();
const newsAPI = new News();

// listeners
eventListeners();
function eventListeners() {
  //  get values from form
  document.querySelector("#newsForm").addEventListener("submit", search);
}

// function
function search(e) {
  e.preventDefault();

  //getting  the value of search's context
  const newsName = document.querySelector("#searchName").value;
  //getting  the value of country
  const country = document.querySelector("#selectCountry").value;
  //getting  the value of category
  const category = document.querySelector("#selectCategory").value;
  // getting the value of  language
  const language = document.querySelector("#selectLanguage").value;

  if (newsName !== "" || country !== "" || category !== "") {
    //  if all fields are not empty
    newsAPI.queryAPI(newsName, country, category, language).then((news) => {
      //  get a array of news
      const newsArray = news.news.articles;
      if (newsArray.length > 0) {
        //  if there are an array of news
        ui.showNews(newsArray);
      } else {
        //  if new's array is empty
        ui.printMessage(
          "There is not any news based on this search",
          "alert alert-danger mt-4 text-center"
        );
      }
    });
  } else {
    //  when all fields are empty
    ui.printMessage(
      "Please fill out at least one input",
      "alert alert-danger mt-4 text-center"
    );
  }
}

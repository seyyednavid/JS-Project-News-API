class UI {
  constructor() {
    //  getting result div for showing result
    this.result = document.querySelector("#result");
  }
  //  showing message
  printMessage(message, className) {
    //  create a div tag
    const div = document.createElement("div");
    //  add message to div tag
    div.appendChild(document.createTextNode(message));
    //  add class names to div tag
    div.classList = className;
    //  show the message into html
    document.querySelector("#message").appendChild(div);
    //   call the remove message method to remove message after awhile
    this.result.innerHTML = "";
    this.removeMessage();
  }

  // removing message
  removeMessage() {
    setTimeout(() => {
      //  remove each tag including alert class after 3 seconds
      document.querySelector(".alert").remove();
    }, 3000);
  }

  //   show result into the html
  showNews(news) {
    //  reset result after pressing search bottom
    this.result.innerHTML = "";
    //  show array of news array in result div
    news.forEach((newsInfo) => {
      this.result.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card">
                         <div class="card-body">
                             <h3 class="card-title text-center">${newsInfo.title.split(
                               "-",
                               1
                             )}</h3>
                             <p class="card-text text-danger ">News Information : </p>
                              <span class="badge bg-info text-dark">Source: ${
                                newsInfo.source.Name
                              }</span>
                              <span class="badge bg-warning text-dark ">Data & Time: ${
                                newsInfo.publishedAt
                              }</span>
                              <br><br>
                             <a href="${
                               newsInfo.url
                             }" target="_blank" class="btn btn-primary d-block">complete news</a>  
                        </div>
                    </div>
                </div>
            `;
    });
  }
}

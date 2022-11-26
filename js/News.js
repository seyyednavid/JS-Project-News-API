class News {
  constructor() {
    this.APIkey = "2729d914a2544c90b8edad342806c7d0";
  }

  //   send url to API
  async queryAPI(newsName, country, category, language) {
    //  create URL
    let url = "https://newsapi.org/v2/";

    //  check the country and category inputs
    if (country === "" && category === "") {
      url += "everything?";
    } else {
      url += "top-headlines?";
    }

    //   if newsName exist
    if (newsName !== "") {
      url += `q=${newsName}&`;
    }

    //   if country exist
    if (country !== "") {
      url += `country=${country}&`;
    }

    //   if category exist
    if (category !== "") {
      url += `category=${category}&`;
    }

    //  complete url with language
    if (language !== "") {
      url += `language=${language}&`;
    }

    //  complete url with key
    url += `apiKey=${this.APIkey}`;

    //  fetch url and get the response
    const newsResponse = await fetch(url);
    const news = await newsResponse.json();
    return {
      news,
    };
  }
}

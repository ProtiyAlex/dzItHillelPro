class Model {
  constructor(url) {
    this.baseUrl = url;
    //this.data = {};
  }

  setData(data) {
    return Object.assign(this, data);
  }

  delete() {
    return fetch(this.baseUrl + "/" + this.id, {
      method: "DELETE",
    });
  }

  create(title) {
    const todo = { title: title, isDone: false };
    // console.log(this.baseUrl);
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then((resp) => resp.json());
  }
}

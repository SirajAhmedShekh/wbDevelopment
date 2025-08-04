let dataBase = JSON.parse(localStorage.getItem("sirajTodo")) || [];

console.log(dataBase);

const myTodo = () => {
  const userName = document.querySelector("#userName").value;

  if (!userName) return ;

  let objData = {
    id: Date.now(),
    name: userName,
  };

  dataBase.push(objData);

  localStorage.setItem("sirajTodo", JSON.stringify(dataBase));


  loadItam();
};

const loadItam = () => {
  let mainDiv = document.querySelector("#dataShow");

  dataBase.map((element) => {
    let div = document.createElement("div");
    let id = document.createElement("h1");
    let text = document.createElement("h3");
    let btn_1 = document.createElement("button");
    let btn_2 = document.createElement("button");

    id.innerText = element.id;
    text.innerText = element.text;
    btn_1.innerText = "edit";
    btn_2.innerText = "delete";

    div.classList.add("dataDiv");

    div.append(id, text, btn_1, btn_2);

    mainDiv.append(div);
  });
};

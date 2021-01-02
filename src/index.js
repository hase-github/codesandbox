import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストからから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div"); //DOM生成
  div.className = "list-row"; //生成したDOM(divタグ)にclassを付与
  //console.log(div);
  //alert(inputText);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text; //タグの間にテキストを設定（入力したTODOを設定）
  //console.log(li);

  //buttonタグ生成（完了）
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    //console.log(addTarget);

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成（戻す）
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      //完了のリスト(ulの子要素)から削除
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;

      //未完了リストに追加
      createIncompleteList(text);
      //console.log(text);
    });

    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(backButton);

    //未完了のリスト(ulの子要素)に追加
    document.getElementById("complete-list").appendChild(div);

    //alert("完了");
  }); //クリックイベントを付与

  //buttonタグ生成（削除）
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    /** 下記の内容を上記で関数化 
     * const deleteTarget = deleteButton.parentNode; //親タグを取得
    //console.log(deleteTaeget)

    //未完了のリスト(ulの子要素)から削除
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    */

    //alert("削除");
  }); //クリックイベントを付与

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //console.log(div);

  //未完了のリスト(ulの子要素)に追加
  document.getElementById("incomplete-list").appendChild(div);
};

//追加ボタンのイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//

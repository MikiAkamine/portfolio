// このファイルに処理を記述する
// 16.配列をつくる
// let data = ['食べる', '寝る', '遊ぶ'];
// 17.コンソールに配列の中身を出す
// for (const d of data) {
//   createTask(d);
// }
// 1. ボタン要素を取得
let btn = document.getElementById('btn');
// console.log(btn);
// 2. ボタンにクリックイベントを追加する (3-15は全てこのイベント内)
btn.addEventListener('click', function () {
  // 2.5input を取得
  let input = document.getElementById('input');
  // 3. ユーザーが入力した内容 (value) を取得し、定数(変数)に代入
  let task = input.value // input.textContent
  // 16. 空の時以外以下の処理をする
  if (task != '') {
    createTask(task);
    // 20.その後追加されたタスクを配列にPUSHする
    // data.push(task);
  }
});
// 18.関数を作る（関数にしただけで問題なく動くか確認）←　どの番号からどの番号までが同じ処理になるの？4番から15番まで
function createTask(item) {
  // 4. <li>要素を作成
  let li = document.createElement('li');
  // 5. <li>にクラス（list）を追加
  li.classList.add('list');
  // 6. <li>にユーザーが入力した内容(3)を入れる
  li.textContent = item;
  // 7. <ul>要素を取得 (todo-list)
  // let parent = document.getElementsByClassName('todo-list');
  let parent = document.querySelector('.todo-list');
  // 8. 4-6で作成した<li>を、7で取得した<ul>の子要素に入れる
  parent.appendChild(li);
  // 9. inputの中に入力された文字を消去する（値を''にする）
  input.value = '';
  // task = '' と書きたくなるが自分で作った箱を空にしているだけ;
  // 10. Deleteボタンを作成（機能としてはボタンですが、<div>要素を使います）
  let trash = document.createElement('div');
  // 11. Deleteボタンのコンテンツ (文字) を指定
  trash.textContent = "Delete";
  // 12. Deleteボタンにクラス (delete) を追加
  trash.classList.add('delete');
  // 13. 10-12で作成したDeleteボタンを、4-6で作成した<li>の子要素に入れる
  li.appendChild(trash);
  // 14. Deleteボタンにクリックイベントを追加 (15)
  trash.addEventListener('click', function () {
    // 15. クリックした要素 (this) を親ごと削除
    // this.parentElement.remove();
    li.remove();
  })
}
// Localstorageの説明
// 16.配列をつくる
// 18.関数を作る（関数にしただけで問題なく動くか確認）←　どの番号からどの番号までが同じ処理になるの？4番から15番まで
// 18.5 引数無しの関数を一回実施、その後引数あり関数に変更
// 19.関数使ってリロード時に配列の中身を出すようにする。
// 20.その後追加されたタスクを配列にPUSHする
// 21.配列をローカルストレージに保存する
// 21.5 保存するにはJSON化で文字列に！
// 22.保存されたものをリロードじ取り出し、④を行う
// 23.配列の中身が空だった時の条件を付け加える
// 24.削除した時に配列からも削除するようにする
// 25.削除後の内容をローカルストレージに保存
# Todo Tutorial

## 準備
- 作業用のリモートリポジトリをGitHubに作成します
- (Windowsの人はUbuntuの仮装環境を用意します)

### 目標
ToDoアプリをHTML/CSS/JSを用いて作成すること

### デザイン・仕様
http://todomvc.com/examples/react/#/
- TODOアイテムのリスト化
- TODOアイテムの作成・編集・削除
- TODOアイテムの絞り込み

### ファイルの構成
``` text
todos/
  .gitignore
  index.html
  assets/
    index.js
    index.css
```

### デバックの方法
phpのビルドインサーバを使用します
`php -S localhost:8000`


## Step 1
- 1-1. 準備及び、示されたファイル構成の通りに空のファイルを作成する
- 1-2. index.htmlを編集し、Hello Worldを表示する
- 1-3. jsのインポート、cssのインポートを行う
- 1-4. 「Todos」のタイトルを作成し、中央配置する 
  指定：タイトルはh1タグで作成すること
  指定：CSSでフォントを「Helvetica Neue」「Helvetica」「Arial」「sans-serif」の順に設定すること
  指定：フォントサイズを「100px」、フォントの太さを「100」にすること
- 1-5. タイトルの下にTODOアイテムを入力するためのInputエレメントを作成
  指定：例のように、inputをcssでスタイリングすること
  指定：Flexを用いて、タイトルと入力項目を中央配置すること

## Step 2 - 3
jsを用いてアイテムの追加
- (step2) リストの作成  
画像のように、Todoのアイテムを表示するリストを作りましょう。画像のように再現することができればいいです。
指定：ulタグとliタグを利用して作成すること。
指定：ブレット（段落の「・」みたいなやつ）が出た場合は消すこと。
指定：リストをホバーすると表示されるバツボタンを作成すること。
- (step3) リストの追加  
作成したinput要素から、値を入力してリストに追加できるようにしましょう。
指定：エンターキーを押すことでリストを追加するようにすること。
<img alt="Step2" src="https://github.com/tea-app/tutorial-todo/blob/master/img/step2.png" width="320px">

## Step 4 - 5
Todoアイテムの編集と削除する機能の作成
添付画像のように以下の機能を作成します
- (step4) Todoアイテムをリストから削除する機能
- (step5) Todoが終了したことを示す機能
> デザインは画像の通りでなくてもよい。
<img alt="Step4" src="https://github.com/tea-app/tutorial-todo/blob/master/img/step4.png" width="320px">

# Step 6 - 7
Todoアイテムの絞り込み機能
- (step6) All/Active/Completedのスタイルの作成
- (step7) Allは全てのタスクを表示し、Activeでは未完了のタスクのみを表示。Completedは完了済みのタスクを表示します。
<img alt="Step6-1" src="https://github.com/tea-app/tutorial-todo/blob/master/img/step6-1.png" width="320px">
<img alt="Step6-2" src="https://github.com/tea-app/tutorial-todo/blob/master/img/step6-2.png" width="320px">

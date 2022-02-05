// classの学習
// 与えられた文字列を装飾するクラス
class TextDecorator {
  // コンストラクタ。newされた時に呼ばれる
  constructor(name) {
    console.log('コンストラクタが呼ばれた');
    this.name = name;
  }

  // メソッド
  decorate() {
    console.log(`decorateが呼ばれた：${this.name}`);
    return `☆★☆${this.name}☆★☆`;
  }
}

const td = new TextDecorator('OK!');
// td.decorate();
console.log(td.name);
const str = td.decorate();
console.log(str);
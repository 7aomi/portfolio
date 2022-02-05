// ストップウォッチ
function stopWatch(options = {}) {


  // ログを表示
  const addMessage = (message) => {
    const messageElm = document.createElement('div');
    const now = new Date();

    messageElm.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒：${message}`
    messageElm.classList = ['message'];
    logElm.appendChild(messageElm);
  }

  // options
  // options = options || {}; //不要になる
  const color = options.color || 'lightblue';
  const backgroundColor = options.backgroundColor || 'black';
  const displayElm = document.getElementsByClassName('display')[0];
  displayElm.style.color = color;
  displayElm.style.backgroundColor = backgroundColor;

  const logElm = document.querySelector('.log');
  let timer = null;
  const startButton = document.getElementsByClassName('startButton')[0];

  // startクリックで開始
  startButton.addEventListener('click', function () {

    if (timer === null) {
      let seconds = 0;
      timer = setInterval(function () {
        seconds++;
        displayElm.innerText = seconds;
      }, 1000);
      stopButton.classList.remove('is-disabled');
      startButton.classList.add('is-disabled');
      addMessage('開始');
    }
  });

  const stopButton = document.getElementsByClassName('stopButton')[0];
  // 初期表示
  stopButton.classList.add('is-disabled');

  stopButton.addEventListener('click', () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      startButton.classList.remove('is-disabled');
      stopButton.classList.add('is-disabled');
      addMessage('終了');
      displayElm.innerText = 0;
    }
  });
}

var options = {
  color: 'limegreen',
  backgroundColor: '#333'
};

stopWatch();
// stopWatch(options);


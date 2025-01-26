// 倒计时

let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

countDown();
setInterval(countDown, 1000);

function countDown() {
  // 获取当前年份
  let currentYear = new Date().getFullYear();

  // 创建一个 Date 对象，表示新年
  let newYearDate = new Date(currentYear + 1, 0, 1);

  // 获取当前时间
  let nowTime = +new Date();

  // 计算两个日期之间的差异（以毫秒为单位）
  let timeDifference = newYearDate - nowTime;

  // 将差异转换为天数
  let daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // 计算剩余的小时数
  let hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // 计算剩余的分钟数
  let minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // 计算剩余的秒数
  let secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // 输出结果
  day.innerHTML = daysRemaining < 10 ? '0' + daysRemaining : daysRemaining;
  hour.innerHTML = hoursRemaining < 10 ? '0' + hoursRemaining : hoursRemaining;
  minute.innerHTML = minutesRemaining < 10 ? '0' + minutesRemaining : minutesRemaining;
  second.innerHTML = secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining;
}
document.querySelector('.box').addEventListener('click', function () {
  console.log('点了也没有效果哦')
})
document.querySelector('.btn').addEventListener('click', function () {
  // 获取当前年份
  let currentYear = new Date().getFullYear();

  // 创建一个 Date 对象，表示新年
  let newYearDate = new Date(currentYear + 1, 0, 1);
  let nowTime = +new Date();
  if (newYearDate - nowTime > 0) {
    console.log('还没到时间哦');
  } else {
    console.log('哈哈哈哈元旦快乐');
  }
  setTimeout(function () {
    console.log('等待半秒钟跳转');
    location.href = './yh/index.html';
  }, 500);

})
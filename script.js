document.getElementById('fortuneBtn').addEventListener('click',function(){
  const msgs=[
    '恭喜发财，红包拿来！',
    '财源滚滚，金银满屋！',
    '新春大吉，生意兴隆！',
    '财富翻倍，生活甜蜜！'
  ];
  const txt=msgs[Math.floor(Math.random()*msgs.length)];
  const p=document.getElementById('fortuneText');
  p.textContent=txt;
  p.classList.remove('hidden');
});

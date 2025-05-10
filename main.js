const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const plyer={
  x: canvas.width / 2 - 20,
  y: canvas.height - 60,
  width: 40,
  height: 40,
  speed: 5,
};

const enemies = [];
const sood = [];

//押したとき
document.addEventListener('keydown',(e)=>{
    keys[e.code]=true;
});

//引いたとき
document.addEventListener('keyup',(e)=>{
    keys[e.code] = false;
});

//プレイヤーの描画
function drawplyer(){
    ctx.fillStyle='blue';
    ctx.fillRect(plyer.x, plyer.y, plyer.width, plyer.height);
}

//
function drawEnemies(){
    ctx.fillStyle = 'red';
    ctx.fillRect(enemies.x, enemies.y, enemies.width, enemies.height);
}
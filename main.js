const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player={
  x: canvas.width / 2 - 20,
  y: canvas.height - 60,
  width: 40,
  height: 40,
  speed: 5
};

const enemies = [];
const sood = [];
const block = {
    x: canvas.width/2-10,
    y: canvas.height-50,
    width:30,
    height:30,
};

//押したとき
//document.addEventListener('keydown',(e) => keys[e.code]=true);

//引いたとき
//document.addEventListener('keyup',(e) => keys[e.code] = false);

//プレイヤーの描画
function drawPlayer(){
    ctx.fillStyle='blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

//剣の描画
function drawSood(){
    ctx.fillStyle = 'orange';
    ctx.fillRect(sood.x, sood.y, sood.width, sood.height);
}

//敵の描画
function drawEnemies(){
    ctx.fillStyle = 'red';
    ctx.fillRect(enemies.x, enemies.y, enemies.width, enemies.height);
}


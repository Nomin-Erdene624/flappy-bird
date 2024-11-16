document.addEventListener('DOMContentLoaded',()=>{
	const bird=document.querySelector('.bird');
	const ground=document.querySelector('.ground');
	const game=document.querySelector('.game');
	
	let birdLeft=220;
	let birdBottom=300;
	let gravity= 2;
	let isGameOver=false;
	
	function startGame(){
		birdBottom = birdBottom - gravity;
		bird.style.left=birdLeft+'px';
		bird.style.bottom=birdBottom+'px';
	}
	let timer=setInterval(startGame,15);
	function jump(){
		if(birdBottom<400){
			birdBottom=birdBottom+ 50;
		}
		bird.style.bottom=birdBottom+"px";
	}
	document.addEventListener('keyup',jump);
	function randomBlock(){
		let blockLeft=500;
		let blockBottom=Math.random()*60;
		let block= document.createElement('div');
		if(isGameOver==false){
			block.classList.add('block');
		}
		game.appendChild(block);
		block.style.left=blockLeft+'px';
		block.style.bottom=blockBottom+'px';
		//move block
		function moveBlock(){
			blockLeft = blockLeft- 2;
			block.style.left=blockLeft+'px';
			if(blockLeft == -60){
				clearInterval(timeBlock);
				game.removeChild(block);
			}
			if(birdBottom==0 || blockLeft>200 && blockLeft<280 && birdLeft==220 && birdBottom<blockBottom+180){
				gameOver();
				clearInterval(timeBlock);
			}
		}
		let timeBlock=setInterval(moveBlock,15);
	}
	 if(isGameOver==false){
		 setInterval(randomBlock,2000);
	 }
	function gameOver(){
		isGameOver=true;		
		clearInterval(timer);
		document.removeEventListener('keyup',jump);
		
	}
});
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');

window.addEventListener('keydown',function(e){
	if(e.key==='ArrowDown'){	
	  const currTop = exact(avatar.style.top)
	  avatar.style.top = `${currTop+50}px`
	} else
	if(e.key==='ArrowUp'){	
		const currTop = exact(avatar.style.top)
		avatar.style.top = `${currTop-50}px`
	  } else
	  if(e.key==='ArrowLeft'){	
		const currLeft = exact(avatar.style.left)
		avatar.style.transform='scale(-1,1)'
		avatar.style.left = `${currLeft-50}px`
	  }else
	  if(e.key==='ArrowRight'){	
		const currLeft = exact(avatar.style.left)
		avatar.style.transform='scale(1,1)'
		avatar.style.left = `${currLeft+50}px`
	  }
	  if(isTouching(avatar,coin)) moveCoin();
})

const exact = (pos)=> {
	if(!pos) return 100;
	 return parseInt(pos.slice(0,-2));
}
const coin = document.querySelector('#coin');
const moveCoin = ()=>{
	const coinHeight = Math.floor(Math.random() * window.innerHeight); 
	const coinWidth = Math.floor(Math.random() * window.innerWidth); 
	coin.style.top=`${coinHeight}px`
	coin.style.left=`${coinWidth}px`

}
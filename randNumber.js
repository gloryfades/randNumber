function flip(){
	return Math.random() >= 0.5;
}
function findPow(n){
	let i = 0;
	let max = 1;
	while(1){
		max*=2
		i++;
		if(max>=n){
			break;
		}
	}
	return i;
}
function randBits(N){
	let ret = 0;
	let mask = 1;
	for(let i = 0; i < N; i++){
		if(flip()){
			ret |= mask;
		}
		mask <<= 1;
	}
	return ret;
}
function randomNumber(n){
	let ret;
	let pow = findPow(n);
	while(1){
		ret = randBits(pow);
		if(ret < n) break;
	}
	return ret;
}

 
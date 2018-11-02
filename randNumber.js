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
	if(n >= 1000000 || n <= 0){
		throw "n must be > 0 and < 1000000";
	}
	let ret;
	let pow = findPow(n);
	while(1){
		ret = randBits(pow);
		if(ret < n) break;
	}
	return ret;
}

 

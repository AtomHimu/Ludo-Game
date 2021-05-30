const myfunc =() =>{
 	var randfor1=Math.floor(Math.random()*6)+1;
 	var randfor2=Math.floor(Math.random()*6)+1;
 	
 	document.getElementById('dice1').setAttribute('src',`images/dice${randfor1}.png`);
 	document.getElementById('dice2').setAttribute('src',`images/dice${randfor2}.png`);

 	if(randfor1>randfor2){
 		document.querySelector('h1').innerHTML="Player 1 Won !!!!";
 		// console.log(document.getElementById('heading').value);

 	} 
 	else if(randfor2>randfor1){
 		document.querySelector('h1').innerHTML="Player 2 Won !!!!";
 		// console.log(document.getElementById('heading').value);
 	}	
 	else{
 		document.querySelector('h1').innerHTML="Draw";
 		// console.log(document.getElementById('heading').value);
 	}
 } 	
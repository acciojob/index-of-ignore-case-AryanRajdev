function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let n1 = s1.length;
	let n2 = s2.length;
	
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let ans = -1;

    for(let i =0 ; i<=n1-n2 ; i++){
		let str = s1.slice(i,i+n2);
		if(str === s2){
			ans = i;
			break;
		}
	}
	return ans;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

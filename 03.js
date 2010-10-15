require('sys').print((function(arr){
	var list = arr.sort(function(a, b){return a - b;});
	var subsets = function(arr, len){
		if (len === 1) return arr.map(function(x){return [x]});
		var results = [], lcv, loop_len = arr.length - len + 2, curr = arr[0];
		for (lcv = 1; lcv < loop_len; lcv += 1){
			subsets(arr.slice(lcv), len - 1).map(function(x){results.push([curr].concat(x));});
			curr = arr[lcv];
		};
		return results;
	};
	var viable = function(l){
		return l.slice(0, l.length - 1).reduce(function(x, y){return x + y}) === l[l.length - 1];
	};
	var answer = 0, lcv, upper = 2, partial = 0, last = list.length - 1;
	for (lcv = 0; lcv < last; lcv += 1) if (list[last] >= (partial = partial + list[lcv])) upper += 1; else break;
	for (lcv = 3; lcv < upper; lcv += 1) answer += subsets(list, lcv).filter(viable).length;
	return answer;
})([3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99]) + '\n');
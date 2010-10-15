Number.prototype.divisors = function(){
    var divisors = [];
    for (var lcv = 1; lcv < Math.floor(this / 2); lcv += 1){
        if (this % lcv === 0){
            divisors.push(lcv);
            divisors.push(this / lcv);
        };
    };
    divisors = divisors.sort(function(a, b){return a - b;});
    var return_array = [divisors[0]];
    var length = divisors.length;
    var temp = divisors[0];
    for (var lcv = 1; lcv < length; lcv += 1){
        if (divisors[lcv] === temp) continue;
        temp = divisors[lcv];
        return_array.push(divisors[lcv]);
    };
    return return_array;
};
var is_prime = (function(){
    var primes = {2: null};
    var not_primes = {};
    return function(num){
        if (num in primes) return true;
        if (num in not_primes) return false;
        if (num < 2) return false;
        if (!(num % 2)) return false;
        var lcv;
        for (lcv = 3; Math.floor(num / lcv) + 2 > lcv; lcv += 2){
            if (num % lcv === 0){
                not_primes[num] =  null;
                return false;
            };
        };
        primes[num] = null;
        return true;
    };
})();
var len, active = true, fibs = [0, 1, 1];
while (active){
	len = fibs.length;
	fibs[len] = fibs[len-1] + fibs[len-2];
	if (fibs[len] > 227000){
		if (is_prime(fibs[len])) active = false;
	};
}
require('sys').print((fibs[fibs.length - 1] + 1).divisors().filter(is_prime).reduce(function(x, y){return x + y}) + '\n');
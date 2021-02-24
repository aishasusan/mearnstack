//l=5 up=30
//5.......30
function primeLimit(l, u) {
    for (var i = l; i <= u; i++) {
        let f = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                f = 1;
                break;
            }
        }
        if (f == 0) {
            console.log(i + " is prime");
        }

    }

}

primeLimit(3, 50);

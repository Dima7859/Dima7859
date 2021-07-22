//!!!!!!!!!!!!exercise1!!!!!!!!!!!!!!


const arrspl = [1, 2, 3, 4, 5];

console.log(arrspl);

arrspl.splice(1, 2);

console.log(arrspl);


//!!!!!!!!!!!!exercise2!!!!!!!!!!!!!!


let arrrev = '5 454 458 54148 98 32121';
console.log(arrrev);

arrrev = arrrev.split(' ');
arrrev.reverse();
arrrev = arrrev.join(' ')

console.log(arrrev);


//!!!!!!!!!!!!exercise3!!!!!!!!!!!!!!


let arrrevfor = '6754 3459 73056 323 657 34';

console.log(arrrevfor);

function revfunc (ver){
    if (Array.isArray(ver)) {
        let arr = [];

        for (let i = ver.length -1 ; i >= 0; i--) {
            arr.push(ver[i]);
        }

        return arr;

    } else {
        ver = ver.split(' ');

        let arr = [];

        for (let i = ver.length -1 ; i >= 0; i--) {
            arr.push(ver[i]);
        }

        arr = arr.join(' ')

        return arr;
    }
}


arrrevfor = revfunc(arrrevfor);


//!!!!!!!!!!!!exercise4!!!!!!!!!!!!!!


console.log(arrrevfor);

const arrtrue1 = [45, 78, 2134, 2346, 723, 56];
const arrtrue2 = [45, 78, 2134, 2346, 723, 56];
const arrtrue3 = [45, 78, 2134, 2346, 723, 56, 86];
const arrtrue4 = [45, 78, 2134, 234, 723, 56,];

function true_false(ver1, ver2){
    let yes = true;
    let no = true;

    for (let i = 0; i < ver1.length; i++) {
        if (ver1[i] == ver2[i] && ver1[i + 1] == ver2[i + 1]) {
            yes = true;
        }else {
            no = false;
        }
    }

    console.log(yes == no);
}

true_false(arrtrue1, arrtrue2);
true_false(arrtrue3,arrtrue4);


//!!!!!!!!!!!!exercise5!!!!!!!!!!!!!!


let arrfizz = [];

function funarrrfizz(ver){

    for (let i = 0; i <= 100; i++) {
        arrfizz[i] = i;
            if ((arrfizz[i] % 3 == 0) && (arrfizz[i] % 5 !== 0)) {
            arrfizz[i] = 'Fizz';
        } else if ((arrfizz[i] % 5 == 0) && (arrfizz[i] % 3 !== 0)) {
            arrfizz[i] = 'Buzz';
        } else if ((arrfizz[i] % 3 == 0) && (arrfizz[i] % 5 == 0)) {
            arrfizz[i] = 'FizzBuzz';
        }
    }

    console.log(arrfizz);

}

funarrrfizz(arrfizz);



//!!!!!!!!!!!!exercise6!!!!!!!!!!!!!!



let chess = ['#', ' ', '#', ' ', '#', ' ', '#', ' '];
const strok = 7 ;
let chessrev = revfunc(chess);


for (let i = 0; i <= strok; i++) {
    if (i % 2 !== 0) {
        console.log(chessrev.join(''));
    }else {
        console.log(chess.join(''));
    }
}

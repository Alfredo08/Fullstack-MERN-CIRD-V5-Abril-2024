
/*
    1. ()
    2. !
    3. * / %
    4. + -
    5. < > <= >=
    6. === !==   
    7. && ||
    8. = ++ -- += -= /= x/ %=
*/

let resultado = (4 * 2 + 6) + 7 / 3 - 5;
                //(8 + 6) + 7 / 3 - 5
                //    14 + 7 / 3 - 5
                //    14 + 2.33 - 5
                //        11.33
console.log(resultado);

let expresion = !((4 * 5) / 2 + 7 > 12 / 3 * 7 % 6 && 25 / 5 === 3 + 2);
                // !(20 / 2 + 7 > 12 / 3 * 7 % 6 && 25 / 5 === 3 + 2)
                //  !(10 + 7 > 4 && 5 === 3 + 2)
                //   !(17 > 5 && 5 === 5)
                //    !(true && 5 === 5)
                //     !(true && true)   
                //         !true
                //         false
console.log(expresion);

let expresion2 = 5 === "5";
console.log(expresion2);


                
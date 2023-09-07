const { gets, print } = require('./funcoes-auxiliares');

const salario = gets();
const beneficio = gets();

if (salario > 0.00 && salario <= 1100.00) {
    print((salario - (salario * (5 / 100))) + beneficio);
} if (salario > 1100.01 && salario <= 2500.00) {
    print((salario - (salario * (10 / 100))) + beneficio);
} if (salario > 2500.01) {
    print((salario - (salario * (15 / 100))) + beneficio);
}
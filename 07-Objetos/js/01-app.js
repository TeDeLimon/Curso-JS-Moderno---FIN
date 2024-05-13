// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

// Podemos crear un objeto que agrupe toda esta información en una sola variable 

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

const camisetas = {
    Nike: [],
    Reebook: []
};

const tallas = ["S", "M", "L", "XL"];
const tallasObjeto = {
    0: "S",
    1: "M",
    2: "L",
    3: "XL"
};

console.log('camisetas :>> ', camisetas);
console.log('tallas :>> ', tallas);
console.log('tallasObjeto :>> ', tallasObjeto);

console.log('producto.nombre :>> ', producto.nombre);
console.log('producto[nombre] :>> ', producto["nombre"]);

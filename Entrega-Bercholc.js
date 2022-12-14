class ProductManager {
    constructor(products) {
        this.products = []
    }
    addProduct(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) {
        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        if (
            title === undefined ||
            description === undefined ||
            price === undefined ||
            thumbnail === undefined ||
            code === undefined ||
            stock === undefined
        ) {
            return console.log("Todos los campos son obligatorios");
        }
        let condition = this.products.find((product) => product.code === code);
        if (condition) {
            return console.log("El producto ya existe");
        } else {
            this.products.push(product)
        }
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        let myID = parseInt(id);
        let miProducto = null;
        this.products.forEach((product) => {
            if (product.id === myID) {
                miProducto = product;
            }
        });
        if (miProducto === null) {
            return console.log("No existe el producto");
        } else {
            return miProducto;
        }
    }
}

const productManager = new ProductManager();
console.log(productManager.getProducts());

productManager.addProduct(
  "Vestido Wave Rosa",
  "Vestido de microtul línea Wave",
  6300,
  "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/vestido-wave-rosa_n2dzn2.jpg",
  "329",
  9
);
console.log(productManager.getProducts());

productManager.addProduct(
    "Vestido Wave Rosa",
    "Vestido de microtul línea Wave",
    6300,
    "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/vestido-wave-rosa_n2dzn2.jpg",
    "329",
    9
  );

console.log(productManager.getProductById(1));

productManager.getProductById(2);
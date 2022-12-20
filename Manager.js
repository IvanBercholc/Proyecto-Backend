import ProductManager_External from "./ProductManager.js";

const ProductManager = new ProductManager_External("./products.json", []);

const manageProductManager = async () => {
    await ProductManager.addProduct({
        title: "Vestido Wave",
        description: "Vestido Microtul",
        price: 5800,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308950/rica-assets/vestido-wave_jjnrbi.jpg",
        code: "239",
        stock: 5,
      });
      await ProductManager.addProduct({
        title: "Cancan Wave",
        description: "Cancan Microtul",
        price: 3400,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/cancan-wave_jldifa.jpg",
        code: "467",
        stock: 4,
      });
      await ProductManager.addProduct({
        title: "Microtop Wave",
        description: "Microtop Microtul",
        price: 2400,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308952/rica-assets/microtop-wave_ue5c7j.jpg",
        code: "934",
        stock: 2,
      });
      await ProductManager.addProduct({
        title: "Polera Cuin Azul",
        description: "Polera Microtul",
        price: 2700,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/polera-cuin-azul_nkdhfc.jpg",
        code: "431",
        stock: 6,
      });
      await ProductManager.addProduct({
        title: "Cancan Cuin Marron",
        description: "Cancan Microtul",
        price: 3400,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308950/rica-assets/cancan-cuin-marron_vw89yn.jpg",
        code: "249",
        stock: 5,
      });
      await ProductManager.addProduct({
        title: "Cancan Cuin Azul",
        description: "Cancan Microtul",
        price: 3400,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308950/rica-assets/cancan-cuin-azul_uiizex.jpg",
        code: "146",
        stock: 3,
      });
      await ProductManager.addProduct({
        title: "Polera Cuin Marron",
        description: "Polera Micrtoul",
        price: 2700,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/polera-cuin-marron_wx30ap.jpg",
        code: "296",
        stock: 7,
      });
      await ProductManager.addProduct({
        title: "Cancan Liga Negra",
        description: "Cancan Microtul",
        price: 3400,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308950/rica-assets/cancan-liga-negra_g10uo1.jpg",
        code: "694",
        stock: 9,
      });
      await ProductManager.addProduct({
        title: "Polera Oxido Negra",
        description: "Polera Microtul",
        price: 2700,
        thumbnail: "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/polera-oxido-negra_zeyfmn.jpg",
        code: "477",
        stock: 6,
      });

      const products = await ProductManager.getProducts();
  console.log(products);

  const product = await ProductManager.getProductById(3);
  console.log(product);

  await ProductManager.updateProduct(
    2,
    "Cancan Oxido Ocre",
    "Cancan Microtul",
    3400,
    "https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/cancan-oxido-ocre_ftirip.jpg",
    "987",
    5
  );

  await ProductManager.deleteProduct(2);
  await ProductManager.deleteProduct(4);
  await ProductManager.deleteProduct(5);
  await ProductManager.deleteProduct(6);

  const products4 = await ProductManager.getProducts();
  console.log("products 4", products4);
};

manageProductManager();

export const getAllProducts = async () => {
    const products = await ProductManager.getProducts();
    return products;
  };
  
  export default ProductManager;
import {ProductModel} from "../models";
import {IMAGES_PRODUCT} from "../assets";

/**
 * Service class to manager products.
 * @author Ronald Tchuekou
 */
export class ProductService {
   
   products: ProductModel[] = []
   
   constructor() {
      this.products = [
         {
            id: 'casque',
            name: "Casque Audio",
            description: "",
            price: 12000,
            image: IMAGES_PRODUCT.casqueAudio,
            category: "accessoire"
         },
         {
            id: 'vernie',
            name: "Vernie Rouge",
            description: "",
            price: 2500,
            image: IMAGES_PRODUCT.vernieRouge,
            category: "mode"
         },
         {
            id: 'apple',
            name: "Apple Watch Série 7",
            description: "",
            price: 76000,
            image: IMAGES_PRODUCT.appleWatch,
            category: "accessoire"
         },
         {
            id: 'appareil-photo',
            name: "Appareil Photo",
            description: "",
            price: 30000,
            image: IMAGES_PRODUCT.appareilPhoto,
            category: "accessoire"
         },
         {
            id: 'pot-de-fleur',
            name: "Pot de fleur",
            description: "",
            price: 10000,
            image: IMAGES_PRODUCT.potDeFleur,
            category: "deco"
         },
         {
            id: 'chaussure',
            name: "Chaussure Cuir",
            description: "",
            price: 45000,
            image: IMAGES_PRODUCT.chaussureCuir,
            category: "chaussure"
         },
         {
            id: 'samsung',
            name: "Samsung Watch",
            description: "",
            price: 60000,
            image: IMAGES_PRODUCT.samsungWatch,
            category: "accessoire"
         },
         {
            id: 'sneacker-rouge',
            name: "Sneacker Rouge",
            description: "",
            price: 25000,
            image: IMAGES_PRODUCT.sneackerRouge,
            category: "chaussure"
         },
         {
            id: 'chaise',
            name: "Chaise",
            description: "",
            price: 9000,
            image: IMAGES_PRODUCT.chaise,
            category: "deco"
         },
      ]
   }
   
   /**
    * Method to get all the products
    */
   getProducts() {
      return this.products
   }
   
   /**
    * Method to get a product by id
    * @param product_id
    */
   getProduct(product_id: string) {
      return this.products.find((item) => item.id === product_id) || null
   }
   
}
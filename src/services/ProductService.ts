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
         {
            id: 'air-jordan',
            name: "Air Jordan",
            description: "",
            price: 39000,
            image: IMAGES_PRODUCT.airJordan,
            category: "chaussure"
         },
         {
            id: 'ananas',
            name: "Ananas",
            description: "",
            price: 300,
            image: IMAGES_PRODUCT.ananas,
            category: "fruits"
         },
         {
            id: 'ananas-frais',
            name: "Ananas Frais",
            description: "",
            price: 300,
            image: IMAGES_PRODUCT.ananasFrais,
            category: "produits-frais"
         },
         {
            id: 'avocat',
            name: "Avocat",
            description: "",
            price: 500,
            image: IMAGES_PRODUCT.avocat,
            category: "fruits"
         },
         {
            id: 'balo-frais',
            name: "Balot Frais",
            description: "",
            price: 300,
            image: IMAGES_PRODUCT.baloFrais,
            category: "produits-frais"
         },
         {
            id: 'banane',
            name: "Banane",
            description: "",
            price: 1300,
            image: IMAGES_PRODUCT.banane,
            category: "fruits"
         },
         {
            id: 'celerile',
            name: "Celerile",
            description: "",
            price: 200,
            image: IMAGES_PRODUCT.celerile,
            category: "legumes"
         },
         {
            id: 'chaise-deco',
            name: "Chaise Deco",
            description: "",
            price: 20000,
            image: IMAGES_PRODUCT.chaiseDeco,
            category: "deco"
         },
         {
            id: 'citron',
            name: "Citron",
            description: "",
            price: 2000,
            image: IMAGES_PRODUCT.citron,
            category: "epicerie"
         },
         {
            id: 'coca-cola',
            name: "Coca Cola",
            description: "",
            price: 1000,
            image: IMAGES_PRODUCT.cocaCola,
            category: "boissons"
         },
         {
            id: 'epice-complete',
            name: "Epice Complete",
            description: "",
            price: 3000,
            image: IMAGES_PRODUCT.epiceComplete,
            category: "epicerie"
         },
         {
            id: 'epice-couleur',
            name: "Epice Couleur",
            description: "",
            price: 3000,
            image: IMAGES_PRODUCT.epiceCouleur,
            category: "epicerie"
         },
         {
            id: 'game-frais',
            name: "Game Frais",
            description: "",
            price: 2500,
            image: IMAGES_PRODUCT.gameFrais,
            category: "produits-frais"
         },
         {
            id: 'game-gomant',
            name: "Game Gomant",
            description: "",
            price: 25000,
            image: IMAGES_PRODUCT.gameGomant,
            category: "mode"
         },
         {
            id: 'jus-orange',
            name: "Jus d'Orange",
            description: "",
            price: 10000,
            image: IMAGES_PRODUCT.jusOrange,
            category: "boissons"
         },
         {
            id: 'geteau',
            name: "Gateau",
            description: "",
            price: 10000,
            image: IMAGES_PRODUCT.gateau,
            category: "produits-frais"
         },
         {
            id: 'legumes',
            name: "Legumes",
            description: "",
            price: 10000,
            image: IMAGES_PRODUCT.legumes,
            category: "legumes"
         },
         {
            id: 'melange-frais',
            name: "Melange Frais",
            description: "",
            price: 10000,
            image: IMAGES_PRODUCT.melangeFrais,
            category: "legumes"
         },
         {
            id: 'orange',
            name: "Orange",
            description: "",
            price: 10000,
            image: IMAGES_PRODUCT.orange,
            category: "fruits"
         },
         {
            id: 'parfum',
            name: "Parfum",
            description: "",
            price: 15000,
            image: IMAGES_PRODUCT.parfum,
            category: "mode"
         },
         {
            id: 'poivron-rouge',
            name: "Poivron Rouge",
            description: "",
            price: 15000,
            image: IMAGES_PRODUCT.poivronRouge,
            category: "fruits"
         },
         {
            id: 'puma',
            name: "Puma",
            description: "",
            price: 35000,
            image: IMAGES_PRODUCT.puma,
            category: "chaussure"
         },
         {
            id: 'sac',
            name: "Sac",
            description: "",
            price: 15000,
            image: IMAGES_PRODUCT.sac,
            category: "mode"
         },
         {
            id: 'salade',
            name: "Salade",
            description: "",
            price: 15000,
            image: IMAGES_PRODUCT.salade,
            category: "legumes"
         },
         {
            id: 'vin-wines',
            name: "Vin Wines",
            description: "",
            price: 125000,
            image: IMAGES_PRODUCT.vinWines,
            category: "boissons"
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
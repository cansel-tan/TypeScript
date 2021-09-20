import { Product} from "./product";

export class SimpleDataSource{
    private products:Array<Product>;
    
    constructor(){
        this.products=new Array<Product>(
            new Product(1,'Samsung Note5','Telefon',2000),
            new Product(2,'Samsung Note7','Telefon',3000),
            new Product(3,'Samsung Note8','Telefon',5000),
            new Product(4,'Samsung Note9','Telefon',6000),
        );
    }
    getProducts():Product[] {
        return this.products;
    }
}


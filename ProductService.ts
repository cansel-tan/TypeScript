import { IProductService } from "./IProductService";
import{Product} from "./product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{

    private dataSource:SimpleDataSource;
    private products:Array<Product>;//data kaynağındaki tüm elemanları products içine atmış oluruz.
    constructor(){
        this.dataSource=new SimpleDataSource;
        this.products=new Array<Product>();
        this.dataSource.getProducts().forEach(p=> this.products.push(p)); 
    }
    getById(id: number): Product {
        return this.products.filter(p=>p.id===id)[0]; //id karşılık gelen ilk eleman alınır.
      
    }
    getProduct(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id==0 || product.id==null){//ürün id yok veya 0 ise  
            product.id=this.generateId();//ürün yeni eklenir.
            this.products.push(product);//yeni id üretilir ve listeye eklenir.
        }
        else{//ürünün id varsa
            let index;

            for(let i=0;i<this.products.length;i++){  //ulaşılan product id ile metoda gönderilen id eşit ise güncellenmek istenen üründür
                if(this.products[i].id===product.id){
                    index=i;
                }
            }
            this.products.splice(index,1,product);//verilen indexten itibaren bir ürünü siler yerine product ekler.
        }
    }
    deleteProduct(product: Product): void {
        let index=this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);//verilen indexten itibaren bir ürünü siler 
        }
    }
    private generateId(): number{
        let key=1;
    while(this.getById(key)!= null){
        key++;
    }
        return key; 
    
    }
}
"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource;
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; //id karşılık gelen ilk eleman alınır.
    };
    ProductService.prototype.getProduct = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) { //ürün id yok veya 0 ise  
            product.id = this.generateId(); //ürün yeni eklenir.
            this.products.push(product); //yeni id üretilir ve listeye eklenir.
        }
        else { //ürünün id varsa
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) { //ulaşılan product id ile metoda gönderilen id eşit ise güncellenmek istenen üründür
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product); //verilen indexten itibaren bir ürünü siler yerine product ekler.
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1); //verilen indexten itibaren bir ürünü siler 
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;

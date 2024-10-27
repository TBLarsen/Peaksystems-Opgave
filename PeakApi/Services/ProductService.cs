using System.Collections.Generic;
using System.Linq;
using PeakApi.DataBase.Entities;

namespace PeakApi.Services
{
    public class ProductService
    {
        private readonly List<ProductEntity> _products;

        public ProductService()
        {
            // Initialize mock data
            _products =
            [
            new ProductEntity { Id = "101", Volume = 150, Location = "København" },
            new ProductEntity { Id = "102", Volume = 350, Location = "Aarhus" },
            new ProductEntity { Id = "103", Volume = 220, Location = "Odense" },
            new ProductEntity { Id = "104", Volume = 500, Location = "Aalborg" },
            new ProductEntity { Id = "105", Volume = 120, Location = "København" },
            new ProductEntity { Id = "106", Volume = 450, Location = "Randers" },
            new ProductEntity { Id = "107", Volume = 300, Location = "Aarhus" },
            new ProductEntity { Id = "108", Volume = 180, Location = "Horsens" },
            new ProductEntity { Id = "109", Volume = 275, Location = "Odense" },
            new ProductEntity { Id = "110", Volume = 320, Location = "Roskilde" },
            new ProductEntity { Id = "111", Volume = 400, Location = "København" },
            new ProductEntity { Id = "112", Volume = 210, Location = "Helsingør" },
            new ProductEntity { Id = "113", Volume = 155, Location = "Aalborg" },
            new ProductEntity { Id = "114", Volume = 245, Location = "Næstved" },
            new ProductEntity { Id = "115", Volume = 330, Location = "Fredericia" },
            new ProductEntity { Id = "116", Volume = 370, Location = "Viborg" },
            new ProductEntity { Id = "117", Volume = 280, Location = "Hjørring" },
            new ProductEntity { Id = "118", Volume = 410, Location = "Holstebro" },
            new ProductEntity { Id = "119", Volume = 340, Location = "Aarhus" },
            new ProductEntity { Id = "120", Volume = 290, Location = "Esbjerg" }
            ];
        }

        public List<ProductEntity> GetProducts()
        {
            return _products;
        }

        private ProductEntity GetProductById(string id)
        {
            return _products.FirstOrDefault(p => p.Id == id);
        }

        public string AddProduct(ProductEntity product)
        {
            string result;
            //check if product allready exists 
            ProductEntity p = GetProductById(product.Id);
            if (p != null)
            {
                result = UpdateProduct(product);
                return result;
            }
            _products.Add(product);
            result = "Product Successfully added";
            return result;
        }

        private string UpdateProduct(ProductEntity product)
        {
            string result = "";
            ProductEntity existingProduct = GetProductById(product.Id);
            if (existingProduct != null)
            {
                existingProduct.Volume = product.Volume;
                existingProduct.Location = product.Location;
                result = "Product Successfully edited";
            }
            return result;
        }

        public string DeleteProduct(string id)
        {
            string result;
            //check if product allready exists 
            ProductEntity p = GetProductById(id);
            if (p == null)
            {
                result = "Product does not exist";
                return result;
            }
            _products.Remove(p);
            result = "Product Successfully deleted";
            return result;
        }
    }

}
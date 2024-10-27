using PeakApi;
using Microsoft.AspNetCore.Mvc;
using PeakApi.Services;
using PeakApi.DataBase.Entities;

namespace PeakApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;
        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("GetProducts")]
        public ActionResult<ProductEntity> GetAllProducts()
        {
            List<ProductEntity> products = _productService.GetProducts();
            return Ok(products);
        }

        [HttpPost("AddProduct")]
        public ActionResult<string> AddProduct(ProductEntity newProduct)
        {
            string result = _productService.AddProduct(newProduct);
            return Ok(new {message = result});
        }

        [HttpDelete("DeleteProduct/{id}")]
        public ActionResult DeleteProduct(string id)
        {
            string result = _productService.DeleteProduct(id);
            return Ok(new {message = result});
        }
    }
}

namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductsbyCategoryRow))]
    public class ProductsbyCategoryController : Controller
    {
        [Route("NorthWind/ProductsbyCategory")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/ProductsbyCategory/ProductsbyCategoryIndex.cshtml");
        }
    }
}
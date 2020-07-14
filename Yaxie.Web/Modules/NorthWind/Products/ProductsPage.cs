
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductsRow))]
    public class ProductsController : Controller
    {
        [Route("NorthWind/Products")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Products/ProductsIndex.cshtml");
        }
    }
}
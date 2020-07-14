
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductLangRow))]
    public class ProductLangController : Controller
    {
        [Route("NorthWind/ProductLang")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/ProductLang/ProductLangIndex.cshtml");
        }
    }
}
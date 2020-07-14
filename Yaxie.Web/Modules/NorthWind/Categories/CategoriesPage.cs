
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("NorthWind/Categories")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Categories/CategoriesIndex.cshtml");
        }
    }
}
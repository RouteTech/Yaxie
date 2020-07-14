
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoryLangRow))]
    public class CategoryLangController : Controller
    {
        [Route("NorthWind/CategoryLang")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/CategoryLang/CategoryLangIndex.cshtml");
        }
    }
}
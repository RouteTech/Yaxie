
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersRow))]
    public class SuppliersController : Controller
    {
        [Route("NorthWind/Suppliers")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Suppliers/SuppliersIndex.cshtml");
        }
    }
}
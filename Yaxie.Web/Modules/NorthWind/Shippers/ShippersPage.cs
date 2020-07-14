
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ShippersRow))]
    public class ShippersController : Controller
    {
        [Route("NorthWind/Shippers")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Shippers/ShippersIndex.cshtml");
        }
    }
}

namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrdersRow))]
    public class OrdersController : Controller
    {
        [Route("NorthWind/Orders")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Orders/OrdersIndex.cshtml");
        }
    }
}
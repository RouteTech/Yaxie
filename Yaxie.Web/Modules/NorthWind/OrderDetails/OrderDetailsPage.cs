
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrderDetailsRow))]
    public class OrderDetailsController : Controller
    {
        [Route("NorthWind/OrderDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/OrderDetails/OrderDetailsIndex.cshtml");
        }
    }
}
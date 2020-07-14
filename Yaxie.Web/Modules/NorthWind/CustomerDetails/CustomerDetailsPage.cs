
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomerDetailsRow))]
    public class CustomerDetailsController : Controller
    {
        [Route("NorthWind/CustomerDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/CustomerDetails/CustomerDetailsIndex.cshtml");
        }
    }
}
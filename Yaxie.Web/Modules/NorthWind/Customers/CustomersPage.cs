
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomersRow))]
    public class CustomersController : Controller
    {
        [Route("NorthWind/Customers")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Customers/CustomersIndex.cshtml");
        }
    }
}
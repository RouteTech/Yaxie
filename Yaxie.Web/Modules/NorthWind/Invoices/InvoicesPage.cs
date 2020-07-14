
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoicesRow))]
    public class InvoicesController : Controller
    {
        [Route("NorthWind/Invoices")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Invoices/InvoicesIndex.cshtml");
        }
    }
}
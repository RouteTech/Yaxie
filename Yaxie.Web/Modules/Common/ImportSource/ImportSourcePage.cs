
namespace Yaxie.Common.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportSourceRow))]
    public class ImportSourceController : Controller
    {
        [Route("Common/ImportSource")]
        public ActionResult Index()
        {
            return View("~/Modules/Common/ImportSource/ImportSourceIndex.cshtml");
        }
    }
}
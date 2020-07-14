
namespace Yaxie.Common.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportTypeRow))]
    public class ImportTypeController : Controller
    {
        [Route("Common/ImportType")]
        public ActionResult Index()
        {
            return View("~/Modules/Common/ImportType/ImportTypeIndex.cshtml");
        }
    }
}
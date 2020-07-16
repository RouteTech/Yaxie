
namespace Yaxie.Common.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportWizardHistoryRow))]
    public class ImportWizardHistoryController : Controller
    {
        [Route("Common/ImportWizardHistory")]
        public ActionResult Index()
        {
            return View("~/Modules/Common/ImportWizardHistory/ImportWizardHistoryIndex.cshtml");
        }
    }
}
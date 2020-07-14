
namespace Yaxie.Common.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportWizardRow))]
    public class ImportWizardController : Controller
    {
        [Route("Common/ImportWizard/[action]")]
        public ActionResult Index()
        {
            return View("~/Modules/Common/ImportWizard/ImportWizardIndex.cshtml");
        }
    }
}
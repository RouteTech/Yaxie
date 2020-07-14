
namespace Yaxie.Common.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.NoteRow))]
    public class NoteController : Controller
    {
        [Route("Common/Note")]
        public ActionResult Index()
        {
            return View("~/Modules/Common/Note/NoteIndex.cshtml");
        }
    }
}
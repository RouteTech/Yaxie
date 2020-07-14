
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.NotesRow))]
    public class NotesController : Controller
    {
        [Route("NorthWind/Notes")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Notes/NotesIndex.cshtml");
        }
    }
}
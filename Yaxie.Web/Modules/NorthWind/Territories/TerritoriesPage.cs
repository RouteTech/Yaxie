
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TerritoriesRow))]
    public class TerritoriesController : Controller
    {
        [Route("NorthWind/Territories")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Territories/TerritoriesIndex.cshtml");
        }
    }
}
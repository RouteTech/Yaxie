
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.RegionRow))]
    public class RegionController : Controller
    {
        [Route("NorthWind/Region")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Region/RegionIndex.cshtml");
        }
    }
}
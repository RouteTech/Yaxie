
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeeTerritoriesRow))]
    public class EmployeeTerritoriesController : Controller
    {
        [Route("NorthWind/EmployeeTerritories")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/EmployeeTerritories/EmployeeTerritoriesIndex.cshtml");
        }
    }
}
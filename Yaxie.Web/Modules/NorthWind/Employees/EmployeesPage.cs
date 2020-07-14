
namespace Yaxie.NorthWind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeesRow))]
    public class EmployeesController : Controller
    {
        [Route("NorthWind/Employees")]
        public ActionResult Index()
        {
            return View("~/Modules/NorthWind/Employees/EmployeesIndex.cshtml");
        }
    }
}
using System.Web.Mvc;

namespace VueJsPoc.Controllers
{
    public class HomeController : Controller
    {        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult VueComponent()
        {
            return View();
        }
    }
}
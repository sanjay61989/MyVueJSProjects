using System.Collections.Generic;
using System.Web.Mvc;
using VueJsPoc.Models;

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

        public ActionResult VueTable()
        {
            return View();
        }

        public ActionResult VueTable2()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetUsers()
        {
            List<Student> students = new List<Student>()
            {
                new Student
                {
                    RollNo=1,
                    Name="sanjay",
                    Age=23
                },
                new Student
                {
                    RollNo=3,
                    Name="ayesha",
                    Age=23
                },
                new Student
                {
                    RollNo=2,
                    Name="reecha",
                    Age=23
                }
            };
            return Json(students, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult InsertUsers(List<Student> data)
        {
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}
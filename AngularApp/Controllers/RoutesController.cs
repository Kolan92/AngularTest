using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularApp.Controllers
{
    public class RoutesController : Controller
    {
        // GET: Routes
        public ActionResult One()
        {
            return View();
        }
        public ActionResult Two(int donuts)
        {
            ViewBag.Dounuts = donuts;
            return View();
        }
        public ActionResult Three()
        {
            return View();
        }
    }
}
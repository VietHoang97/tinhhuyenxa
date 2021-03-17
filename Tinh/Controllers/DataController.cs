using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Tinh.Models.EF;

namespace Tinh.Controllers
{
    public class DataController : Controller
    {
        private ConDB db = null;

        public DataController()
        {
            db = new ConDB();
        }


        // GET: Data
        public JsonResult Index()
        {
            var data = db.dmtinh.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(string matinh)
        {
            var data = db.dmtinh.Find(matinh);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(dmtinh data)
        {
            db.dmtinh.Add(data);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(dmtinh data)
        {
            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(string matinh)
        {
            var data = db.dmtinh.Find(matinh);
            db.dmtinh.Remove(data);
            db.SaveChanges();
            return Json(null);
        }
    }
}
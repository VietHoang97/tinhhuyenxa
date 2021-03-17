using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tinh.Models.EF
{
    public class Data
    {

        [Key]
        [StringLength(2)]
        public string matinh { get; set; }

        [StringLength(50)]
        public string tentinh { get; set; }

        [StringLength(2)]
        public string mabhyt { get; set; }

        public bool? show { get; set; }
    }
}
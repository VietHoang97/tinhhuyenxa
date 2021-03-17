namespace Tinh
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("dmtinh")]
    public partial class dmtinh
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

namespace Tinh
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ConDB : DbContext
    {
        public ConDB()
            : base("name=ConDB")
        {
        }

        public virtual DbSet<dmtinh> dmtinh { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<dmtinh>()
                .Property(e => e.matinh)
                .IsUnicode(false);

            modelBuilder.Entity<dmtinh>()
                .Property(e => e.mabhyt)
                .IsUnicode(false);
        }
    }
}

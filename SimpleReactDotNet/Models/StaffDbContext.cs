using Microsoft.EntityFrameworkCore;

namespace SimpleReactDotNet.Models
{
    public class StaffDbContext : DbContext
    {
        public StaffDbContext()
        {
        }
        public StaffDbContext(DbContextOptions<StaffDbContext> options)
            : base(options) 
        {
        }

        public virtual DbSet<EmployeeDetail> EmployeeDetail { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeDetail>().ToTable("EmployeeDetail");
        }
    }
}

using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Model.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Values> Values { get; set; }

        public DbSet<User> Users {get;set;}
    }
}
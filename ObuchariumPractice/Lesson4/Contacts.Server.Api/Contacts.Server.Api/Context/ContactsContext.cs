using Contacts.Server.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace Contacts.Server.Api.Context
{
    public class ContactsContext : DbContext
    {
        public ContactsContext(DbContextOptions<ContactsContext> options)
            : base(options)
        { }

        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
                new Contact { Id = 1, Name = "Mr. White", Phone = "8-800-859-0985" },
                new Contact { Id = 2, Name = "Mr. Orange", Phone = "+7 (922) 650-1178" },
                new Contact { Id = 3, Name = "Mr. Blonde", Phone = "8-800-313-6558" },
                new Contact { Id = 4, Name = "Nice Guy Eddie", Phone = "(812) 561-34-09" },
                new Contact { Id = 5, Name = "Mr. Pink", Phone = "8-800-166-8439" },
                new Contact { Id = 6, Name = "Joe Cabot", Phone = "+7 (922) 394-3006" },
                new Contact { Id = 7, Name = "Holdaway", Phone = "+7 (922) 898-5718" },
                new Contact { Id = 8, Name = "Marvin Nash", Phone = "+7 (922) 005-4388" },
                new Contact { Id = 9, Name = "Mr. Blue", Phone = "8-800-952-1673" },
                new Contact { Id = 10, Name = "Mr. Brown", Phone = "(812) 936-24-39" });

            base.OnModelCreating(modelBuilder);
        }
    }
}

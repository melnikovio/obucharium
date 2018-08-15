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
                new Contact { Id = 1, Name = "Mr. White", Phone = "8-800-859-0985", Email = "white@example.com"},
                new Contact { Id = 2, Name = "Mr. Orange", Phone = "+7 (922) 650-1178", Email = "orange@example.com" },
                new Contact { Id = 3, Name = "Mr. Blonde", Phone = "8-800-313-6558", Email = "blonde@example.com" },
                new Contact { Id = 4, Name = "Nice Guy Eddie", Phone = "(812) 561-34-09", Email = "eddie@example.com" },
                new Contact { Id = 5, Name = "Mr. Pink", Phone = "8-800-166-8439", Email = "pink@example.com" },
                new Contact { Id = 6, Name = "Joe Cabot", Phone = "+7 (922) 394-3006", Email = "joe@example.com" },
                new Contact { Id = 7, Name = "Holdaway", Phone = "+7 (922) 898-5718", Email = "holdaway@example.com" },
                new Contact { Id = 8, Name = "Marvin Nash", Phone = "+7 (922) 005-4388", Email = "marvin@example.com" },
                new Contact { Id = 9, Name = "Mr. Blue", Phone = "8-800-952-1673", Email = "blue@example.com" },
                new Contact { Id = 10, Name = "Mr. Brown", Phone = "(812) 936-24-39", Email = "brown@example.com" });

            base.OnModelCreating(modelBuilder);
        }
    }
}

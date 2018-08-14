using System.Collections.Generic;
using System.Linq;
using Contacts.Server.Api.Context;
using Contacts.Server.Api.Model;
using Microsoft.AspNetCore.Mvc;

namespace Contacts.Server.Api.Controllers
{
    /// <summary>
    /// Контакты
    /// </summary>
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private readonly ContactsContext _context;

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="context"></param>
        public ContactsController(ContactsContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Получить список всех контактов
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            return _context.Contacts;
        }

        /// <summary>
        /// Получить данные по контакту
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ProducesResponseType(200, Type=typeof(Contact))]
        [ProducesResponseType(404)]
        public IActionResult Get(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);

            if (contact == null)
                return NotFound();

            return Ok(contact);
        }

        /// <summary>
        /// Добавить новый контакт
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public void Post([FromBody]Contact value)
        {
            _context.Add(new Contact { Name = value.Name, Phone = value.Phone});
            _context.SaveChanges();
        }

        /// <summary>
        /// Обновить контакт
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        [HttpPut("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult Put(int id, [FromBody]Contact value)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);
            if (contact == null)
                return NotFound();

            contact.Name = value.Name;
            contact.Phone = value.Phone;
            _context.SaveChanges();

            return Ok(contact);
        }

        /// <summary>
        /// Удалить контакт
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult Delete(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);
            if (contact == null)
                return NotFound();

            _context.Remove(contact);
            _context.SaveChanges();

            return Ok();
        }
    }
}

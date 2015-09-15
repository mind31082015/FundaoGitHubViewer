using System.Collections.Generic;
using System.Web.Http;

namespace GitHubViewer.Services.Controllers
{
    public class IndexController : ApiController
    {
        // GET: api/Index
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Index/5
        public string Get(int id)
        {
            return id.ToString();
        }

        // POST: api/Index
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Index/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Index/5
        public void Delete(int id)
        {
        }
    }
}

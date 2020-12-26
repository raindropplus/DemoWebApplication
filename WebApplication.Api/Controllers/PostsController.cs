using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication.Api.Models;

namespace WebApplication.Api.Controllers
{
    public class PostsController : BaseAPIController
    {


        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.Posts.AsEnumerable());
        }

        //public HttpResponseMessage Post([FromBody]TblUser value)
        //{
        //    UserDB.TblUsers.Add(value);
        //    return ToJson(UserDB.SaveChanges());
        //}

        //public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        //{
        //    UserDB.Entry(value).State = EntityState.Modified;
        //    return ToJson(UserDB.SaveChanges());
        //}
        //public HttpResponseMessage Delete(int id)
        //{
        //    UserDB.TblUsers.Remove(UserDB.TblUsers.FirstOrDefault(x => x.Id == id));
        //    return ToJson(UserDB.SaveChanges());
        //}
        //private DemoDBEntities db = new DemoDBEntities();

        //// GET: api/Posts
        //public IQueryable<Post> GetPosts()
        //{
        //    return db.Posts;

        //}


        //public HttpResponseMessage Get()
        //{
        //    return ToJson(db.Posts.AsEnumerable());
        //}
        //// GET: api/Posts/5
        //[ResponseType(typeof(Post))]
        //public IHttpActionResult GetPost(int id)
        //{
        //    Post post = db.Posts.Find(id);
        //    if (post == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(post);
        //}

        //// PUT: api/Posts/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutPost(int id, Post post)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != post.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(post).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!PostExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Posts
        //[ResponseType(typeof(Post))]
        //public IHttpActionResult PostPost(Post post)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Posts.Add(post);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = post.Id }, post);
        //}

        //// DELETE: api/Posts/5
        //[ResponseType(typeof(Post))]
        //public IHttpActionResult DeletePost(int id)
        //{
        //    Post post = db.Posts.Find(id);
        //    if (post == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Posts.Remove(post);
        //    db.SaveChanges();

        //    return Ok(post);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool PostExists(int id)
        //{
        //    return db.Posts.Count(e => e.Id == id) > 0;
        //}
    }

    public class BaseAPIController : ApiController
    {
        protected readonly DemoDBEntities UserDB = new DemoDBEntities();
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}
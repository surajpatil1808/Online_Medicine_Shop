using System;
using Api.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;


namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UsersController(IConfiguration configuration)
        {
            _configuration=configuration;
        }

       
    //For registration @User
       [HttpPost]
       [Route("registration")]
       public Response register(Users users)
       {
        Response response= new Response();
        DAL dal=new DAL();
        SqlConnection connection= new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
        response=dal.register(users, connection);
        return response;
       }


//for Login @User
       [HttpPost]
       [Route("login")]
       public Response login(Users users)
       {
        DAL dal=new DAL();
        SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
         Response response=dal.login(users, connection);
         return response;
       }

    
    //to view users Profile for @User
        [HttpPost]
       [Route("viewUser")]
       public Response viewUser(Users users)
       {
        DAL dal =new DAL();
          SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
          Response response=dal.viewUser(users,connection);
          return response;

       }

       //edit user details for @User
             [HttpPost]
       [Route("updateProfile")]
       public Response updateProfile(Users users)
       {
        DAL dal=new DAL();
        SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
        Response response=dal.updateProfile(users,connection);
         return response;

       }


//to add address in Profile for @User
      [HttpPost]
       [Route("addAddress")]
       public Response AddAddress(Address address)
       {
        DAL dal=new DAL();
        SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
        Response response=dal.AddAddress(address,connection);
         return response;
       }


//to get all the added addresses for @User
       [HttpGet]
[Route("cartAddress/{userId}")]
public Response GetCartAddress(int userId)
{
    DAL dal = new DAL();
    SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
    List<Address> cartAddresses = dal.GetCartAddressByUserId(userId, connection);

    Response response = new Response();
    response.StatusCode = 200;
    response.StatusMessage = "Success";
    //response.ListItems = cartItems;
      response.listAddress = cartAddresses; 

    return response;
}

//update address for @User
 [HttpPut]
        [Route("UpdateAddress/{id}")]
        public Response UpdateAddress(int id,Address updatedAddress)
        {
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
            {
                updatedAddress.ID = id;
                Response response = dal.UpdateAddress(updatedAddress, connection);
                return response;
            }
        }


//to delete an address or remove address for @User
[HttpDelete]
[Route("removeCartAddress/{id}")]
public Response DeleteAddress(int id)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.RemoveCartAddress(id, connection);
        return response;
    }
}
       
//  [HttpPut]
//         [Route("UpdateAddress/{id}")]
//         public Response UpdateAddress(int id,Address updatedAddress)
//         {
//             DAL dal = new DAL();
//             using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
//             {
//                 updatedAddress.ID = id;
//                 Response response = dal.UpdateAddress(updatedAddress, connection);
//                 return response;
//             }
//         }
    
       //get your orders
//        [HttpGet]
// [Route("orderList/{userId}")]
// public Response GetOrders(int userId)
// {
//     DAL dal = new DAL();
//     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//     List<Cart> cartItems = dal.GetOrders(userId, connection);

//     Response response = new Response();
//     response.StatusCode = 200;
//     response.StatusMessage = "Success";
//     //response.ListItems = cartItems;
//       response.listCart = cartItems; 

//     return response;
//}


    }
}
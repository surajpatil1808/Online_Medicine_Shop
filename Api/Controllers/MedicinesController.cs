using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicinesController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public MedicinesController(IConfiguration configuration)
        {
            _configuration=configuration;
        }
       

       // to add the items or medicines in the cart list for @User
       [HttpPost]
       [Route("addToCart")]
       public Response addToCart(Cart cart)
       {
        DAL dal=new DAL();
        SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
        Response response=dal.addToCart(cart,connection);
         return response;
       }
       

       //working code
    //     [HttpPost]
    //    [Route("placeOrder")]
    //    public Response placeOrder(Orders orders)
    //    {
    //     DAL dal=new DAL();
    //     SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
    //     Response response=dal.placeOrder(orders,connection);
    //      return response;
    //    }


//to place order for @User
[HttpPost]
[Route("placeOrder")]
public Response placeOrder(Orders orders)
{
    DAL dal = new DAL();
    SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
    Response response = dal.placeOrder(orders, connection);
    return response;
}


//to get the list of all orders placed for , @User
[HttpGet]
[Route("orderList/{userId}")]
public Response GetOrderList(int userId)
{
    DAL dal = new DAL();
    SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
    Response response = dal.GetOrderList(userId, connection);
    return response;
}


//To get the details for ordered Items or medicines for @Admin, @User
[HttpGet]
[Route("orderItems/{orderId}")]
public Response GetOrderItems(int orderId)
{
    DAL dal = new DAL();
    SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
    List<OrderItems> OrderItems = dal.GetOrderItems(orderId, connection);

    Response response = new Response();
    response.StatusCode = 200;
    response.StatusMessage = "Success";
   
      response.listItem = OrderItems; 

    return response;
}

// [HttpGet]
// [Route("orderItems/{orderId}")]
// public List<OrderItems> GetOrderItems(int orderId)
// {
//     DAL dal = new DAL();
//     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//     List<OrderItems> orderItems = dal.GetOrderItems(orderId, connection);
//     return orderItems;
// }


// [HttpGet]
// [Route("orderItems/{orderId}")]
// public Response GetOrderItems(int orderId)
// {
//     DAL dal = new DAL();
//     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//     Response response = dal.GetOrderItems(orderId, connection);
//     return response;
// }

// [HttpGet]
// [Route("orderItems/{orderId}")]
// public Response GetOrderItems(int orderID)
// {
//     Response response = new Response();
//     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()); // Update with your actual connection string

//     try
//     {
//         DAL dal = new DAL(); // Create an instance of the DAL class

//         // Your existing code to fetch order items
//         List<OrderItems> OrderItems = dal.GetOrderItems(orderID, connection);

//         response.StatusCode = 200;
//         response.StatusMessage = "Success";
//         response.Data = OrderItems;
//     }
//     catch (Exception ex)
//     {
//         response.StatusCode = 500;
//         response.StatusMessage = "Error: " + ex.Message;
//         response.Data = null;
//     }
//     finally
//     {
//         connection.Close();
//     }

//     return response;
// }





       //get ordet list
    //     [HttpPost]
    //    [Route("orderList")]
    //    public Response orderList(Users users)
    //    {
    //       DAL dal=new DAL();
    //     SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
    //     Response response=dal.orderList(users,connection);
    //      return response;
    //    }

        //   [HttpGet]
        // [Route("cartItems/{email}")]
        // public Response GetCartItems(string email)
        // {
        //     DAL dal = new DAL();
        //     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
        //     Response response = dal.GetCartItems(email, connection);
        //     return response;
        // }
   

//to get the list of items that are there in the cart for @User
[HttpGet]
[Route("cartList/{userId}")]
public Response GetCartItems(int userId)
{
    DAL dal = new DAL();
    SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
    List<Cart> cartItems = dal.GetCartItemsByUserId(userId, connection);

    Response response = new Response();
    response.StatusCode = 200;
    response.StatusMessage = "Success";
    //response.ListItems = cartItems;
      response.listCart = cartItems; 

    return response;
}

//to selete the items from cart, for @User
[HttpDelete]
[Route("removeCartItem/{id}")]
public Response DeleteMedicine(int id)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.RemoveCartItem(id, connection);
        return response;
    }
}

//to remove all the items from the cart automatically after the successfully placed an order, for @User
[HttpDelete]
[Route("clearCartData/{userId}")]
public Response ClearCartData(int userId)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.ClearCartData(userId, connection);
        return response;
    }
}


// ...

// [HttpDelete]
// [Route("removeCartItem/{userId}/{ID}")]
// public Response RemoveCartItem(int userId, int ID)
// {
//     DAL dal = new DAL();
//     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());

//     bool removed = dal.RemoveCartItem(userId, ID, connection);

//     Response response = new Response();
//     if (removed)
//     {
//         response.StatusCode = 200;
//         response.StatusMessage = "Item removed from cart successfully";
//     }
//     else
//     {
//         response.StatusCode = 400;
//         response.StatusMessage = "Failed to remove item from cart";
//     }

//     return response;
// }

// ...

        // [HttpGet]
        // [Route("cartList")]
        // public Response ListCart()
        // {
        //     DAL dal = new DAL();
        //     using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
        //     {
        //         Response response = dal.ListCart(connection);
        //         return response;
        //     }
        // }

   


//view medicine 1
//   [HttpPost]
//        [Route("viewMedicine/{ID}")]
//        public Response viewMedicine(int ID)
//        {
//         DAL dal =new DAL();
//           SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//           Response response=dal.viewMedicine(ID,connection);
//           return response;

//        }
       
// [HttpGet]
//        [Route("viewMedicineDetails/{ID}")]
//        public Response viewMedicineDetails(int ID)
//        {
//         DAL dal =new DAL();
//           SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//           Response response=dal.viewMedicineDetails(ID,connection);
//           return response;

//        }

//  [HttpPost]
//        [Route("viewMedicine")]
//        public Response viewMedicine(Medicines medicines)
//        {
//         DAL dal =new DAL();
//           SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//           Response response=dal.viewMedicine(medicines,connection);
//           return response;

//        }




    }
}
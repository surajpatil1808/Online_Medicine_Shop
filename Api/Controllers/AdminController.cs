
// // using System;
// // using System.Collections.Generic;
// // using System.Linq;
// // using System.Threading.Tasks;
// // using Microsoft.AspNetCore.Mvc;
// // using Api.Models;
// // using Microsoft.Extensions.Configuration;
// // using System.Data.SqlClient;
// // using System.Data;

// // namespace Api.Controllers
// // {
// //     [ApiController]
// //     [Route("api/[controller]")]
// //     public class AdminController : ControllerBase
// //     {
// //           private readonly IConfiguration _configuration;

// //         public AdminController(IConfiguration configuration)
// //         {
// //             _configuration=configuration;
// //         }

          
// //        [HttpPost]
// //        [Route("addUpdateMedicine")]
// //        public Response addUpdateMedicine(Medicines medicines)
// //        {
// //         DAL dal=new DAL();
// //         SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
// //         Response response=dal.addUpdateMedicine(medicines,connection);
// //          return response;
// //        }

// //         //method to get users list for admin
// //         [HttpGet]
// //        [Route("userList")]
// //        public Response userList()
// //        {
// //         DAL dal=new DAL();
// //         SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
// //         Response response=dal.userList(connection);
// //          return response;
// //        }
// //     }
// // }


// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Api.Models;
// using Microsoft.Extensions.Configuration;
// using System.Data.SqlClient;
// using System.Data;

// namespace Api.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class AdminController : ControllerBase
//     {
//         private readonly IConfiguration _configuration;

//         public AdminController(IConfiguration configuration)
//         {
//             _configuration = configuration;
//         }

//         [HttpPost]
//         [Route("addUpdateMedicine")]
//         public Response addUpdateMedicine(Medicines medicines)
//         {
//             DAL dal = new DAL();
//             using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
//             {
//                 Response response = dal.addUpdateMedicine(medicines, connection);
//                 return response;
//             }
//         }

//         [HttpPost]
//         [Route("uploadFile")]
//         public async Task<Response> UploadFile()
//         {
//             try
//             {
//                 var file = Request.Form.Files[0];
//                 var fileName = file.FileName;
//                 var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads", fileName);

//                 using (var stream = new FileStream(filePath, FileMode.Create))
//                 {
//                     await file.CopyToAsync(stream);
//                 }

//                 return new Response
//                 {
//                     StatusCode = 200,
//                     StatusMessage = "File uploaded"
//                 };
//             }
//             catch (Exception ex)
//             {
//                 return new Response
//                 {
//                     StatusCode = 500,
//                     StatusMessage = ex.Message
//                 };
//             }
//         }

//         // [HttpPost]
//         // [Route("deleteMedicine")]
//         // public Response DeleteMedicine(int ID)
//         // {
//         //     DAL dal = new DAL();
//         //     using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
//         //     {
//         //         Response response = dal.deleteMedicine(ID, connection);
//         //         return response;
//         //     }
//         // }

//         // [HttpGet]
//         // [Route("getMedicineById")]
//         // public Response GetMedicineById(int id)
//         // {
//         //     DAL dal = new DAL();
//         //     using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
//         //     {
//         //         Response response = dal.getMedicineById(id, connection);
//         //         return response;
//         //     }
//         // }

// //         [HttpPost]
// // [Route("deleteMedicine")]
// // public Response DeleteMedicine(Medicines medicines)
// // {
// //     DAL dal = new DAL();
// //     using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
// //     {
// //         Response response = dal.DeleteMedicine(medicines, connection);
// //         return response;
// //     }
// // }

// [HttpPost]
// [Route("deleteMedicine")]
// public Response DeleteMedicine([FromBody] Medicines medicines)
// {
//     DAL dal = new DAL();
//     using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
//     {
//         Response response = dal.DeleteMedicine(medicines, connection);
//         return response;
//     }
// }


//         [HttpGet]
//         [Route("userList")]
//         public Response userList()
//         {
//             DAL dal = new DAL();
//             using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
//             {
//                 Response response = dal.userList(connection);
//                 return response;
//             }
//         }

//         [HttpGet]
// [Route("medicines")]
// public Response GetAllMedicines()
// {
//     DAL dal = new DAL();
//     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//     Response response = dal.GetAllMedicines(connection);
//     return response;
// }

//     }
// }


using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

using System.Text.Json;


namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AdminController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //Endpoint to Add the Medicines @Admin
        [HttpPost]
        [Route("addUpdateMedicine")]
        public Response AddUpdateMedicine(Medicines medicines)
        {
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
            {
                Response response = dal.AddUpdateMedicine(medicines, connection);
                return response;
            }
        }




    
        

       
        //Methos to get Medicines Details all @Admin, @Users
        [HttpGet]
        [Route("medicines")]
        public Response GetAllMedicines()
        {
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
            {
                Response response = dal.GetAllMedicines(connection);
                return response;
            }
        }


//Entpoint to update the Medicine details only for @Admin
[HttpPut]
[Route("medicines/{id}")]
public Response UpdateMedicine(int id, Medicines updatedMedicine)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        // Set the ID of the updated medicine
        updatedMedicine.ID = id;

        Response response = dal.AddUpdateMedicine(updatedMedicine, connection);
        return response;
    }
}


//to search the Medicines by Name for @Admin, @Users
[HttpGet]
[Route("medicines/search")]
public Response SearchMedicines(string name)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.SearchMedicines(connection, name);
        return response;
    }
}


// [HttpDelete]
// [Route("medicines/{id}")]
// public Response DeleteMedicine(int id)
// {
//     DAL dal = new DAL();
//     using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
//     {
//         Response response = dal.DeleteMedicine(id, connection);
//         return response;
//     }
// }



//To delete the Medicines fro the list for @Admin
[HttpDelete]
[Route("deleteMedicine/{id}")]
public Response DeleteMedicine(int id)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.DeleteMedicine(id, connection);
        return response;
    }
}

//view medicine2 view all details with id for @Admin,@User
[HttpGet]
[Route("medicines/{id}")]
public Response GetMedicineDetails(int id)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.GetMedicineDetails(connection, id);
        return response;
    }
}

//search medicine by id for @Admin, @User
[HttpGet]
[Route("medicineSearch/{id}")]
public Response GetMedicineById(int id)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.GetMedicineById(connection, id);
        return response;
    }
}


    //For to get the registered users List for @Admin
     [HttpGet]
        [Route("userList")]
        public Response userList()
        {
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
            {
                Response response = dal.userList(connection);
                return response;
            }
        }

        

// to delete the users from the list for @Admin

        [HttpDelete]
[Route("deleteUser/{id}")]
public Response DeleteUser(int id)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = dal.DeleteUser(id, connection);
        return response;
    }
}
    //  [HttpGet]
    //     [Route("userList")]
    //     public Response userList()
    //     {
    //         DAL dal = new DAL();
    //         using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    //         {
    //             Response response = dal.userList(connection);
    //             return response;
    //         }
    //     }


//  [HttpPost]
//         [Route("uploadFile")]
//         public async Task<Response> UploadFile()
//         {
//             try
//             {
//                 var file = Request.Form.Files[0];
//                 var fileName = file.FileName;
//                 var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads", fileName);

//                 using (var stream = new FileStream(filePath, FileMode.Create))
//                 {
//                     await file.CopyToAsync(stream);
//                 }

//                 return new Response
//                 {
//                     StatusCode = 200,
//                     StatusMessage = "File uploaded"
//                 };
//             }
//             catch (Exception ex)
//             {
//                 return new Response
//                 {
//                     StatusCode = 500,
//                     StatusMessage = ex.Message
//                 };
//             }
//         }

[HttpPost]
[Route("UploadFile")]
public async Task<IActionResult> UploadFile(IFormFile formFile)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        Response response = await dal.UploadFile(formFile.FileName, formFile.OpenReadStream(), connection);
        return Ok(response);
    }
}


//to get all order detais for @Admin
   [HttpGet]
        [Route("orderList")]
        public Response GetAllOrders()
        {
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
            {
                Response response = dal.GetAllOrders(connection);
                return response;
            }
        }


        //update order status
        //  [HttpPut]
        // [Route("handleOrderStatus/{id}")]
        // public Response UpdateOrderStatus(int id, Orders orders)
        // {
        //     DAL dal = new DAL();
        //     using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
        //     {
        //         orders.ID = id;
        //         Response response = dal.UpdateOrderStatus(orders, connection);
        //         return response;
        //     }
        // }

//   [HttpPost]
// [Route("handleOrderStatus/{ID}")]
// public Response UpdateOrderStatus(int ID, [FromBody] Orders order)
// {
//     DAL dal = new DAL();
//     SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//     Response response = dal.UpdateOrderStatus(ID, order.OrderStatus, connection);
//     return response;
// }

// [HttpPost]
//        [Route("handleOrderStatus")]
//        public Response updateProfile(Users users)
//        {
//         DAL dal=new DAL();
//         SqlConnection connection=new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
//         Response response=dal.updateProfile(users,connection);
//          return response;

//        }



//To Update the order status for @Admin
[HttpPost]
[Route("updateOrderStatus/{ID}")]
public Response UpdateOrderStatus(int ID, [FromBody] JsonElement updatedOrder)
{
    DAL dal = new DAL();
    using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString()))
    {
        string orderStatus = updatedOrder.GetProperty("OrderStatus").GetString();
        Response response = dal.UpdateOrderStatus(ID, orderStatus, connection);
        return response;
    }
}





    }
}


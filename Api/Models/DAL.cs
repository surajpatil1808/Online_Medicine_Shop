

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using Api.Models;


namespace Api.Models
{
    public class DAL
    {
        // public Response register(Users users, SqlConnection connection)
        // {
        //     Response response=new Response();
        //     SqlCommand cmd= new SqlCommand("sp_register", connection);
        //     cmd.CommandType = CommandType.StoredProcedure;
        //     cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
        //     cmd.Parameters.AddWithValue("@LastName", users.LastName);
        //     cmd.Parameters.AddWithValue("@Password", users.Password);
        //     cmd.Parameters.AddWithValue("@Email", users.Email);
        //     cmd.Parameters.AddWithValue("@Fund", 0);
        //     cmd.Parameters.AddWithValue("@Type", "Users");
        //     cmd.Parameters.AddWithValue("@Status", 0);
            
            
            
        //     connection.Open();
        //     int i= cmd.ExecuteNonQuery();
        //     connection.Close();

        //     if(i>0)
        //     {
        //         response.StatusCode=200;
        //         response.StatusMessage="User Registered successfully";
        //     }
        //     else
        //     {
        //         response.StatusCode=100;
        //         response.StatusMessage="User registration Failed";
        //     }
        //     return response;

        // }

        //for resgistration @User
        public Response register(Users users, SqlConnection connection)
{
    Response response = new Response();

    // Check if email already exists
    SqlCommand checkEmailCmd = new SqlCommand("SELECT COUNT(*) FROM Users WHERE Email = @Email", connection);
    checkEmailCmd.Parameters.AddWithValue("@Email", users.Email);
    connection.Open();
    int emailCount = (int)checkEmailCmd.ExecuteScalar();
    connection.Close();

    if (emailCount > 0)
    {
        // Email already exists
        response.StatusCode = 100;
        response.StatusMessage = "Email already exists";
        return response;
    }

    SqlCommand cmd = new SqlCommand("sp_register", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
    cmd.Parameters.AddWithValue("@LastName", users.LastName);
    cmd.Parameters.AddWithValue("@Password", users.Password);
    cmd.Parameters.AddWithValue("@Email", users.Email);
    cmd.Parameters.AddWithValue("@Fund", 0);
    cmd.Parameters.AddWithValue("@Type", "Users");
    cmd.Parameters.AddWithValue("@Status", 0);

    connection.Open();
    int i = cmd.ExecuteNonQuery();
    connection.Close();

    if (i > 0)
    {
        response.StatusCode = 200;
        response.StatusMessage = "User registered successfully";
    }
    else
    {
        response.StatusCode = 100;
        response.StatusMessage = "User registration failed";
    }

    return response;
}



        
        //login

        // public Response login(Users users, SqlConnection connection)
        // {
        //     SqlDataAdapter da=new SqlDataAdapter("sp_login", connection);
        //     da.SelectCommand.CommandType= CommandType.StoredProcedure;
        //     da.SelectCommand.Parameters.AddWithValue("@Email", users.Email);
        //     da.SelectCommand.Parameters.AddWithValue("@Password", users.Password);
        //     DataTable dt=new DataTable();
        //     da.Fill(dt);
        //     Response response=new Response();
        //     Users user=new Users();
        //     if(dt.Rows.Count>0)
        //     {
        //         user.ID=Convert.ToInt32(dt.Rows[0]["ID"]);
        //         user.FirstName= Convert.ToString(dt.Rows[0] ["FirstName"]);
        //         user.LastName= Convert.ToString(dt.Rows[0] ["LastName"]);
        //         user.Email= Convert.ToString(dt.Rows[0] ["Email"]);
        //         user.Type= Convert.ToString(dt.Rows[0] ["Type"]);
        //         response.StatusCode=200;
        //         response.StatusMessage="User is Valid";
        //         response.user=user;

        //     }
        //     else
        //     {
        //          response.StatusCode=100;
        //         response.StatusMessage="User is InValid";
        //          response.user=null;
        //     }
        //     return response;

        // }

//         public Response login(Users users, SqlConnection connection)
// {
//     SqlDataAdapter da = new SqlDataAdapter("sp_login1", connection);
//     da.SelectCommand.CommandType = CommandType.StoredProcedure;
//     da.SelectCommand.Parameters.AddWithValue("@Email", users.Email);
//     da.SelectCommand.Parameters.AddWithValue("@Password", users.Password);
//     DataTable dt = new DataTable();
//     da.Fill(dt);
    
//     Response response = new Response();
//     Users user = new Users();
    
//     if (dt.Rows.Count > 0)
//     {
//         user.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
//         user.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
//         user.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
//         user.Email = Convert.ToString(dt.Rows[0]["Email"]);
//         user.Type = Convert.ToString(dt.Rows[0]["Type"]);
        
//         response.StatusCode = 200;
//         response.StatusMessage = "Log In Successfull!";
//         response.user = user;
//         response.userId = user.ID; // Set the userId property in the response
//     }
//     else
//     {
//         response.StatusCode = 100;
//         response.StatusMessage = "User is Invalid";
//         response.user = null;
//         response.userId = null; // Set the userId property to null if the user is invalid
//     }
    
//     return response;
// }


//for login @User
public Response login(Users users, SqlConnection connection)
{
    SqlDataAdapter da = new SqlDataAdapter("sp_login1", connection);
    da.SelectCommand.CommandType = CommandType.StoredProcedure;
    da.SelectCommand.Parameters.AddWithValue("@Email", users.Email);
    da.SelectCommand.Parameters.AddWithValue("@Password", users.Password);
    DataTable dt = new DataTable();
    da.Fill(dt);

    Response response = new Response();
    Users user = new Users();

    try
    {
        if (dt.Rows.Count > 0)
        {
            DataRow row = dt.Rows[0];
            user.ID = Convert.ToInt32(row["ID"]);
            user.FirstName = Convert.ToString(row["FirstName"]);
            user.LastName = Convert.ToString(row["LastName"]);
            user.Email = Convert.ToString(row["Email"]);
            user.Type = Convert.ToString(row["Type"]);

            response.StatusCode = 200;
            response.StatusMessage = "Log In Successful!";
            response.user = user;
            response.userId = user.ID; // Set the userId property in the response
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Invalid email or password";
            response.user = null;
            response.userId = null; // Set the userId property to null if the login failed
        }
    }
    catch (InvalidCastException)
    {
        response.StatusCode = 100;
        response.StatusMessage = "Invalid email or password";
        response.user = null;
        response.userId = null; // Set the userId property to null if the login failed
    }

    return response;
}


        


//to view profile details @User
public Response viewUser(Users users, SqlConnection connection)
{
    SqlDataAdapter da = new SqlDataAdapter("p_viewUser", connection);
    da.SelectCommand.CommandType = CommandType.StoredProcedure;
    da.SelectCommand.Parameters.AddWithValue("@Email", users.Email);
    DataTable dt = new DataTable();
    da.Fill(dt);
    Response response = new Response();

    if (dt.Rows.Count > 0)
    {
        Users user = new Users();
        user.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
        user.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
        user.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
        user.Email = Convert.ToString(dt.Rows[0]["Email"]);
        user.Type = Convert.ToString(dt.Rows[0]["Type"]);
        user.Fund = Convert.ToDecimal(dt.Rows[0]["Fund"]);
        user.Password = Convert.ToString(dt.Rows[0]["Password"]);

        // Check for DBNull before converting to DateTime
        if (dt.Rows[0]["CreatedOn"] != DBNull.Value)
        {
            user.CreatedOn = Convert.ToDateTime(dt.Rows[0]["CreatedOn"]);
        }
        else
        {
            user.CreatedOn = DateTime.MinValue; // Set a default value if DBNull
        }

        response.StatusCode = 200;
        response.StatusMessage = "User exists";
        response.user = user; // Assign the user object to the response
    }
    else
    {
        response.StatusCode = 100;
        response.StatusMessage = "User does not exist";
        response.user = null;
    }

    return response;
}




//to update the profile details for @User
         public Response updateProfile(Users users, SqlConnection connection)
         {
            Response response=new Response();
            SqlCommand cmd=new SqlCommand("sp_updateProfile", connection);
            cmd.CommandType= CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
            cmd.Parameters.AddWithValue("@LastName", users.LastName);
            cmd.Parameters.AddWithValue("@Password", users.Password);
            cmd.Parameters.AddWithValue("@Email", users.Email);
            connection.Open();
            int i= cmd.ExecuteNonQuery();
            connection.Close();
            if(i>0)
            {
                response.StatusCode=200;
                response.StatusMessage="Record Updated Successfully";
            }
            else
            {
                    response.StatusCode=100;
                    response.StatusMessage="Some error occurred. Try after Some time";

            }

            return response;

         }


         //cart management
        //  public Response addToCart(Cart cart, SqlConnection connection)
        //  {
        //     Response response=new Response();
        //     SqlCommand cmd=new SqlCommand("sp_AddToCart", connection);
        //     cmd.CommandType=CommandType.StoredProcedure;
        //     cmd.Parameters.AddWithValue("@UserId", cart.UserId);
        //      cmd.Parameters.AddWithValue("@UnitPrice", cart.UnitPrice);
        //       cmd.Parameters.AddWithValue("@Discount", cart.Discount);
        //        cmd.Parameters.AddWithValue("@Quantity", cart.Quantity);
        //         cmd.Parameters.AddWithValue("@TotalPrice", cart.TotalPrice);
        //          cmd.Parameters.AddWithValue("@MedicineID", cart.MedicineID);
        //          connection.Open();
        //          int i=cmd.ExecuteNonQuery();
        //          connection.Close();
        //          if(i>0)
        //          {
        //             response.StatusCode=200;
        //             response.StatusMessage="Item Added Successfully";

        //          }
        //          else
        //          {
        //             response.StatusCode=100;
        //             response.StatusMessage="Item CouldNot be added ";
        //          }
        //          return response;
        //  }
        // public Response addToCart(Cart cart, SqlConnection connection)
        //  {
        //     Response response=new Response();
        //     SqlCommand cmd=new SqlCommand("sp_AddToCart1", connection);
        //     cmd.CommandType=CommandType.StoredProcedure;
        //     cmd.Parameters.AddWithValue("@UserId", cart.UserId);
        //      cmd.Parameters.AddWithValue("@UnitPrice", cart.UnitPrice);
        //       cmd.Parameters.AddWithValue("@Discount", cart.Discount);
        //        cmd.Parameters.AddWithValue("@Quantity", cart.Quantity);
        //         cmd.Parameters.AddWithValue("@TotalPrice", cart.TotalPrice);
        //          cmd.Parameters.AddWithValue("@MedicineID", cart.MedicineID);
        //          connection.Open();
        //          int i=cmd.ExecuteNonQuery();
        //          connection.Close();
        //          if(i>0)
        //          {
        //             response.StatusCode=200;
        //             response.StatusMessage="Item Added Successfully";

        //          }
        //          else
        //          {
        //             response.StatusCode=100;
        //             response.StatusMessage="Item CouldNot be added ";
        //          }
        //          return response;
        //  }
        // public Response addToCart(Cart cart, SqlConnection connection)
        //  {
        //     Response response=new Response();
        //     SqlCommand cmd=new SqlCommand("sp_AddToCart2", connection);
        //     cmd.CommandType=CommandType.StoredProcedure;
        //     cmd.Parameters.AddWithValue("@UserId", cart.UserId);
        //     cmd.Parameters.AddWithValue("@Name", cart.Name);
        //      cmd.Parameters.AddWithValue("@UnitPrice", cart.UnitPrice);
        //       cmd.Parameters.AddWithValue("@Discount", cart.Discount);
        //        cmd.Parameters.AddWithValue("@Quantity", cart.Quantity);
        //         cmd.Parameters.AddWithValue("@TotalPrice", cart.TotalPrice);
        //          cmd.Parameters.AddWithValue("@MedicineID", cart.MedicineID);
        //          connection.Open();
        //          int i=cmd.ExecuteNonQuery();
        //          connection.Close();
        //          if(i>0)
        //          {
        //             response.StatusCode=200;
        //             response.StatusMessage="Item Added Successfully";

        //          }
        //          else
        //          {
        //             response.StatusCode=100;
        //             response.StatusMessage="Item CouldNot be added ";
        //          }
        //          return response;
        //  }


//to add items in the cartlist @User
        public Response addToCart(Cart cart, SqlConnection connection)
         {
            Response response=new Response();
            SqlCommand cmd=new SqlCommand("sp_AddToCart3", connection);
            cmd.CommandType=CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@UserId", cart.UserId);
            cmd.Parameters.AddWithValue("@Name", cart.Name);
             cmd.Parameters.AddWithValue("@UnitPrice", cart.UnitPrice);
              cmd.Parameters.AddWithValue("@Discount", cart.Discount);
               cmd.Parameters.AddWithValue("@Quantity", cart.Quantity);
                cmd.Parameters.AddWithValue("@TotalPrice", cart.TotalPrice);
                 cmd.Parameters.AddWithValue("@MedicineID", cart.MedicineID);
                  cmd.Parameters.AddWithValue("@ImageUrl", cart.ImageUrl);
                 connection.Open();
                 int i=cmd.ExecuteNonQuery();
                 connection.Close();
                 if(i>0)
                 {
                    response.StatusCode=200;
                    response.StatusMessage="Item Added Successfully";

                 }
                 else
                 {
                    response.StatusCode=100;
                    response.StatusMessage="Item CouldNot be added ";
                 }
                 return response;
         }
  


//to get the cart items by pericular logged in user Id for @User
public List<Cart> GetCartItemsByUserId(int userId, SqlConnection connection)
{
    List<Cart> cartItems = new List<Cart>();

    SqlCommand cmd = new SqlCommand("sp_GetCartItemsByUserId3", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@UserId", userId);

    connection.Open();
    SqlDataReader reader = cmd.ExecuteReader();
    while (reader.Read())
    {
        Cart cartItem = new Cart();
        cartItem.ID = Convert.ToInt32(reader["ID"]);
        cartItem.UserId = Convert.ToInt32(reader["UserId"]);
         cartItem.MedicineID = Convert.ToInt32(reader["MedicineID"]);
        cartItem.Name = reader["Name"].ToString();
        cartItem.Quantity = Convert.ToInt32(reader["Quantity"]);
          cartItem.Discount = Convert.ToDecimal(reader["Discount"]);
            cartItem.TotalPrice = Convert.ToDecimal(reader["TotalPrice"]);
              cartItem.ImageUrl = reader["ImageUrl"].ToString();

         

        // Set other properties of the cart item

        cartItems.Add(cartItem);
    }
    connection.Close();

    return cartItems;
}



//to remove an item from the cart @User
 public Response RemoveCartItem(int id, SqlConnection connection)
{
    Response response = new Response();

    SqlCommand cmd = new SqlCommand("sp_RemoveCartItem", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@ID", id);

    try
    {
        connection.Open();
        int rowsAffected = cmd.ExecuteNonQuery();
        connection.Close();

        if (rowsAffected > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Medicine deleted successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to delete medicine";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}

//clear all cart data after order placed @User
public Response ClearCartData(int userId, SqlConnection connection)
{
    Response response = new Response();

    SqlCommand cmd = new SqlCommand("sp_ClearCartData", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@UserId", userId);

    try
    {
        connection.Open();
        int rowsAffected = cmd.ExecuteNonQuery();
        connection.Close();

        if (rowsAffected > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Cart Data Removed Successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to delete CartData";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}




//to place an order for @user
public Response placeOrder(Orders orders, SqlConnection connection)
{
    Response response = new Response();
    try
    {
        SqlCommand cmd = new SqlCommand("sp_PlaceOrder6", connection);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@OrderNo", orders.OrderNo);
        cmd.Parameters.AddWithValue("@OrderStatus", orders.OrderStatus);
        cmd.Parameters.AddWithValue("@UserId", orders.UserId);
        cmd.Parameters.AddWithValue("@OrderTotal", orders.OrderTotal);
        cmd.Parameters.AddWithValue("@Address", orders.Address);

        connection.Open();
        int orderID = Convert.ToInt32(cmd.ExecuteScalar());
        
        foreach (var item in orders.OrderItems)
        {
            SqlCommand cmdItems = new SqlCommand("sp_InsertOrderItems", connection);
            cmdItems.CommandType = CommandType.StoredProcedure;
            cmdItems.Parameters.AddWithValue("@OrderID", orderID);
            cmdItems.Parameters.AddWithValue("@OrderNo", item.OrderNo);
            cmdItems.Parameters.AddWithValue("@MedicineID", item.MedicineID);
            cmdItems.Parameters.AddWithValue("@Name", item.Name);
            cmdItems.Parameters.AddWithValue("@UnitPrice", item.UnitPrice);
            cmdItems.Parameters.AddWithValue("@Discount", item.Discount);
            cmdItems.Parameters.AddWithValue("@Quantity", item.Quantity);
            cmdItems.Parameters.AddWithValue("@TotalPrice", item.TotalPrice);
            cmdItems.Parameters.AddWithValue("@ImageUrl", item.ImageUrl);
            
            cmdItems.ExecuteNonQuery();
        }
        
        connection.Close();

        response.StatusCode = 200;
        response.StatusMessage = "Order has been placed successfully";
    }
    catch (Exception ex)
    {
        response.StatusCode = 100;
        response.StatusMessage = "Error occurred while placing the order: " + ex.Message;
    }

    return response;
}


//To get the lists of orders placed by user ID @User
public Response GetOrderList(int userId, SqlConnection connection)
{
    Response response = new Response();
    try
    {
        SqlCommand cmd = new SqlCommand("sp_GetOrderListByUserId21", connection);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@UserId", userId);

        List<Orders> listOrder = new List<Orders>();

        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();

        while (reader.Read())
        {
            Orders order = new Orders();
            order.ID = Convert.ToInt32(reader["ID"]);
            order.OrderNo = Convert.ToString(reader["OrderNo"]);
            order.OrderTotal = Convert.ToDecimal(reader["OrderTotal"]);
            order.OrderStatus = Convert.ToString(reader["OrderStatus"]);
            order.Address = Convert.ToString(reader["Address"]);

            // Retrieve order items for each order
            order.OrderItems = GetOrderItems(order.ID, connection); // Call GetOrderItems

            listOrder.Add(order);
        }

        reader.Close(); // Close the DataReader
        connection.Close();

        if (listOrder.Count > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Order Details Fetched";
            response.listOrders = listOrder;
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Order Details are not available";
            response.listOrders = null;
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 100;
        response.StatusMessage = "Error occurred while fetching order details: " + ex.Message;
    }

    return response;
}


//for admin to get all orders list  @Admin
public Response GetAllOrders(SqlConnection connection)
{
    Response response = new Response();
      List<Orders> listOrder = new List<Orders>();

    try
    {
        SqlCommand cmd = new SqlCommand("SELECT * FROM Orders", connection);
        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();

        while (reader.Read())
        {
            Orders order = new Orders();
            order.ID = Convert.ToInt32(reader["ID"]);
            order.UserId = Convert.ToInt32(reader["UserId"]);
            order.OrderNo = Convert.ToString(reader["OrderNo"]);
            order.OrderTotal = Convert.ToDecimal(reader["OrderTotal"]);
            order.OrderStatus = Convert.ToString(reader["OrderStatus"]);
            order.Address = Convert.ToString(reader["Address"]);

            // Retrieve order items for each order
            order.OrderItems = GetOrderItems(order.ID, connection); // Call GetOrderItems

            listOrder.Add(order);
        }

        reader.Close();
        connection.Close();

        response.StatusCode = 200;
        response.StatusMessage = "Orders retrieved successfully";
         response.listOrders = listOrder;
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}


//to get the all details of ordered items details after clicking an ID @User, @Admin
public List<OrderItems> GetOrderItems(int orderId, SqlConnection connection)
{
    List<OrderItems> OrderItems = new List<OrderItems>();
    try
    {
    SqlCommand cmd = new SqlCommand("sp_GetOrderItemsByOrderId21", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@OrderId", orderId);

    connection.Open();
    SqlDataReader reader = cmd.ExecuteReader();
    while (reader.Read())
    {
        OrderItems item = new OrderItems();
        item.ID = Convert.ToInt32(reader["ID"]);
        item.OrderNo = Convert.ToString(reader["OrderNo"]);
         item.MedicineID = Convert.ToInt32(reader["MedicineID"]);
        item.Name = reader["Name"].ToString();
        item.Quantity = Convert.ToInt32(reader["Quantity"]);
         item.UnitPrice = Convert.ToDecimal(reader["UnitPrice"]);
          item.Discount = Convert.ToDecimal(reader["Discount"]);
            item.TotalPrice = Convert.ToDecimal(reader["TotalPrice"]);
              item.ImageUrl = reader["ImageUrl"].ToString();

         

        // Set other properties of the cart item

        OrderItems.Add(item);
    }
    connection.Close();
          reader.Close(); // Close the DataReader
          
           

    }
    catch (Exception ex)
    {
        // Handle any exceptions that occur while fetching order items
    }

    return OrderItems;
}







        //view orders
        // public Response orderList(Users users, SqlConnection connection)
        // {
        //     Response response=new Response();
        //     List<Orders>listOrder=new List<Orders>();
        //     SqlDataAdapter da= new SqlDataAdapter("sp_OrderList",connection);
        //     da.SelectCommand.CommandType= CommandType.StoredProcedure;
        //     da.SelectCommand.Parameters.AddWithValue("@Type", users.Type);
        //     da.SelectCommand.Parameters.AddWithValue("@ID", users.ID);
        //     DataTable dt=new DataTable();
        //     da.Fill(dt);
        //     //Response response=new Response();
        //     Users user=new Users();
        //     if(dt.Rows.Count>0)
        //     {
        //         for (int i = 0; i < dt.Rows.Count; i++)
        //         {
        //             Orders order=new Orders();
        //             order.ID=Convert.ToInt32(dt.Rows[i]["ID"]);
        //             order.OrderNo=Convert.ToString(dt.Rows[i]["OrderNo"]);
        //             order.OrderTotal=Convert.ToDecimal(dt.Rows[i]["OrderTotal"]);
        //             order.OrderStatus=Convert.ToString(dt.Rows[i]["OrderStatus"]);
        //             listOrder.Add(order);

                    
        //         }
        //         if(listOrder.Count>0)
        //         {
        //             response.StatusCode=200;
        //             response.StatusMessage="Order Details Fetched";
        //             response.listOrders=listOrder;
        //         }
        //         else
        //         {
        //             response.StatusCode=100;
        //             response.StatusMessage="Order Details are not available";
        //             response.listOrders=null;

        //         }


        //     }
        //     else
        //     {
        //            response.StatusCode=100;
        //             response.StatusMessage="Order Details Fetched";
        //             response.listOrders=listOrder;
        //     }
        //     return response;

        // }


        // public Response orderList(Users users, SqlConnection connection)
        // {
        //     Response response=new Response();
        //     List<Orders>listOrder=new List<Orders>();
        //     SqlDataAdapter da= new SqlDataAdapter("sp_OrderList1",connection);
        //     da.SelectCommand.CommandType= CommandType.StoredProcedure;
        //     da.SelectCommand.Parameters.AddWithValue("@Type", users.Type);
        //     da.SelectCommand.Parameters.AddWithValue("@ID", users.ID);
        //     DataTable dt=new DataTable();
        //     da.Fill(dt);
        //     //Response response=new Response();
        //     Users user=new Users();
        //     if(dt.Rows.Count>0)
        //     {
        //         for (int i = 0; i < dt.Rows.Count; i++)
        //         {
        //             Orders order=new Orders();
        //             order.ID=Convert.ToInt32(dt.Rows[i]["ID"]);
        //             order.OrderNo=Convert.ToString(dt.Rows[i]["OrderNo"]);
        //             order.OrderTotal=Convert.ToDecimal(dt.Rows[i]["OrderTotal"]);
        //             order.OrderStatus=Convert.ToString(dt.Rows[i]["OrderStatus"]);

        //              order.Address=Convert.ToString(dt.Rows[i]["Address"]);
        //               order.MedicineID=Convert.ToInt32(dt.Rows[i]["MedicineID"]);
        //                order.Name=Convert.ToString(dt.Rows[i]["Name"]);
        //                order.UnitPrice=Convert.ToDecimal(dt.Rows[i]["UnitPrice"]);
        //                 order.Discount=Convert.ToDecimal(dt.Rows[i]["Discount"]);
                         
        //                   order.Quantity=Convert.ToInt32(dt.Rows[i]["Quantity"]);
        //                    order.TotalPrice=Convert.ToDecimal(dt.Rows[i]["TotalPrice"]);
        //                     order.ImageUrl=Convert.ToString(dt.Rows[i]["ImageUrl"]);

        //             listOrder.Add(order);

                    
        //         }
        //         if(listOrder.Count>0)
        //         {
        //             response.StatusCode=200;
        //             response.StatusMessage="Order Details Fetched";
        //             response.listOrders=listOrder;
        //         }
        //         else
        //         {
        //             response.StatusCode=100;
        //             response.StatusMessage="Order Details are not available";
        //             response.listOrders=null;

        //         }


        //     }
        //     else
        //     {
        //            response.StatusCode=100;
        //             response.StatusMessage="Order Details Fetched";
        //             response.listOrders=listOrder;
        //     }
        //     return response;

        // }



        //for admin == method to add and update medicines
        // public Response AddUpdateMedicine(Medicines medicines, SqlConnection connection)
        // {
        //     Response response = new Response();

        //     SqlCommand cmd = new SqlCommand("sp_AddUpdateMedicine", connection);
        //     cmd.CommandType = CommandType.StoredProcedure;
        //     cmd.Parameters.AddWithValue("@ID", medicines.ID);
        //     cmd.Parameters.AddWithValue("@Name", medicines.Name);
        //     cmd.Parameters.AddWithValue("@Manufacturer", medicines.Manufacturer);
        //     cmd.Parameters.AddWithValue("@UnitPrice", medicines.UnitPrice);
        //     cmd.Parameters.AddWithValue("@Discount", medicines.Discount);
        //     cmd.Parameters.AddWithValue("@Quantity", medicines.Quantity);
        //     cmd.Parameters.AddWithValue("@ExpDate", medicines.ExpDate);
        //     cmd.Parameters.AddWithValue("@ImageUrl", medicines.ImageUrl);
        //     cmd.Parameters.AddWithValue("@Status", medicines.Status);

        //     try
        //     {
        //         connection.Open();
        //         int rowsAffected = cmd.ExecuteNonQuery();
        //         connection.Close();

        //         if (rowsAffected > 0)
        //         {
        //             response.StatusCode = 200;
        //             response.StatusMessage = "Medicine added/updated successfully";
        //         }
        //         else
        //         {
        //             response.StatusCode = 100;
        //             response.StatusMessage = "Failed to add/update medicine";
        //         }
        //     }
        //     catch (Exception ex)
        //     {
        //         response.StatusCode = 500;
        //         response.StatusMessage = "Internal server error";
        //         // You can log the exception details here for troubleshooting
        //     }

        //     return response;
        // }


//method to add the medicines @Admin
        //  public Response AddUpdateMedicine(Medicines medicines, SqlConnection connection)
        // {
        //     Response response = new Response();

        //     SqlCommand cmd = new SqlCommand("sp_AddUpdateMedicine1", connection);
        //     cmd.CommandType = CommandType.StoredProcedure;
        //     cmd.Parameters.AddWithValue("@ID", medicines.ID);
        //     cmd.Parameters.AddWithValue("@Name", medicines.Name);
        //     cmd.Parameters.AddWithValue("@Manufacturer", medicines.Manufacturer);
        //     cmd.Parameters.AddWithValue("@UnitPrice", medicines.UnitPrice);
        //     cmd.Parameters.AddWithValue("@Discount", medicines.Discount);
        //     cmd.Parameters.AddWithValue("@Quantity", medicines.Quantity);
        //     cmd.Parameters.AddWithValue("@ExpDate", medicines.ExpDate);
        //     cmd.Parameters.AddWithValue("@ImageUrl", medicines.ImageUrl);
        //     cmd.Parameters.AddWithValue("@Status", medicines.Status);
        //     cmd.Parameters.AddWithValue("@Description", medicines.Description);

        //     try
        //     {
        //         connection.Open();
        //         int rowsAffected = cmd.ExecuteNonQuery();
        //         connection.Close();

        //         if (rowsAffected > 0)
        //         {
        //             response.StatusCode = 200;
        //             response.StatusMessage = "Medicine added/updated successfully";
        //         }
        //         else
        //         {
        //             response.StatusCode = 100;
        //             response.StatusMessage = "Failed to add/update medicine";
        //         }
        //     }
        //     catch (Exception ex)
        //     {
        //         response.StatusCode = 500;
        //         response.StatusMessage = "Internal server error";
        //         // You can log the exception details here for troubleshooting
        //     }

        //     return response;
        // }

         public Response AddUpdateMedicine(Medicines medicines, SqlConnection connection)
        {
            Response response = new Response();

            SqlCommand cmd = new SqlCommand("sp_AddUpdateMedicineC1", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ID", medicines.ID);
            cmd.Parameters.AddWithValue("@Name", medicines.Name);
            cmd.Parameters.AddWithValue("@Manufacturer", medicines.Manufacturer);
            cmd.Parameters.AddWithValue("@UnitPrice", medicines.UnitPrice);
            cmd.Parameters.AddWithValue("@Discount", medicines.Discount);
            cmd.Parameters.AddWithValue("@Quantity", medicines.Quantity);
            cmd.Parameters.AddWithValue("@ExpDate", medicines.ExpDate);
            cmd.Parameters.AddWithValue("@ImageUrl", medicines.ImageUrl);
            cmd.Parameters.AddWithValue("@Status", medicines.Status);
            cmd.Parameters.AddWithValue("@Description", medicines.Description);
            cmd.Parameters.AddWithValue("@CategoryId", medicines.CategoryId);

            try
            {
                connection.Open();
                int rowsAffected = cmd.ExecuteNonQuery();
                connection.Close();

                if (rowsAffected > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "Medicine added/updated successfully";
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Failed to add/update medicine";
                }
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.StatusMessage = "Internal server error";
                // You can log the exception details here for troubleshooting
            }

            return response;
        }






//Method to delete medicines item @Admin
        public Response DeleteMedicine(int id, SqlConnection connection)
{
    Response response = new Response();

    SqlCommand cmd = new SqlCommand("sp_DeleteMedicine", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@ID", id);

    try
    {
        connection.Open();
        int rowsAffected = cmd.ExecuteNonQuery();
        connection.Close();

        if (rowsAffected > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Medicine deleted successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to delete medicine";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}


        

//         public Response GetAllMedicines(SqlConnection connection)
// {
//     Response response = new Response();
//     List<Medicines> medicinesList = new List<Medicines>();

//     try
//     {
//         SqlCommand cmd = new SqlCommand("SELECT * FROM Medicines", connection);
//         connection.Open();
//         SqlDataReader reader = cmd.ExecuteReader();

//         while (reader.Read())
//         {
//             Medicines medicine = new Medicines();
//             medicine.ID = Convert.ToInt32(reader["ID"]);
//             medicine.Name = reader["Name"].ToString();
//             medicine.Manufacturer = reader["Manufacturer"].ToString();
//             medicine.UnitPrice = Convert.ToDecimal(reader["UnitPrice"]);
//             medicine.Discount = Convert.ToDecimal(reader["Discount"]);
//             medicine.Quantity = Convert.ToInt32(reader["Quantity"]);
//             medicine.ExpDate = Convert.ToDateTime(reader["ExpDate"]);
//             medicine.ImageUrl = reader["ImageUrl"].ToString();
//             medicine.Status = Convert.ToInt32(reader["Status"]);

//             medicinesList.Add(medicine);
//         }

//         reader.Close();
//         connection.Close();

//         response.StatusCode = 200;
//         response.StatusMessage = "Medicines retrieved successfully";
//         response.listMedicines = medicinesList;
//     }
//     catch (Exception ex)
//     {
//         response.StatusCode = 500;
//         response.StatusMessage = "Internal server error";
//         // You can log the exception details here for troubleshooting
//     }

//     return response;
// }


//to get all the medicines list for @Users, @Admin
public Response GetAllMedicines(SqlConnection connection)
{
    Response response = new Response();
    List<Medicines> medicinesList = new List<Medicines>();

    try
    {
        SqlCommand cmd = new SqlCommand("SELECT * FROM Medicines", connection);
        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();

        while (reader.Read())
        {
            Medicines medicine = new Medicines();
            medicine.ID = Convert.ToInt32(reader["ID"]);
            medicine.Name = reader["Name"].ToString();
            medicine.Manufacturer = reader["Manufacturer"].ToString();
            medicine.UnitPrice = Convert.ToDecimal(reader["UnitPrice"]);
            medicine.Discount = Convert.ToDecimal(reader["Discount"]);
            medicine.Quantity = Convert.ToInt32(reader["Quantity"]);
            medicine.ExpDate = Convert.ToDateTime(reader["ExpDate"]);
            medicine.ImageUrl = reader["ImageUrl"].ToString();
            medicine.Status = Convert.ToInt32(reader["Status"]);
            medicine.Description = reader["Description"].ToString();
            medicine.CategoryId = Convert.ToInt32(reader["CategoryId"]);

            medicinesList.Add(medicine);
        }

        reader.Close();
        connection.Close();

        response.StatusCode = 200;
        response.StatusMessage = "Medicines retrieved successfully";
        response.listMedicines = medicinesList;
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}


//view medicines working code2
// public Response GetMedicineDetails(SqlConnection connection, int id)
// {
//     Response response = new Response();
//     Medicines medicine = new Medicines();

//     try
//     {
//         SqlCommand cmd = new SqlCommand("SELECT * FROM Medicines WHERE ID = @ID", connection);
//         cmd.Parameters.AddWithValue("@ID", id);
//         connection.Open();
//         SqlDataReader reader = cmd.ExecuteReader();

//         if (reader.Read())
//         {
//             medicine.ID = Convert.ToInt32(reader["ID"]);
//             medicine.Name = reader["Name"].ToString();
//             medicine.Manufacturer = reader["Manufacturer"].ToString();
//             medicine.UnitPrice = Convert.ToDecimal(reader["UnitPrice"]);
//             medicine.Discount = Convert.ToDecimal(reader["Discount"]);
//             medicine.Quantity = Convert.ToInt32(reader["Quantity"]);
//             medicine.ExpDate = Convert.ToDateTime(reader["ExpDate"]);
//             medicine.ImageUrl = reader["ImageUrl"].ToString();
//             medicine.Status = Convert.ToInt32(reader["Status"]);

//             // Retrieve additional details for the medicine
//            // medicine.Description = reader["Description"].ToString();
//            // medicine.Composition = reader["Composition"].ToString();
//             // Retrieve any other relevant details for the medicine
//         }

//         reader.Close();
//         connection.Close();

//         response.StatusCode = 200;
//         response.StatusMessage = "Medicine details retrieved successfully";
//         response.MedicineDetails = medicine;
//     }
//     catch (Exception ex)
//     {
//         response.StatusCode = 500;
//         response.StatusMessage = "Internal server error";
//         // You can log the exception details here for troubleshooting
//     }

//     return response;
// }

// to view the all medicines details in seperate page by clciking an id or image @User, @Admin
public Response GetMedicineDetails(SqlConnection connection, int id)
{
    Response response = new Response();
    Medicines medicine = null;

    try
    {
        SqlCommand cmd = new SqlCommand("SELECT * FROM Medicines WHERE ID = @ID", connection);
        cmd.Parameters.AddWithValue("@ID", id);
        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();

        if (reader.Read())
        {
            medicine = new Medicines();
            medicine.ID = Convert.ToInt32(reader["ID"]);
            medicine.Name = reader["Name"].ToString();
            medicine.Manufacturer = reader["Manufacturer"].ToString();
            medicine.UnitPrice = Convert.ToDecimal(reader["UnitPrice"]);
            medicine.Discount = Convert.ToDecimal(reader["Discount"]);
            medicine.Quantity = Convert.ToInt32(reader["Quantity"]);
            medicine.ExpDate = Convert.ToDateTime(reader["ExpDate"]);
            medicine.ImageUrl = reader["ImageUrl"].ToString();
            medicine.Status = Convert.ToInt32(reader["Status"]);
            medicine.Description = reader["Description"].ToString();
            medicine.CategoryId = Convert.ToInt32(reader["CategoryId"]);
        }

        reader.Close();
        connection.Close();

        if (medicine != null)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Medicine details retrieved successfully";
            response.MedicineDetails = medicine;
        }
        else
        {
            response.StatusCode = 404;
            response.StatusMessage = "Medicine not found";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}


//search operation to search medicines from the by name @User, @Admin
public Response SearchMedicines(SqlConnection connection, string name)
{
    Response response = new Response();
    List<Medicines> medicinesList = new List<Medicines>();

    try
    {
        SqlCommand cmd = new SqlCommand("SELECT * FROM Medicines WHERE Name LIKE '%' + @Name + '%'", connection);
        cmd.Parameters.AddWithValue("@Name", name);
        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();

        while (reader.Read())
        {
            Medicines medicine = new Medicines();
            medicine.ID = Convert.ToInt32(reader["ID"]);
            medicine.Name = reader["Name"].ToString();
            medicine.Manufacturer = reader["Manufacturer"].ToString();
            medicine.UnitPrice = Convert.ToDecimal(reader["UnitPrice"]);
            medicine.Discount = Convert.ToDecimal(reader["Discount"]);
            medicine.Quantity = Convert.ToInt32(reader["Quantity"]);
            medicine.ExpDate = Convert.ToDateTime(reader["ExpDate"]);
            medicine.ImageUrl = reader["ImageUrl"].ToString();
            medicine.Status = Convert.ToInt32(reader["Status"]);
            medicine.CategoryId = Convert.ToInt32(reader["CategoryId"]);

            medicinesList.Add(medicine);
        }

        reader.Close();
        connection.Close();

        response.StatusCode = 200;
        response.StatusMessage = "Medicines retrieved successfully";
        response.listMedicines = medicinesList;
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}

//search medicines by id
public Response GetMedicineById(SqlConnection connection, int id)
{
    Response response = new Response();
    Medicines medicine = null;

    try
    {
        SqlCommand cmd = new SqlCommand("SELECT * FROM Medicines WHERE ID = @Id", connection);
        cmd.Parameters.AddWithValue("@Id", id);
        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();

        if (reader.Read())
        {
            medicine = new Medicines();
            medicine.ID = Convert.ToInt32(reader["ID"]);
            medicine.Name = reader["Name"].ToString();
            medicine.Manufacturer = reader["Manufacturer"].ToString();
            medicine.UnitPrice = Convert.ToDecimal(reader["UnitPrice"]);
            medicine.Discount = Convert.ToDecimal(reader["Discount"]);
            medicine.Quantity = Convert.ToInt32(reader["Quantity"]);
            medicine.ExpDate = Convert.ToDateTime(reader["ExpDate"]);
            medicine.ImageUrl = reader["ImageUrl"].ToString();
            medicine.Status = Convert.ToInt32(reader["Status"]);
            medicine.CategoryId = Convert.ToInt32(reader["CategoryId"]);
        }

        reader.Close();
        connection.Close();

        if (medicine != null)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Medicine retrieved successfully";
            response.medicine = medicine;
        }
        else
        {
            response.StatusCode = 404;
            response.StatusMessage = "Medicine not found";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}





//view Medicines 1
// public Response viewMedicine(int ID, SqlConnection connection)
// {
//     SqlDataAdapter da = new SqlDataAdapter("sp_viewMedicine", connection);
//     da.SelectCommand.CommandType = CommandType.StoredProcedure;
//     da.SelectCommand.Parameters.AddWithValue("@ID", ID);
//     //da.SelectCommand.Parameters.AddWithValue("@Name", Name);
//     DataTable dt = new DataTable();
//     da.Fill(dt);
//     Response response = new Response();

//     if (dt.Rows.Count > 0)
//     {
//         Medicines medicine = new Medicines();
//         medicine.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
//         medicine.Name = Convert.ToString(dt.Rows[0]["Name"]);
//         medicine.Manufacturer = Convert.ToString(dt.Rows[0]["Manufacturer"]);
//         medicine.UnitPrice = Convert.ToDecimal(dt.Rows[0]["UnitPrice"]);
//         medicine.Discount = Convert.ToDecimal(dt.Rows[0]["Discount"]);
//         medicine.Quantity = Convert.ToInt32(dt.Rows[0]["Quantity"]);
//         medicine.ExpDate = Convert.ToDateTime(dt.Rows[0]["ExpDate"]);
//         medicine.ImageUrl = Convert.ToString(dt.Rows[0]["ImageUrl"]);

    
      

//         response.StatusCode = 200;
//         response.StatusMessage = "Medicine exists";
//         response.medicines = medicine; // Assign the user object to the response
//     }
//     else
//     {
//         response.StatusCode = 100;
//         response.StatusMessage = "medicine does not exist";
//         response.medicines = null;
//     }

//     return response;
// }
// public Response viewMedicineDetails(int ID, SqlConnection connection)
// {
//     SqlDataAdapter da = new SqlDataAdapter("sp_viewMedicine", connection);
//     da.SelectCommand.CommandType = CommandType.StoredProcedure;
//     da.SelectCommand.Parameters.AddWithValue("@ID", ID);
//     //da.SelectCommand.Parameters.AddWithValue("@Name", Name);
//     DataTable dt = new DataTable();
//     da.Fill(dt);
//     Response response = new Response();

//     if (dt.Rows.Count > 0)
//     {
//         Medicines medicine = new Medicines();
//         medicine.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
//         medicine.Name = Convert.ToString(dt.Rows[0]["Name"]);
//         medicine.Manufacturer = Convert.ToString(dt.Rows[0]["Manufacturer"]);
//         medicine.UnitPrice = Convert.ToDecimal(dt.Rows[0]["UnitPrice"]);
//         medicine.Discount = Convert.ToDecimal(dt.Rows[0]["Discount"]);
//         medicine.Quantity = Convert.ToInt32(dt.Rows[0]["Quantity"]);
//         medicine.ExpDate = Convert.ToDateTime(dt.Rows[0]["ExpDate"]);
//         medicine.ImageUrl = Convert.ToString(dt.Rows[0]["ImageUrl"]);

    
      

//         response.StatusCode = 200;
//         response.StatusMessage = "Medicine exists";
//         response.medicine = medicine; // Assign the user object to the response
//     }
//     else
//     {
//         response.StatusCode = 100;
//         response.StatusMessage = "medicine does not exist";
//         response.medicine = null;
//     }

//     return response;
// }

// public Response viewMedicine(Medicines medicines, SqlConnection connection)
// {
//     SqlDataAdapter da = new SqlDataAdapter("sp_viewMedicine1", connection);
//     da.SelectCommand.CommandType = CommandType.StoredProcedure;
//     da.SelectCommand.Parameters.AddWithValue("@ID", medicines.ID);
   
    
//     DataTable dt = new DataTable();
//     da.Fill(dt);
    
//     Response response = new Response();
//     Medicines medicine = new Medicines();
    
//     if (dt.Rows.Count > 0)
//     {
//         medicine.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
//         medicine.Name = Convert.ToString(dt.Rows[0]["Name"]);
//         medicine.Manufacturer = Convert.ToString(dt.Rows[0]["Manufacturer"]);
//         medicine.UnitPrice = Convert.ToDecimal(dt.Rows[0]["UnitPrice"]);
//         medicine.Discount = Convert.ToDecimal(dt.Rows[0]["Discount"]);
//         medicine.Quantity = Convert.ToInt32(dt.Rows[0]["Quantity"]);
//         medicine.ExpDate = Convert.ToDateTime(dt.Rows[0]["ExpDate"]);
//         medicine.ImageUrl = Convert.ToString(dt.Rows[0]["ImageUrl"]);
        
//         response.StatusCode = 200;
//         response.StatusMessage = "User is Valid";
//         response.medicine = medicine;
//         //response.userId = user.ID; // Set the userId property in the response
//     }
//     else
//     {
//         response.StatusCode = 100;
//         response.StatusMessage = "User is Invalid";
//         response.medicine = null;
//         //response.userId = null; // Set the userId property to null if the user is invalid
//     }
    
//     return response;
// }
        public async Task<Response> UploadFile(string fileName, Stream stream, SqlConnection connection)
        {
            Response response = new Response();

            try
            {
                // Save the file to the server
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads", fileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await stream.CopyToAsync(fileStream);
                }

                // Save the file data to the database
                byte[] fileData;
                using (var memoryStream = new MemoryStream())
                {
                    stream.Seek(0, SeekOrigin.Begin);
                    await stream.CopyToAsync(memoryStream);
                    fileData = memoryStream.ToArray();
                }

                string insertQuery = "INSERT INTO Medicines (Name, ImageData, ImageUrl) VALUES (@Name, @ImageData, @ImageUrl);";
                using (SqlCommand command = new SqlCommand(insertQuery, connection))
                {
                    command.Parameters.AddWithValue("@Name", fileName);
                    command.Parameters.AddWithValue("@ImageData", fileData);
                    await command.ExecuteNonQueryAsync();
                }

                response.StatusCode = 200;
                response.StatusMessage = "File uploaded successfully";
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.StatusMessage = "Internal server error";
                // You can log the exception details here for troubleshooting
            }

            return response;
        }


        



         //view  registred customers list  @Admin
         public Response userList(SqlConnection connection)
        {
            Response response=new Response();
            List<Users>listUsers=new List<Users>();
            SqlDataAdapter da= new SqlDataAdapter("sp_UserList",connection);
            da.SelectCommand.CommandType= CommandType.StoredProcedure;
            
            DataTable dt=new DataTable();
            da.Fill(dt);
           // Response response=new Response();
            Users user=new Users();
            if(dt.Rows.Count>0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Users use=new Users();
                    use.ID=Convert.ToInt32(dt.Rows[i]["ID"]);
                    use.FirstName=Convert.ToString(dt.Rows[i]["FirstName"]);
                    use.LastName=Convert.ToString(dt.Rows[i]["LastName"]);
                    use.Password=Convert.ToString(dt.Rows[i]["Password"]);
                    use.Email=Convert.ToString(dt.Rows[i]["Email"]);
                   use.Fund = dt.Rows[i]["Fund"] == DBNull.Value ? 0 : Convert.ToDecimal(dt.Rows[i]["Fund"]);

                   use.Status = dt.Rows[i]["Status"] == DBNull.Value ? 0 : Convert.ToInt32(dt.Rows[i]["Status"]);

                    use.CreatedOn = dt.Rows[i]["CreatedOn"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(dt.Rows[i]["CreatedOn"]);

                       
                    listUsers.Add(use);

                    
                }
                if(listUsers.Count>0)
                {
                    response.StatusCode=200;
                    response.StatusMessage="User Details Fetched";
                    response.listUsers=listUsers;
                }
                else
                {
                    response.StatusCode=100;
                    response.StatusMessage="Users Details are not available";
                    response.listUsers=null;

                }


            }
            else
            {
                   response.StatusCode=100;
                    response.StatusMessage="Order Details Fetched";
                    response.listUsers=listUsers;
            }
            return response;

        }



//delete registred user from the list @Admin
public Response DeleteUser(int id, SqlConnection connection)
{
    Response response = new Response();

    SqlCommand cmd = new SqlCommand("sp_DeleteUser", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@ID", id);

    try
    {
        connection.Open();
        int rowsAffected = cmd.ExecuteNonQuery();
        connection.Close();

        if (rowsAffected > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "User deleted successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to delete User";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}

//         public Response userList(SqlConnection connection)
// {
//     Response response = new Response();
//     List<Users> userList = new List<Users>();

//     try
//     {
//         SqlCommand cmd = new SqlCommand("SELECT * FROM Users", connection);
//         connection.Open();
//         SqlDataReader reader = cmd.ExecuteReader();

//         while (reader.Read())
//         {
//             Users user = new Users();
//             user.ID = Convert.ToInt32(reader["ID"]);
//             user.FirstName = reader["FirstName"].ToString();
//             user.LastName = reader["LastName"].ToString();
//             user.Password =  reader["Password"].ToString();
//             user.Email =  reader["Email"].ToString();
//             user.Fund = Convert.ToInt32(reader["Fund"]);
//             user.Status = Convert.ToInt32(reader["Status"]);
//             user.CreatedOn = Convert.ToDateTime(reader["CreatedOn"]);
           

//             userList.Add(user);
//         }

//         reader.Close();
//         connection.Close();

//         response.StatusCode = 200;
//         response.StatusMessage = "Users retrieved successfully";
//         response.listUsers = userList;
//     }
//     catch (Exception ex)
//     {
//         response.StatusCode = 500;
//         response.StatusMessage = "Internal server error";
//         // You can log the exception details here for troubleshooting
//     }

//     return response;
// }



//to add an address in the cart or in the profile @User
         public Response AddAddress(Address address, SqlConnection connection)
         {
            Response response=new Response();
            SqlCommand cmd=new SqlCommand("sp_AddAddress", connection);
            cmd.CommandType=CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@UserId", address.UserId);
            cmd.Parameters.AddWithValue("@Address1", address.Address1);
            cmd.Parameters.AddWithValue("@Address2", address.Address2);
            cmd.Parameters.AddWithValue("@Address3", address.Address3);
            cmd.Parameters.AddWithValue("@Address4", address.Address4);
            cmd.Parameters.AddWithValue("@Address5", address.Address5);
            cmd.Parameters.AddWithValue("@Address6", address.Address6);
            

                 connection.Open();
                 int i=cmd.ExecuteNonQuery();
                 connection.Close();
                 if(i>0)
                 {
                    response.StatusCode=200;
                    response.StatusMessage="Address Added Successfully";

                 }
                 else
                 {
                    response.StatusCode=100;
                    response.StatusMessage="Address CouldNot be added ";
                 }
                 return response;
         }


      
//To get an address by userId for @User
public List<Address> GetCartAddressByUserId(int userId, SqlConnection connection)
{
    List<Address> cartAddresses = new List<Address>();

    SqlCommand cmd = new SqlCommand("sp_GetCartAddressByUserId", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@UserId", userId);

    connection.Open();
    SqlDataReader reader = cmd.ExecuteReader();
    while (reader.Read())
    {
        Address cartAddress = new Address();
        cartAddress.ID = Convert.ToInt32(reader["ID"]);
        cartAddress.UserId = Convert.ToInt32(reader["UserId"]);
        cartAddress.Address1 = reader["Address1"].ToString();
         cartAddress.Address2 = reader["Address2"].ToString();
         cartAddress.Address3 = reader["Address3"].ToString();
          cartAddress.Address4 = reader["Address4"].ToString();
           cartAddress.Address5 = reader["Address5"].ToString();
            cartAddress.Address6 = reader["Address6"].ToString();
       
       
         

        // Set other properties of the cart item

        cartAddresses.Add(cartAddress);
    }
    connection.Close();

    return cartAddresses;
}
  


//remove address from the profile @User
public Response RemoveCartAddress(int id, SqlConnection connection)
{
    Response response = new Response();

    SqlCommand cmd = new SqlCommand("sp_RemoveCartAddress", connection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.AddWithValue("@ID", id);

    try
    {
        connection.Open();
        int rowsAffected = cmd.ExecuteNonQuery();
        connection.Close();

        if (rowsAffected > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "address deleted successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to delete address";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}


//Updare an address in the profile @User
 public Response UpdateAddress(Address address, SqlConnection connection)
        {
            Response response = new Response();

            SqlCommand cmd = new SqlCommand("sp_UpdateAddress", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ID", address.ID);
            cmd.Parameters.AddWithValue("@Address1", address.Address1);
             cmd.Parameters.AddWithValue("@Address2", address.Address2);
              cmd.Parameters.AddWithValue("@Address3", address.Address3);
               cmd.Parameters.AddWithValue("@Address4", address.Address4);
                cmd.Parameters.AddWithValue("@Address5", address.Address5);
                 cmd.Parameters.AddWithValue("@Address6", address.Address6);
           

            try
            {
                connection.Open();
                int rowsAffected = cmd.ExecuteNonQuery();
                connection.Close();

                if (rowsAffected > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "Address updated successfully";
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Failed to update address";
                }
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.StatusMessage = "Internal server error";
                // You can log the exception details here for troubleshooting
            }

            return response;
        }



        //handlr order status
        // public Response UpdateOrderStatus(Orders orders, SqlConnection connection)
        // {
        //     Response response = new Response();

        //     SqlCommand cmd = new SqlCommand("sp_UpdateOrderStatus", connection);
        //     cmd.CommandType = CommandType.StoredProcedure;
        //     cmd.Parameters.AddWithValue("@ID", orders.ID);
        //     cmd.Parameters.AddWithValue("@OrderStatus", orders.OrderStatus);

           

        //     try
        //     {
        //         connection.Open();
        //         int rowsAffected = cmd.ExecuteNonQuery();
        //         connection.Close();

        //         if (rowsAffected > 0)
        //         {
        //             response.StatusCode = 200;
        //             response.StatusMessage = "OrderStatus updated successfully";
        //         }
        //         else
        //         {
        //             response.StatusCode = 100;
        //             response.StatusMessage = "Failed to update OrderStatus";
        //         }
        //     }
        //     catch (Exception ex)
        //     {
        //         response.StatusCode = 500;
        //         response.StatusMessage = "Internal server error";
        //         // You can log the exception details here for troubleshooting
        //     }

        //     return response;
        // }


//   public Response UpdateOrderStatus(int ID, string orderStatus, SqlConnection connection)
// {
//     Response response = new Response();
//     SqlCommand cmd = new SqlCommand("sp_updateOrderStatus2", connection);
//     cmd.CommandType = CommandType.StoredProcedure;
//     cmd.Parameters.AddWithValue("@ID", ID);
//     cmd.Parameters.AddWithValue("@OrderStatus", orderStatus);
//     connection.Open();
//     int i = cmd.ExecuteNonQuery();
//     connection.Close();
//     if (i > 0)
//     {
//         response.StatusCode = 200;
//         response.StatusMessage = "OrderStatus Updated Successfully";
//     }
//     else
//     {
//         response.StatusCode = 100;
//         response.StatusMessage = "Some error occurred. Try after Some time";
//     }

//     return response;
// }


//update an order status @Admin
 public Response UpdateOrderStatus(int ID, string orderStatus, SqlConnection connection)
{
    Response response = new Response();
    try
    {
        SqlCommand cmd = new SqlCommand("UPDATE Orders SET OrderStatus = @OrderStatus WHERE ID = @ID", connection);
        cmd.Parameters.AddWithValue("@ID", ID);
        cmd.Parameters.AddWithValue("@OrderStatus", orderStatus);
        connection.Open();
        int rowsAffected = cmd.ExecuteNonQuery();
        connection.Close();

        if (rowsAffected > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "OrderStatus updated successfully";
        }
        else
        {
            response.StatusCode = 404;
            response.StatusMessage = "Order not found";
        }
    }
    catch (Exception ex)
    {
        response.StatusCode = 500;
        response.StatusMessage = "Internal server error";
        // You can log the exception details here for troubleshooting
    }

    return response;
}




    }
}
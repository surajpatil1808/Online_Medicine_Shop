// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;

// namespace Api.Models
// {
//     public class Response
//     {
//         public int StatusCode{get; set;}
//         public string StatusMessage{get; set;}

//         public List<Users> listUsers {get; set;}
//         public Users user {get; set;}

//         public List<Medicines> listMedicines {get; set;}
//         public Medicines medicine {get; set;}
        
        

//         public List<Cart> listCart{get; set;}
        
//         public List<Orders> listOrders{get; set;}
//         public Orders order {get; set;}

//         public List<OrderItems> listItems{get; set;}
//         public OrderItems OrderItem {get; set;}





//     }
// }

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Response
    {
        public int StatusCode{get; set;}
        public string StatusMessage{get; set;}

        public List<Users> listUsers {get; set;}
        public Users user {get; set;}

        public List<Medicines> listMedicines {get; set;}
        public Medicines medicine {get; set;}
        public Medicines medicines {get; set;}
         public Medicines MedicineDetails { get; set; }
        
        

        public List<Cart> listCart{get; set;}
        public Cart cart {get; set;}
        public List<Cart> cartItems{get; set;}
       
        
        
        public List<Orders> listOrders{get; set;}
        public Orders order {get; set;}

        public List<OrderItems> listItems{get; set;}
         public List<OrderItems> listItem{get; set;}
           public List<OrderItems> orderItems{get; set;}
         
        public OrderItems OrderItem {get; set;}

        
        public int? userId { get; set; }

         public List<Address> listAddress{get; set;}
        public Address address {get; set;}
        public List<Address> cartAddresses{get; set;}


  //public List<Orders> listOrders{get; set;}
       // public Orders order {get; set;}
        public List<Orders> cartOrders{get; set;}
        public object Data { get; set; }



    }
}
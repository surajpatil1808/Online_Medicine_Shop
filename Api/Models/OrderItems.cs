using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class OrderItems
    {
        public int ID { get; set; }
  
    public string OrderNo { get; set; }
    public int MedicineID { get; set; }
    public string Name { get; set; }
    public decimal UnitPrice { get; set; }
    public decimal Discount { get; set; }
    public int Quantity { get; set; }
    public decimal TotalPrice { get; set; }
    public string ImageUrl { get; set; }


    }
}
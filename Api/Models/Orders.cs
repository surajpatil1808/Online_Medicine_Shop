using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
  //   public class Orders
  //   {
  //       public int ID { get; set; }

  //   public int UserId { get; set; }
  //   public string OrderNo { get; set; }
  //   public decimal OrderTotal { get; set; }
  //   public string OrderStatus { get; set; }
  //    public string orderStatus { get; set; }

  //   public string Address { get; set; }
  //  public List<OrderItems> OrderItems { get; set; }
   
  //    // public List<OrderItems> listItems { get; set; }
  //   }

  public class Orders
{
    public int ID { get; set; }
    public int UserId { get; set; }
    public string OrderNo { get; set; }
    public decimal OrderTotal { get; set; }
    public string OrderStatus { get; set; }
    public string Address { get; set; }
    public List<OrderItems> OrderItems { get; set; }
}

}
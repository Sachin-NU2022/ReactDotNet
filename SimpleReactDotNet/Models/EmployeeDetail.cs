using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SimpleReactDotNet.Models
{
    public class EmployeeDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StaffId { get; set; }
        [StringLength(30)]
        public string StaffName { get; set; }
        [StringLength(40)]
        [DataType(DataType.EmailAddress)]
        public string StaffEmail { get; set; }
        [StringLength(40)]
        public string StaffAddress { get; set; }
        [MinLength(10)]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNo { get; set; }
    }
}

using Microsoft.AspNetCore.Mvc;
using SimpleReactDotNet.Models;

namespace SimpleReactDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly StaffDbContext _dbContext;
        public EmployeeController(StaffDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetEmployees")]
        public IActionResult GetEmployees()
        {
            List<EmployeeDetail> list = _dbContext.EmployeeDetail.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpGet]
        [Route("GetEmployees/{staffId}")]
        public IActionResult GetSingleEmployee(int staffId)
        {
            var list = _dbContext.EmployeeDetail.Find(staffId);
            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult RegisterEmployees(EmployeeDetail employeeDetail)
        {
            _dbContext.EmployeeDetail.Add(employeeDetail);
            _dbContext.SaveChanges();
            return StatusCode(StatusCodes.Status200OK, employeeDetail);

            //return RedirectToAction(nameof(GetEmployees));
        }

        [HttpPut]
        [Route("GetEmployees/{staffId}")]
        public IActionResult UpdateEmployee(int staffId, EmployeeDetail employeeDetail)
        {
            if (staffId == employeeDetail.StaffId )
            {
                _dbContext.Update(employeeDetail);
                _dbContext.SaveChanges();
            }
            return StatusCode(StatusCodes.Status200OK, employeeDetail);
        }

        [HttpDelete]
        [Route("GetEmployees/{staffId}")]
        public IActionResult DeleteEmployee(int staffId)
        {
            var employee = _dbContext.EmployeeDetail.Find(staffId);
            if (employee == null)
            {
                return NotFound();
            }
            _dbContext.EmployeeDetail.Remove(employee);
            _dbContext.SaveChanges();
            return StatusCode(StatusCodes.Status200OK);
        }
    }
}


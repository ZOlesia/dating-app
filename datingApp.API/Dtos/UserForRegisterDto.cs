using System.ComponentModel.DataAnnotations;

namespace datingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        [MinLength(3, ErrorMessage = "Username has to be no less than 3 characters")]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}
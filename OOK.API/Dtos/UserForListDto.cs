using System;

namespace OOK.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }  
        public string KnownAs { get; set; }
        public string Ranking { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Mobile { get; set; }
        public string PhotoUrl { get; set; }
    }
}
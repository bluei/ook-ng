using System;
using System.Collections.Generic;

namespace OOK.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }  
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Ranking { get; set; }
        public DateTime? LastTestDate { get; set; }
        public string Introduction { get; set; }
        public string Interests { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Zip { get; set; } 
        public string Mobile { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}
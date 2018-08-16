using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OOK.API.Migrations
{
    public partial class AddedStreetLastTestDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LastTestDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Ranking",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Street",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastTestDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Ranking",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Street",
                table: "Users");
        }
    }
}

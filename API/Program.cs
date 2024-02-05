using API.Extensions;
using API.Helpers;
using API.Middleware;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            #region SERVICES
            builder.Services.AddAutoMapper(typeof(MappingProfiles));
            builder.Services.AddControllers();
            builder.Services.AddDbContext<StoreContext>(c => c.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.Services.AddApplicationServices();
            builder.Services.AddSwaggerDocumentation();
            builder.Services.AddCors(ops =>
            {
                ops.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
                });
            });
            //  builder.Services.AddEndpointsApiExplorer();
            #endregion

            var app = builder.Build();
            #region MIDDLEWARE
            app.UseMiddleware<ExceptionMiddleware>();
            app.UseStatusCodePagesWithReExecute("/errors/{0}");
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseStaticFiles();
            app.UseCors("CorsPolicy");
            app.UseAuthorization();
            app.UseSwaggerDocumantation();
            app.MapControllers();
            #endregion

            #region db seeding
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();

                try
                {
                    var context = services.GetRequiredService<StoreContext>();

                    //ეს გააკეთებს ბაზის აფდეით არსებული მიგრაციებით, ისე რო ჩვენით დატაბაზის აფდეითი არ გვჭირდება. თავისით მიხედავს დასტარტვაზე
                    await context.Database.MigrateAsync();
                    await StoreContextSeed.SeedAsync(context, loggerFactory);
                }
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "migraciis dros moxda erori");
                }
            }
            #endregion

            app.Run();
        }
    }
}
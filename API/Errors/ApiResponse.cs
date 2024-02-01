
namespace API.Errors
{
    public class ApiResponse
    {
        public int StatusCode { get; set; }
        public string ErrorMessage { get; set; }

        public ApiResponse(int statusCode, string errorMessage = null)
        {
            StatusCode = statusCode;
            ErrorMessage = errorMessage ?? GetDefaultMessage(statusCode);
        }

        private string GetDefaultMessage(int statusCode)
        {
            return statusCode switch
            {
                400 => "a bad request, you have made",
                401 => "you are not authorized",
                404 => "resource not found",
                500 => "server error",
                _ => null
            };
        }
    }
}
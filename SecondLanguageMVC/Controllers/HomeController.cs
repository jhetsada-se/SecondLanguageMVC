using Microsoft.AspNetCore.Mvc;

namespace MultiLangMvc.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(string lang = "en")
        {
            string logoText;
            string title;
            string message;
            string footer;

            if (lang == "en")
            {
                logoText = "Second-Language page";
                title = "Welcome";
                message = "This is a second-language sample page using /th/ and /en/ paths.";
                footer = "Try clicking the EN | TH button at the top to switch languages.";
            }
            else
            {
                logoText = "หน้าเว็บสองภาษา";
                title = "ยินดีต้อนรับ";
                message = "นี่คือตัวอย่างหน้าเว็บแบบสองภาษาที่ใช้โครง URL /th/ และ /en/.";
                footer = "ลองคลิกปุ่ม EN | TH ที่ด้านบนเพื่อเปลี่ยนภาษา.";
            }

            ViewData["TitleText"] = title;
            ViewData["BodyText"] = message;
            ViewData["LogoText"] = logoText;
            ViewData["FooterText"] = footer;

            return View();
        }
    }
}

# Second Language MVC (.NET 8 + ASP.NET Core MVC)

I built this project to practice creating a multi-language website using ASP.NET Core MVC (.NET 8).  
The goal of this project is to learn how to structure URL-based language routing (TH/EN) and switch languages
without needing resource files or external libraries.

It’s a small project where I explored how to:
- Build language-aware routes such as `/th/Home/Index` and `/en/Home/Index`
- Switch languages using JavaScript by replacing URL prefixes
- Share layout components and display text dynamically based on selected language

## Setup & Run

1. Open the solution in **Visual Studio 2022**  
2. Run the project with **F5**  
3. Navigate to:  
   - `https://localhost:xxxx/th/Home/Index` (Thai)  
   - `https://localhost:xxxx/en/Home/Index` (English)  
4. The root URL `/` auto-redirects to `/en/Home/Index`

You can switch languages using the **TH | EN** language selector in the top-right header.

## Highlights

- URL-based multi-language routing (`/{lang}/{controller}/{action}`)
- JavaScript language switcher that rewrites path prefixes (`/th/` ↔ `/en/`)
- Dynamic page content using simple controller logic (ViewData)
- Clean and minimal Bootstrap UI
- Example pages for testing bilingual layout and content


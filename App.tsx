import { ButtonStack, type ButtonItem } from "./ButtonStack"
import { ThemeProvider } from "./ThemeProvider"
import { ThemeToggle } from "./ThemeToggle"

export default function App() {
  const employeeItems: ButtonItem[] = [
    { id: "1", name: "John Smith", leaveCount: 5 },
    { id: "2", name: "Sarah Johnson", leaveCount: 3 },
    { id: "3", name: "Michael Brown", leaveCount: 0 },
    { id: "4", name: "Emily Davis", leaveCount: 2 },
    { id: "5", name: "David Wilson", leaveCount: 7 },
    { id: "6", name: "Jessica Taylor", leaveCount: 1 },
    { id: "7", name: "Robert Miller", leaveCount: 4 },
  ]

  const handleButtonClick = (employee: ButtonItem) => {
    console.log(`Employee: ${employee.name}, Leave Count: ${employee.leaveCount}`)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-purple-900 dark:via-violet-800 dark:to-indigo-900 bg-fixed bg-no-repeat bg-cover p-4 relative overflow-hidden transition-colors duration-500">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30 dark:opacity-30"></div>

        {/* Glowing orbs - visible only in dark mode */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 dark:bg-pink-500/30 rounded-full filter blur-3xl opacity-0 dark:opacity-30 animate-pulse transition-opacity duration-500"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/30 rounded-full filter blur-3xl opacity-0 dark:opacity-30 animate-pulse transition-opacity duration-500"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Content container with glass effect */}
        <div className="relative z-10 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-white/20 max-w-md w-full transition-colors duration-500">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center transition-colors duration-500">
            Employee Leave Status
          </h2>
          <div className="flex justify-center">
            <ButtonStack buttons={employeeItems} onButtonClick={handleButtonClick} />
          </div>
        </div>

        <footer className="mt-8 text-gray-600 dark:text-white/60 text-sm text-center relative z-10 transition-colors duration-500">
          Click on an employee to see the animation effect
        </footer>
      </div>
    </ThemeProvider>
  )
}


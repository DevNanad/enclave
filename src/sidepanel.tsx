import "~style.css"
import { MemoryRouter } from "react-router-dom"
import { Routing } from "~routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


function IndexSidePanel() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-primary w-full text-[#242424]">
        < div className="flex gap-3 flex-col bg-white rounded-xl w-full h-full">
          <MemoryRouter>
            <Routing />
          </MemoryRouter>
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
export default IndexSidePanel

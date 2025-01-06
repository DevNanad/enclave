import "~style.css"
import { MemoryRouter } from "react-router-dom"
import { Routing } from "~routes"

function IndexSidePanel() {
  return (
    <div className="h-screen bg-primary w-full p-2">
      < div className="flex gap-3 flex-col bg-white rounded-xl w-full h-full">
        <MemoryRouter>
          <Routing />
        </MemoryRouter>
      </div>
    </div>
  )
}
export default IndexSidePanel

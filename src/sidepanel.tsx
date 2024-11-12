import "~style.css"
import { MemoryRouter } from "react-router-dom"
import { Routing } from "~routes"

function IndexSidePanel() {
  return (
    <div className="h-screen flex gap-3 flex-col bg-primary w-full p-4">
      <MemoryRouter>
        <Routing />
      </MemoryRouter>
    </div>
  )
}
export default IndexSidePanel

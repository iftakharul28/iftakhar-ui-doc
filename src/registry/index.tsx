import * as React from "react"
export const Index: Record<string, any> = {
    "accordion": {
      name: "accordion",
      type: "components:ui",
      component: React.lazy(() => import("../components/Accordion")),
    },
    "alert": {
      name: "breadcrumb",
      type: "components:ui",
      component: React.lazy(() => import("../components/Breadcrumb")),
    },
}
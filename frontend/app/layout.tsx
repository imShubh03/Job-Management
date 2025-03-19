import type React from "react"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import "@mantine/notifications/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"
import { Notifications } from "@mantine/notifications"

const theme = createTheme({
  primaryColor: "violet",
  colors: {
    violet: [
      "#f5f0ff",
      "#e5dbfa",
      "#c9b2f3",
      "#ac87ec",
      "#9566e6",
      "#8652e1",
      "#7d47df",
      "#6c37c7",
      "#6031b3",
      "#532a9f",
    ],
    blue: [
      "#e6f7ff",
      "#b0d9ff",
      "#7abaff",
      "#4498ff",
      "#0077ff",
      "#0062d6",
      "#004eb2",
      "#003a8f",
      "#00276b",
      "#001547",
    ],
  },
  fontFamily: "Inter, sans-serif",
  defaultRadius: "md",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Job Management Admin</title>
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications position="top-right" />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  )
}


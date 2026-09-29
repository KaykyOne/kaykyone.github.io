"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { cn } from "@/lib/utils"
import worldGeo from "@/lib/geo/world-countries-110m.json"
import brazilGeo from "@/lib/geo/brazil-states-topo.json"
import { Reveal } from "@/components/ui/reveal"

type MapView = "world" | "brazil"

const countryLabels: Record<string, string> = {
  Portugal: "Portugal",
  Spain: "Espanha",
  Georgia: "Geórgia",
  Brazil: "Brasil",
  "United Kingdom": "Reino Unido",
}

const stateLabels: Record<string, string> = {
  SP: "São Paulo",
  MS: "Mato Grosso do Sul",
  PA: "Pará",
  RJ: "Rio de Janeiro",
  PR: "Paraná",
  MT: "Mato Grosso",
  PI: "Piauí",
  CE: "Ceará",
  MA: "Maranhão",
}

const geographyStyle = (isActive: boolean) => ({
  default: {
    fill: isActive ? "var(--primary)" : "var(--map-inactive)",
    stroke: "var(--map-stroke)",
    strokeWidth: 0.5,
    outline: "none",
  },
  hover: {
    fill: isActive ? "var(--secondary)" : "var(--map-inactive)",
    stroke: "var(--map-stroke)",
    strokeWidth: 0.5,
    outline: "none",
  },
  pressed: {
    fill: "var(--secondary)",
    stroke: "var(--map-stroke)",
    strokeWidth: 0.5,
    outline: "none",
  },
})

export function ClientsMap() {
  const [view, setView] = useState<MapView>("world")
  const [hovered, setHovered] = useState<string | null>(null)

  const legend = view === "world" ? Object.values(countryLabels) : Object.values(stateLabels)

  return (
    <section id="clientes" className="bg-surface py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="section-index">06.</span>
          <h2 className="text-4xl sm:text-6xl">Clientes pelo mundo</h2>
        </Reveal>

        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl leading-7 text-muted-foreground">
            Atendo clientes remotamente em diferentes países e estados, entregando o mesmo nível de qualidade e
            proximidade de um projeto local.
          </p>
          <div className="flex gap-6">
            <div>
              <p className="font-serif text-3xl text-primary">{Object.keys(countryLabels).length}</p>
              <p className="text-xs text-muted-foreground">Países atendidos</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary">{Object.keys(stateLabels).length}</p>
              <p className="text-xs text-muted-foreground">Estados no Brasil</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="brutal-panel flex flex-col gap-6 p-5">
            <div className="flex gap-2 overflow-x-auto rounded-lg bg-muted p-1 lg:flex-col">
              {(["world", "brazil"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setView(key)
                    setHovered(null)
                  }}
                  className={cn("tab-pill", view === key ? "tab-pill-active" : "tab-pill-idle")}
                >
                  {key === "world" ? "Mundo" : "Brasil"}
                </button>
              ))}
            </div>

            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">
                {view === "world" ? "Países atendidos" : "Estados atendidos"}
              </p>
              <div className="flex flex-wrap gap-2">
                {legend.map((name) => (
                  <span key={name} className="brutal-tag text-primary">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="brutal-panel relative px-4 py-6 sm:px-6 sm:py-8">
            <div className="pointer-events-none absolute left-4 top-4 z-10 min-h-8 sm:left-6 sm:top-6">
              {hovered && (
                <span className="inline-flex rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background">
                  {hovered}
                </span>
              )}
            </div>

            {view === "world" ? (
              <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{ scale: 145 }}
                width={800}
                height={520}
                className="h-auto w-full"
              >
                <Geographies geography={worldGeo}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const name = geo.properties.name as string
                      const isActive = name in countryLabels
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => isActive && setHovered(countryLabels[name])}
                          onMouseLeave={() => setHovered(null)}
                          style={geographyStyle(isActive)}
                        />
                      )
                    })
                  }
                </Geographies>
              </ComposableMap>
            ) : (
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 700, center: [-52, -14] }}
                width={800}
                height={520}
                className="h-auto w-full"
              >
                <Geographies geography={brazilGeo}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const sigla = geo.properties.sigla as string
                      const isActive = sigla in stateLabels
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => isActive && setHovered(stateLabels[sigla])}
                          onMouseLeave={() => setHovered(null)}
                          style={geographyStyle(isActive)}
                        />
                      )
                    })
                  }
                </Geographies>
              </ComposableMap>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import dynamic from "next/dynamic"

export const ClientsMap = dynamic(
  () => import("@/components/portfolio/clients-map").then((mod) => mod.ClientsMap),
  {
    ssr: false,
    loading: () => (
      <section className="bg-surface py-24 sm:py-32">
        <div className="section-shell">
          <div className="h-[420px] animate-pulse rounded-xl bg-muted" />
        </div>
      </section>
    ),
  }
)

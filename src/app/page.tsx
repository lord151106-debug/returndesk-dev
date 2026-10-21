const workflow = [
  { number: "01", title: "Capture", description: "Create a request with order, item, customer, and reason details." },
  { number: "02", title: "Review", description: "Move requests through the permitted review workflow." },
  { number: "03", title: "Resolve", description: "Record a valid refund, replacement, or store-credit outcome." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas px-4 py-6 text-ink sm:px-8 sm:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col">
        <header className="flex items-center justify-between border-b border-black/10 pb-5">
          <a href="/" className="flex items-center gap-3" aria-label="ReturnDesk home">
            <span className="grid size-10 place-items-center rounded-xl bg-brand text-lg font-bold text-white">R</span>
            <span>
              <span className="block text-lg font-semibold tracking-tight">ReturnDesk</span>
              <span className="block text-xs text-muted">Returns operations</span>
            </span>
          </a>
          <span className="rounded-full border border-brand/20 bg-white px-3 py-1.5 text-xs font-medium text-brand">
            Assessment build
          </span>
        </header>

        <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-muted">
              <span className="size-2 rounded-full bg-brand" />
              A clearer way to manage returns
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Every return has a next step.
              <span className="mt-2 block text-brand">Keep it moving.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              A focused workspace for support teams to review return requests, track decisions, and resolve customer issues with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm">
                Request desk coming next
              </span>
              <span className="inline-flex items-center rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-medium text-ink">
                Built with Next.js
              </span>
            </div>
            <p className="mt-4 text-xs text-muted">Foundation milestone · Request workflows are not implemented yet.</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-panel sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-5">
              <div>
                <p className="text-sm font-medium text-muted">Workflow overview</p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight">From request to resolution</h2>
              </div>
              <span className="rounded-lg bg-canvas px-3 py-2 text-xs font-semibold text-brand">3 steps</span>
            </div>
            <div className="divide-y divide-black/10">
              {workflow.map((step) => (
                <div key={step.number} className="flex gap-4 py-5 last:pb-1">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#e8f3ef] text-sm font-semibold text-brand">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-black/10 pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>ReturnDesk · Returns and replacements workspace</span>
          <span>Designed for clarity, consistency, and reliable decisions.</span>
        </footer>
      </div>
    </main>
  );
}

import DashboardCard from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Side */}

          <div>

            <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
              <span className="text-sm font-medium text-cyan-400">
                AI Governance • Technology Risk • Cybersecurity
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl">

              Helping Organizations

              <br />

              Build

              <br />

              <span className="text-cyan-400">
                Secure & Responsible AI
              </span>

            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-slate-300">
              Helping organizations strengthen cybersecurity,
              manage technology risk,
              implement AI Governance,
              and operationalize NIST AI RMF,
              ISO 42001,
              and enterprise AI compliance programs.
            </p>

            <div className="flex flex-wrap gap-4">

              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600"
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                Download Resume
              </Button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">
            <DashboardCard />
          </div>

        </div>

      </div>
    </section>
  );
}
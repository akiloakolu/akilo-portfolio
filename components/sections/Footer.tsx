export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="container mx-auto px-6 text-center text-slate-400">
        © {new Date().getFullYear()} Akilo Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
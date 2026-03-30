export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Nithish Pitla. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          Designed & Built with <span className="text-accent px-1">♥</span> using React & Tailwind
        </p>
      </div>
    </footer>
  );
}

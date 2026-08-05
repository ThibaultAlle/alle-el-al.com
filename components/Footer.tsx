import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-y-8 text-sm">
        <div className="space-y-3 text-muted-foreground">
          <div className="font-semibold text-foreground tracking-tight">Alle et al. Laboratory</div>
          <div>Skaggs School of Pharmacy and Pharmaceutical Sciences</div>
          <div>University of California, San Diego</div>
          <div>9255 Pharmacy Lane, MC 0657</div>
          <div>La Jolla, CA 92093-0657</div>
        </div>

        <div className="md:text-right space-y-1.5 text-muted-foreground">
          <a href="mailto:talle@health.ucsd.edu" className="block hover:text-foreground transition-colors">
            talle@health.ucsd.edu
          </a>
          <a 
            href="https://pharmacy.ucsd.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:text-foreground transition-colors"
          >
            pharmacy.ucsd.edu
          </a>
          <div className="pt-4 text-xs">
            © {new Date().getFullYear()} The Regents of the University of California. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

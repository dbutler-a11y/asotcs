"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "SOFA Method", href: "/sofa-method" },
  { name: "Community", href: "/community" },
  { name: "Programs", href: "/programs/sofa-intensive" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold tracking-tight text-primary">
            ASOTCS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/community">Join Free</Link>
          </Button>
          <Button asChild>
            <Link href="/community/vip">Join VIP</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/community" onClick={() => setIsOpen(false)}>
                    Join Free
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/community/vip" onClick={() => setIsOpen(false)}>
                    Join VIP
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

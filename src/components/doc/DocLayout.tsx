import { useState, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DocSidebar } from '@/components/doc/DocSidebar';
import { Menu } from 'lucide-react';

interface DocLayoutProps {
  children: ReactNode;
}

export const DocLayout = ({ children }: DocLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`
            fixed md:sticky top-24 left-0 z-40 w-72 h-[calc(100vh-8rem)]
            transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            glass-card p-6 overflow-y-auto
          `}>
            <DocSidebar />
          </aside>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden fixed top-24 left-4 z-50 p-2 glass-card"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          {/* Content */}
          <main className="flex-1 max-w-4xl">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

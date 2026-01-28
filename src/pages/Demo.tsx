import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Play, Construction } from 'lucide-react';

const Demo = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <div className="relative mb-8">
              <Construction size={120} className="text-orange-400 animate-pulse" />
              <Play size={60} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500" />
            </div>

            <h1 className="gradient-text text-5xl font-bold mb-6">
              🎮 Demo en Construcción
            </h1>

            <p className="text-muted-foreground text-xl mb-8 max-w-2xl">
              Estamos preparando una demostración interactiva del proyecto. Pronto podrás probar el Regenmon en vivo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl w-full">
              <div className="p-6 border border-border/50 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  💡 Qué Esperar
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Un demo interactivo donde podrás chatear con un Regenmon, ver su estado emocional en tiempo real, y experimentar la integración con IA.
                </p>
              </div>

              <div className="p-6 border border-border/50 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  🚀 Mientras Tanto
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explora la documentación completa y los prompts de cada sesión para comenzar a construir tu propio Regenmon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;

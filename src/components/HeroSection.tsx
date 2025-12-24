import { Button } from '@/components/ui/button';
import { ScrollLink } from '@/components/ScrollLink';

/**
 * EDITABLE UI COMPONENT - HeroSection
 * 
 * Hero section elegante para tienda de moda femenina.
 */

export const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-accent/20">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero.jpg" 
          alt="Elegancia Atemporal"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center">
          <div className="max-w-xl space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight">
                Elegancia<br />
                Atemporal
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-md">
                Descubre piezas sofisticadas que definen tu estilo único. Calidad excepcional, diseño refinado.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="/#collections">
                <Button size="lg" className="w-full sm:w-auto font-light tracking-wide">
                  Explorar Colecciones
                </Button>
              </ScrollLink>
              <ScrollLink to="/#products">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto font-light tracking-wide border-foreground/20 hover:bg-foreground/5"
                >
                  Ver Productos
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
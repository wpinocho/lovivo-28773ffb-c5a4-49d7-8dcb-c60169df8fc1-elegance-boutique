export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="ÉLÉGANTE Home" className="ml-2 flex items-center">
      <img 
        src="/logo.svg" 
        alt="ÉLÉGANTE"
        className="h-12 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-serif font-normal tracking-wide text-foreground">ÉLÉGANTE</span>';
        }}
      />
    </a>
  )
}
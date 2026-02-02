export function Map() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <p className="text-muted-foreground mb-6">Find us on the map or click to open in Google Maps.</p>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="DevCaterers Location"
            src="https://maps.google.com/maps?q=DevCaterers%20Bangalore&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

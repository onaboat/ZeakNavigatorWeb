export default function PromoImage() {
  return (
    <section id="promo-image" className="">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center">
          <iframe 
            width="960" 
            height="540" 
            src="https://www.youtube.com/embed/1zYOK1KeRMk?si=9_Rn8SeTLKaxymmB" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="max-w-full aspect-video"
          ></iframe>
        </div>
      </div>
    </section>
  );
} 
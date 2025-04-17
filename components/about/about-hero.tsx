import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Professional office team"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90">
            Leading the way in professional business solutions since 2012, 
            delivering excellence in Auto Sales, Civil Engineering, and General Contracts.
          </p>
        </div>
      </div>
    </section>
  );
}
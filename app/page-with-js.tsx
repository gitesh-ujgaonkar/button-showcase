"use client"

import ButtonEffects from "./button-effects"

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <ButtonEffects />

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Creative Button Showcase</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of creative and interactive buttons for modern web design. Hover over the buttons to see their
          effects.
        </p>
      </header>

      <nav className="mb-12">
        <ul className="flex flex-wrap justify-center gap-4">
          {["Basic", "Gradient", "3D", "Border", "Icon", "Animated"].map((category) => (
            <li key={category}>
              <a
                href={`#${category.toLowerCase()}`}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto">
        <ButtonSection
          id="basic"
          title="Basic Buttons"
          description="Simple yet effective button styles with hover effects."
        >
          <button className="btn-basic-1">Hover Me</button>
          <button className="btn-basic-2">Click Me</button>
          <button className="btn-basic-3">Simple Button</button>
          <button className="btn-basic-4">Rounded Button</button>
          <button className="btn-basic-5">Soft Shadow</button>
        </ButtonSection>

        <ButtonSection
          id="gradient"
          title="Gradient Buttons"
          description="Colorful gradient buttons with smooth transitions."
        >
          <button className="btn-gradient-1">Gradient Shift</button>
          <button className="btn-gradient-2">Color Flow</button>
          <button className="btn-gradient-3">Rainbow Effect</button>
          <button className="btn-gradient-4">Neon Glow</button>
          <button className="btn-gradient-5">Pastel Blend</button>
        </ButtonSection>

        <ButtonSection id="3d" title="3D Buttons" description="Buttons with depth and dimensional effects.">
          <button className="btn-3d-1">Push Down</button>
          <button className="btn-3d-2">Pop Up</button>
          <button className="btn-3d-3">Layered</button>
          <button className="btn-3d-4">Pressed</button>
          <button className="btn-3d-5">Floating</button>
        </ButtonSection>

        <ButtonSection id="border" title="Border Effect Buttons" description="Creative border animations and effects.">
          <button className="btn-border-1">Border Draw</button>
          <button className="btn-border-2">Border Spin</button>
          <button className="btn-border-3">Border Glow</button>
          <button className="btn-border-4">Border Fill</button>
          <button className="btn-border-5">Border Pulse</button>
        </ButtonSection>

        <ButtonSection id="icon" title="Icon Buttons" description="Buttons with interactive icon effects.">
          <button className="btn-icon-1">
            <span className="icon">→</span>
            <span>Slide Icon</span>
          </button>
          <button className="btn-icon-2">
            <span className="icon">+</span>
            <span>Rotate Icon</span>
          </button>
          <button className="btn-icon-3">
            <span className="icon">↓</span>
            <span>Bounce Icon</span>
          </button>
          <button className="btn-icon-4">
            <span className="icon">✓</span>
            <span>Fade Icon</span>
          </button>
          <button className="btn-icon-5">
            <span className="icon">⟳</span>
            <span>Spin Icon</span>
          </button>
        </ButtonSection>

        <ButtonSection
          id="animated"
          title="Animated Buttons"
          description="Buttons with complex animations and transitions."
        >
          <button className="btn-animated-1">Ripple Effect</button>
          <button className="btn-animated-2">Pulse Animation</button>
          <button className="btn-animated-3">Shake Effect</button>
          <button className="btn-animated-4">Glitch Effect</button>
          <button className="btn-animated-5">Magnetic</button>
        </ButtonSection>
      </main>

      <footer className="mt-16 text-center text-gray-500">
        <p>Created with HTML, CSS, and JavaScript</p>
      </footer>
    </div>
  )
}

function ButtonSection({ id, title, description, children }) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">{children}</div>
    </section>
  )
}


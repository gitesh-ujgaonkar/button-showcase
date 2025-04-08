# Creative Button Showcase

A modern web application showcasing various creative and interactive button designs. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Interactive button effects and animations
- Responsive design
- Modern UI components
- Dark/Light mode support
- Performance optimized
- Server-side rendering (SSR) support

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Next Themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm or yarn
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/button-showcase.git
   cd button-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see your application running.

## Project Structure

```
button-showcase/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── page-with-js.tsx   # Client-side page component
│   └── client-wrapper.tsx # Client component wrapper
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── theme-provider.tsx # Theme management
├── public/               # Static assets
└── styles/              # Global styles
```

## Deployment

### Deploying to Vercel

1. **Create a Vercel account**
   - Sign up at [vercel.com](https://vercel.com) if you haven't already

2. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

3. **Deploy using Vercel CLI**
   ```bash
   vercel
   ```

4. **Deploy using Vercel Dashboard**
   - Push your code to GitHub
   - Import your repository in Vercel
   - Configure your project settings
   - Deploy!

### Environment Variables

No environment variables are required for this project.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next Themes Documentation](https://github.com/pacocoursey/next-themes)

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository. 
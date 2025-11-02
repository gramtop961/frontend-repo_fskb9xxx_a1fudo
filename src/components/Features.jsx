import React from 'react';
import { Rocket, Shield, Image as ImageIcon, Video } from 'lucide-react';

const features = [
  {
    title: 'Fast & focused',
    description: 'A clean interface designed for speed and clarity, so you can stay in the flow.',
    icon: Rocket,
  },
  {
    title: 'Image generation',
    description: 'Create crisp visuals with simple controls and sensible defaults.',
    icon: ImageIcon,
  },
  {
    title: 'Video synthesis',
    description: 'Turn ideas into motion with short, story-ready clips.',
    icon: Video,
  },
  {
    title: 'Private by design',
    description: 'Your prompts and outputs stay yours with secure data practices.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Minimal tools, powerful results</h2>
          <p className="mt-3 text-gray-600">
            Built for creators who prefer clarity over clutter.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

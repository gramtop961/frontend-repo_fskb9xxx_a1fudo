import React, { useMemo, useState } from 'react';

const sizes = [
  { label: 'Square (1024×1024)', value: '1024x1024' },
  { label: 'Portrait (768×1024)', value: '768x1024' },
  { label: 'Landscape (1280×720)', value: '1280x720' },
];

const GeneratorPanel = () => {
  const [mode, setMode] = useState('image');
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState(sizes[0].value);
  const [duration, setDuration] = useState(5);

  const isVideo = mode === 'video';

  const canGenerate = useMemo(() => prompt.trim().length > 5, [prompt]);

  const onGenerate = () => {
    // Placeholder interaction for now; backend endpoints can be wired later.
    window.alert('Generation will be available once the AI backend is connected.');
  };

  return (
    <section id="create" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="mb-6 flex items-center gap-2">
          <button
            onClick={() => setMode('image')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              mode === 'image' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={mode === 'image'}
          >
            Image
          </button>
          <button
            onClick={() => setMode('video')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              mode === 'video' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={mode === 'video'}
          >
            Video
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-900">
            Prompt
          </label>
          <textarea
            id="prompt"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={
              isVideo
                ? 'A slow tilt shot over a futuristic city of glass, warm sunrise light, cinematic, 4k'
                : 'A serene, minimalist living room in soft morning light, neutral palette, high detail'
            }
            className="mt-2 w-full resize-y rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-900">Output size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                {sizes.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Guidance</label>
              <input
                type="range"
                min="1"
                max="20"
                defaultValue="8"
                className="mt-4 w-full"
              />
              <p className="mt-1 text-xs text-gray-500">How closely outputs follow the prompt.</p>
            </div>

            {isVideo ? (
              <div>
                <label className="block text-sm font-medium text-gray-900">Duration (s)</label>
                <input
                  type="number"
                  min={2}
                  max={20}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-900">Variations</label>
                <input
                  type="number"
                  min={1}
                  max={8}
                  defaultValue={1}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-gray-500">
              Connect your AI backend to enable generation.
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onGenerate}
                disabled={!canGenerate}
                className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition ${
                  canGenerate
                    ? 'bg-black text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Generate {isVideo ? 'Video' : 'Image'}
              </button>
              <button
                onClick={() => {
                  setPrompt('Minimalist workspace by a window, soft daylight, clean lines, neutral tones, high detail');
                  setMode('image');
                  setSize('1024x1024');
                }}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Try a sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorPanel;

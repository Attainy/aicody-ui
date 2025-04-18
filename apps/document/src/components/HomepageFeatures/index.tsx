import type { ReactNode } from 'react';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const features: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description:
      'Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.',
  },
  {
    title: 'Focus on What Matters',
    description:
      "Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the docs directory.",
  },
  {
    title: 'Powered by React',
    description:
      'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 shadow-sm p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

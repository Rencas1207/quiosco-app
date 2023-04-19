import { PassThrough } from 'stream';

const steps = [
  { step: 1, name: 'Menú', url: '/' },
  { step: 2, name: 'Resumen', url: '/resumen' },
  { step: 3, name: 'Datos y total ', url: '/total' },
];

const Steps = () => {
  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button className="text-2xl font-bold" key={step.step}>
            {step.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Steps;

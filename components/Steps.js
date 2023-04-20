import { useRouter } from 'next/router';

const steps = [
  { step: 1, name: 'Menú', url: '/' },
  { step: 2, name: 'Resumen', url: '/resumen' },
  { step: 3, name: 'Datos y total ', url: '/total' },
];

const Steps = () => {
  const router = useRouter();

  const calculateProgress = () => {
    let width;
    if (router.pathname === '/') {
      width = 2;
    } else if (router.pathname === '/resumen') {
      width = 46;
    } else {
      width = 100;
    }
    return width;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            onClick={() => {
              router.push(step.url);
            }}
            className="text-2xl font-bold"
            key={step.step}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="hola rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;

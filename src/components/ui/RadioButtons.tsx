import { twMerge } from "tailwind-merge";

export default function RadioButtons ({ title, options, selectedOption, onChange, className } : {
  title?: string;
  options: { label: string; value: string }[];
  selectedOption: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <fieldset className={twMerge('block, my-6', className)}>
      <legend className='text-base font-medium text-gray-900'>{title}</legend>
      <div className='mt-2 space-y-2 flex flex-wrap gap-2'>
        {options.map((option) => (
          <div key={option.value} className=' w-fit h-8 flex items-center border border-gray-200 rounded-md p-2'>
            <label htmlFor={option.value} className='flex items-center cursor-pointer'>
              <input
                id={option.value}
                name={title}
                type='radio'
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => onChange(option.value)}
                className='sr-only peer'
              />
              <span
                className={`h-4 w-4 rounded-full border border-black flex items-center justify-center mr-2 ${selectedOption === option.value ? 'border-black' : ''}`}
              >
                {selectedOption === option.value && (
                  <span className='block h-2 w-2 rounded-full bg-black border-5 border-black'></span>
                )}
              </span>
              <span className='block text-sm font-medium'>
                {option.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

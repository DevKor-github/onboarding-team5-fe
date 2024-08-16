import TastePicker from './TastePicker';

const PickYourTaste = () => {
  return (
    <div className='relative flex content-center justify-center pt-24 align-middle '>
      <div>
        <div className='flex h-20 w-12'>
          <TastePicker
            label='Horror'
            defaultColor='bg-red-300'
            selectedColor='bg-red-500'
          />
          <TastePicker
            label='Romance'
            defaultColor='bg-pink-200'
            selectedColor='bg-pink-400'
          />
          <TastePicker
            label='Action'
            defaultColor='bg-orange-300'
            selectedColor='bg-orange-500'
          />
          <TastePicker
            label='Comedy'
            defaultColor='bg-yellow-200'
            selectedColor='bg-yellow-400'
          />
        </div>
        <div className='pt-24'>
          <TastePicker
            label='Mello'
            defaultColor='bg-blue-300'
            selectedColor='bg-blue-500'
          />
          <TastePicker
            label='Classic'
            defaultColor='bg-slate-300'
            selectedColor='bg-slate-400'
          />
          <TastePicker
            label='Animation'
            defaultColor='bg-green-200'
            selectedColor='bg-green-400'
          />
          <TastePicker
            label='Thriller'
            defaultColor='bg-lime-200'
            selectedColor='bg-lime-400'
          />
        </div>
      </div>
    </div>
  );
};


export default PickYourTaste

import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <h2 className='font-semibold text-xl'>Convidados</h2>

      {/* Invited People*/}
      <div className='space-y-5'>

        {/* Invited People */}
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5 flex-1'>
            <span className='block font-medium text-zinc-100'>Juckson Pelembe</span>
            <span className='block text-sm text-zinc-400 truncate '>JucksonPelembe@gmail.com</span>
          </div>
          <CircleDashed className='text-zinc-400 size-5' />
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5 flex-1'>
            <span className='block font-medium text-zinc-100'>Juckson Pelembe</span>
            <span className='block text-sm text-zinc-400 truncate '>JucksonPelembe@gmail.com</span>
          </div>
          <CircleDashed className='text-zinc-400 size-5' />
        </div>

        {/* Button */}
        <div className="flex items-center gap-5">
          <button className="w-full flex justify-center items-center gap-2 bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-lg px-5 h-11 font-medium transition-all hover:bg-zinc-700 hover:border hover:border-zinc-200">
            <UserCog className="size-5" />Gerenciar Convidados
          </button>
        </div>
      </div>
    </div>
  )
}
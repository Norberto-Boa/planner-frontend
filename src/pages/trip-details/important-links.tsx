import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <h2 className='font-semibold text-xl'>Links Importantes</h2>

      {/*Links */}
      <div className='space-y-5'>

        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5 flex-1'>
            <span className='block font-medium text-zinc-100'>Reserva do AirBnb</span>
            <a href='#' className='block text-xs text-zinc-400 truncate transition-all hover:text-zinc-200'>https://www.airbnb.com.br/rooms/10470001145619841619861196</a>
          </div>
          <Link2 className='text-zinc-400 size-5' />
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5 flex-1'>
            <span className='block font-medium text-zinc-100'>Reserva do AirBnb</span>
            <a href='#' className='block text-xs text-zinc-400 truncate transition-all hover:text-zinc-200'>https://www.airbnb.com.br/rooms/10470001145619841619861196</a>
          </div>
          <Link2 className='text-zinc-400 size-5' />
        </div>
      </div>


      {/* Button */}
      <div className="flex items-center gap-5">
        <button className="w-full flex justify-center items-center gap-2 bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-lg px-5 h-11 font-medium transition-all hover:bg-zinc-700 hover:border hover:border-zinc-200">
          <Plus className="size-5" />Cadastrar Novo Link
        </button>
      </div>
    </div>
  )
}
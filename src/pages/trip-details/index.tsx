import { Plus } from 'lucide-react';
import { useState } from 'react';
import { CreateActivityModal } from './create-activity-modal';
import { ImportantLinks } from './important-links';
import { Guests } from './guests';
import { Activities } from './activities';
import { DestinationAndDateHeader } from './destination-and-date-header';

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

  function toggleCreateActivityModal() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      {/* Header */}
      <DestinationAndDateHeader />

      {/* Content */}
      <main className='flex gap-16 px-4'>
        {/* Center Content*/}
        <div className='flex-1 space-y-6'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Actividades</h2>

            <button onClick={toggleCreateActivityModal} className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium transition-all hover:bg-lime-400">
              Confirmar Viagem <Plus className="size-5" />
            </button>
          </div>

          {/* Activities */}
          <Activities />

        </div>

        {/* SideBar */}
        <div className='w-80 space-y-6'>
          {/* Important Links */}
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          toggleCreateActivityModal={toggleCreateActivityModal}
        />
      )}
    </div >
  )
}
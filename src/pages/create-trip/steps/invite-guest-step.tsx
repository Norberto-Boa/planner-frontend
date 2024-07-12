import { UserRoundPlus, ArrowRight } from 'lucide-react';

interface InviteGuestStepProps {
  emailsToInvite: string[],
  toggleGuestModal: () => void,
  toggleConfirmTripModal: () => void
}


export function InviteGuestStep({ emailsToInvite, toggleConfirmTripModal, toggleGuestModal }: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span onClick={toggleGuestModal} className="text-zinc-100 text-lg flex-1 text-left">{emailsToInvite.length} pessoa(s) convidada(s)</span>
        ) : (
          <span onClick={toggleGuestModal} className="text-zinc-400 text-lg flex-1 text-left">Quem estara na viagem?</span>
        )}
        {/* <input type="text" placeholder="Para onde Voce vai" className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1" /> */}
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      <button onClick={toggleConfirmTripModal} className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium transition-all hover:bg-lime-400">
        Confirmar Viagem <ArrowRight className="size-5" />
      </button>
    </div>
  )
}
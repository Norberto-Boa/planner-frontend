import { X, AtSign, Plus } from 'lucide-react';
import { FormEvent } from 'react';

interface InviteGuestModalProps {
  toggleGuestModal: () => void,
  emailsToInvite: string[],
  addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void,
  removeEmailFromInvite: (email: string) => void
}

export function InviteGuestModal({ toggleGuestModal, emailsToInvite, addNewEmailToInvite, removeEmailFromInvite }: InviteGuestModalProps) {
  return (<div className="fixed inset-0 bg-black/60 w-screen h-screen flex items-center justify-center">
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
          <button>
            <X className="size-5 text-zinc-400" onClick={toggleGuestModal} />
          </button>
        </div>
        <p className="text-sm text-zinc-400">
          Os convidados irão receber e-mails para confirmar a participação na viagem.
        </p>
      </div>

      {/* Emails Container */}
      <div className="flex flex-wrap gap-2">
        {
          emailsToInvite.map((email) => {
            return (
              <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2.5">
                <span className="text-zinc-300 lowercase">{email}</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" onClick={() => removeEmailFromInvite(email)} />
                </button>
              </div>
            )
          })
        }
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-zinc-800" />

      {/*Invite Participant Form */}
      <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
        <div className="flex items-center gap-2 flex-1">
          <AtSign className="text-zinc-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o email do Convidao"
            className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1" />
        </div>
        <button type="submit" className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium transition-all hover:bg-lime-400">
          Convidar <Plus className="size-5" />
        </button>
      </form>
    </div>
  </div>
  )
}
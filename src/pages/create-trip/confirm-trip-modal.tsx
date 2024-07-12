import { Mail, User, X } from 'lucide-react';
import { FormEvent } from 'react';

interface ConfirmTripModalProps {
  toggleConfirmTripModal: () => void
  createTrip: (e: FormEvent<HTMLFormElement>) => void,
  setOwnerEmail: (email: string) => void,
  setOwnerName: (name: string) => void,
  createTripButtonLoading: boolean,
}

export function ConfirmTripModal(
  { toggleConfirmTripModal,
    createTrip,
    setOwnerEmail,
    createTripButtonLoading,
    setOwnerName }: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 w-screen h-screen flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criacão de viagem</h2>
            <button>
              <X className="size-5 text-zinc-400" onClick={toggleConfirmTripModal} />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-sem">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
          </p>
        </div>

        {/*Invite Participant Form */}
        <form className="p-2.5 space-y-3" onSubmit={createTrip}>
          <div className="space-y-2">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-4 h-14 px-4">
              <User className="text-zinc-400 size-5" />
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
                onChange={(event) => setOwnerName(event.target.value)}
              />
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-4 h-14 px-4">
              <Mail className="text-zinc-400 size-5" />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
                className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1 [color-scheme: transparent]"
                onChange={(event) => setOwnerEmail(event.target.value)}
              />
            </div>
          </div>
          <button disabled={createTripButtonLoading} type="submit" className="w-full flex items-center justify-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium transition-all hover:bg-lime-400">
            {createTripButtonLoading ? "Carregando..." : "Confirmar criação da viagem"}
          </button>
        </form>
      </div>
    </div>
  )
}
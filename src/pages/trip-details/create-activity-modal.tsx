import { Calendar, LucideTag, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface CreateActivityModalProps {
  toggleCreateActivityModal: () => void;
}

export function CreateActivityModal({ toggleCreateActivityModal }: CreateActivityModalProps) {
  const { tripId } = useParams();
  const [isCreateActivityButtonLoading, setIsCreateActivityButtonLoading] = useState(false);

  async function handleCreateActivitySubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsCreateActivityButtonLoading(true);
    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occurs_at = data.get('occurs_at')?.toString();

    const response = await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at
    });

    if (response.status !== 200) {
      setIsCreateActivityButtonLoading(false);
      console.log(isCreateActivityButtonLoading);
    }
    setIsCreateActivityButtonLoading(false);
    toggleCreateActivityModal();
    window.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 w-screen h-screen flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar Actividade</h2>
            <button>
              <X className="size-5 text-zinc-400" onClick={toggleCreateActivityModal} />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as actividades.
          </p>
        </div>

        {/*Invite Participant Form */}
        <form onSubmit={handleCreateActivitySubmission} className="p-2.5 space-y-3">
          <div className="space-y-2">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-4 h-14 px-4">
              <LucideTag className="text-zinc-400 size-5" />
              <input
                type="text"
                name="title"
                placeholder="Qual Actividade?"
                className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1" />
            </div>

            <div className='flex items-center gap-2'>
              <div className=" flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-4 h-14 px-4">
                <Calendar className="text-zinc-400 size-5" />
                <input
                  type="datetime-local"
                  name="occurs_at"
                  placeholder="Data e Horario da actividade"
                  className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1" />
              </div>
            </div>
          </div>

          <button disabled={isCreateActivityButtonLoading} type="submit" className="w-full flex items-center justify-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium transition-all hover:bg-lime-400 disabled:opacity-60">
            {isCreateActivityButtonLoading ? "Carregando..." : "Salvar Actividade"}
          </button>
        </form>
      </div>
    </div>
  )
}
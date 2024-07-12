import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
  id: string;
  is_confirmed: boolean;
  is_owner: boolean;
  name: string | null;
  email: string;

}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    api.get(`trips/${tripId}/participants`).then(res => setParticipants(res.data.participants));
  }, [tripId])

  return (
    <div className='space-y-6'>
      {/* Header */}
      <h2 className='font-semibold text-xl'>Convidados</h2>

      {/* Invited People*/}
      <div className='space-y-5'>

        {/* Invited People */}
        {participants ?
          participants.map((participant, index) => {
            return (
              <div key={index} className='flex items-center justify-between gap-4'>
                <div className='space-y-1.5 flex-1'>
                  <span className='block font-medium text-zinc-100'>{participant.name ?? `Convidado ${index}`} {participant.is_owner && "(Organizador)"}</span>
                  <span className='block text-sm text-zinc-400 truncate '>{participant.email}</span>
                </div>
                {participant.is_confirmed ?
                  <CheckCircle2 className='text-lime-300 size-5 shrink-0' />
                  :
                  <CircleDashed className='text-zinc-400 size-5 shrink-0' />
                }

              </div>
            )
          }) : (
            <p className="text-zinc-400">Ainda nao tem participantes!</p>
          )}

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
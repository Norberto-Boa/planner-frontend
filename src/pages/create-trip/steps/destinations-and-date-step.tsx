import { MapPin, Calendar, Settings2, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestInputVisible: boolean,
  toggleGuestInput: () => void,
  setDestination: (destination: string) => void,
  setEventStartAndEndDate: (dates: DateRange | undefined) => void,
  eventStartAndEndDate: DateRange | undefined,
}

export function DestinationAndDateStep({
  isGuestInputVisible, toggleGuestInput, setDestination, setEventStartAndEndDate, eventStartAndEndDate }: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);


  function openDatePicker() {
    return setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false);
  }

  const displayedDate = eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to ? format(eventStartAndEndDate.from, "d ' de ' LLL").concat(" ate ").concat(format(eventStartAndEndDate.to, "d ' de ' LLL")) : null;
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestInputVisible}
          placeholder="Para onde Voce vai"
          className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
          onChange={event => setDestination(event.target.value)}
        />
      </div>

      {/* DatePicker Input */}
      <button
        disabled={isGuestInputVisible}
        className="flex items-center gap-2 w-[220px]"
        onClick={openDatePicker}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span
          className="text-lg text-zinc-400 w-40 text-left flex-1"
        >

          {displayedDate || "Quando?"}
        </span>
      </button>

      {/* DatePicker Modal */}
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 w-screen h-screen flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button>
                  <X className="size-5 text-zinc-400" onClick={closeDatePicker} />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDate}
              onSelect={setEventStartAndEndDate}
            />
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="w-px h-6 bg-zinc-800" />

      {isGuestInputVisible ? (
        <button onClick={toggleGuestInput} className="flex items-center gap-2 bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-lg px-5 py-2 font-medium transition-all hover:bg-zinc-700 hover:border hover:border-zinc-200">
          Alterar local/data <Settings2 className="size-5" />
        </button>
      ) : (
        <button onClick={toggleGuestInput} className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium transition-all hover:bg-lime-400">
          Continuar <ArrowRight className="size-5" />
        </button>
      )}

    </div>
  )
}
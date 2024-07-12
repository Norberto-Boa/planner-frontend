import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destinations-and-date-step";
import { InviteGuestStep } from "./steps/invite-guest-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";


function CreateTrip() {
  const navigate = useNavigate();

  const [isGuestInputVisible, setIsGuestInputVisible] = useState(false);
  const [isGuestModalOpen, setisGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
  ]);

  // Inputs Fields
  const [destination, setDestination] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>();
  const [createTripButtonLoading, setCreateTripButtonLoading] = useState(false);

  function toggleGuestInput() {
    setIsGuestInputVisible(!isGuestInputVisible);
  }

  function toggleGuestModal() {
    setisGuestModalOpen(!isGuestModalOpen);
  }

  function toggleConfirmTripModal() {
    setIsConfirmTripModalOpen(!isConfirmTripModalOpen);
  }

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email")?.toString().toLowerCase();

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      e.currentTarget.reset();
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ]);

    e.currentTarget.reset();
  }

  async function createTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCreateTripButtonLoading(true);
    console.log({
      destination,
      eventStartAndEndDate, emailsToInvite, ownerName, ownerEmail
    })

    if (!destination) {
      setCreateTripButtonLoading(false);
      return;
    }

    if (!eventStartAndEndDate) {
      setCreateTripButtonLoading(false);

      return;
    }

    if (emailsToInvite.length === 0) {
      setCreateTripButtonLoading(false);
      return;
    }

    if (!ownerName || !ownerEmail) {
      setCreateTripButtonLoading(false);
      return;
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEndDate.from,
      ends_at: eventStartAndEndDate.to,
      owner_name: ownerName,
      owner_email: ownerEmail,
      emails_to_invite: emailsToInvite
    })

    if (response.status !== 200) {
      setCreateTripButtonLoading(false);
    }

    const { tripId } = response.data;
    setCreateTripButtonLoading(false);
    navigate(`/trip/${tripId}`);
  }

  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove);

    setEmailsToInvite(newEmailList);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 mx-auto text-center space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestInputVisible={isGuestInputVisible}
            toggleGuestInput={toggleGuestInput}
            setDestination={setDestination}
            setEventStartAndEndDate={setEventStartAndEndDate}
            eventStartAndEndDate={eventStartAndEndDate}
          />

          {isGuestInputVisible && (
            <InviteGuestStep
              emailsToInvite={emailsToInvite}
              toggleConfirmTripModal={toggleConfirmTripModal}
              toggleGuestModal={toggleGuestModal}
            />
          )}
        </div>

        {/* Footer */}
        <p className="text-sm text-zinc-500 ">Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso </a>e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a>
        </p>
      </div>

      {/* Guest Addition Modal */}
      {isGuestModalOpen && (
        <InviteGuestModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          toggleGuestModal={toggleGuestModal}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}

      {/*Confirm Trip Modal  */}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          toggleConfirmTripModal={toggleConfirmTripModal}
          setOwnerEmail={setOwnerEmail}
          setOwnerName={setOwnerName}
          createTripButtonLoading={createTripButtonLoading}
        />
      )}
    </div>
  )
}

export { CreateTrip };

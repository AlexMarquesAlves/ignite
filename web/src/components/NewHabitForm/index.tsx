
export function NewHabitForm() {
  return (
    <form className="flex flex-col w-full mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        className="p-4 mt-3 text-white rounded-lg bg-zinc-800 placeholder:text-zinc-400"
        autoFocus
      />

      <label htmlFor="" className="mt-4 font-semibold leading-tight">
        Qual a recorrência?
      </label>


    </form>
  )
}
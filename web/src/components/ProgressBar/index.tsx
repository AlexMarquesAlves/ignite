interface ProgressBarProps {
  progress: number
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div className='w-full h-3 mt-4 rounded-xl bg-zinc-700'>
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600"
        style={{
          width: `${props.progress}%`
        }}
      />
    </div>
  )
}
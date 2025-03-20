export default function Home() {
  return (
    <main className="relative flex h-[874px] w-[402px] overflow-hidden rounded-4xl border-2 p-4">
      <div className="flex h-full w-full flex-col">
        {/* Header */}
        <h1 className="w-full border-b pb-3 text-center text-2xl font-bold">Jialin Yang</h1>

        {/* Content */}
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <p className="text-lg">Hello World!</p>
        </div>
      </div>
    </main>
  )
}

export function Offline({name}: {name: string}) {
  return (
    <div className={"h-full w-full flex flex-col gap-4 sm:flex-row"}>
      <div className="flex flex-1 flex-col items-start gap-4 p-4 border border-solid border-black">
        <div>{name}</div>
        <div className="flex flex-1 w-full rounded-sm border border-solid border-black transition-colors items-center justify-center gap-2 font-medium text-sm sm:text-base h-40 px-4">
          <span>Offline</span>
        </div>
      </div>
    </div>
  );
}

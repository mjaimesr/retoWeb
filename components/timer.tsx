export default function Timer() {
  return (
    <div>
    <div className="flex flex-col">
      <label className="text-bg ">Timer</label>
      <label className="text-sm">0 mins 0 secs</label>
     </div>
      <div className="flex gap-2">
        <button className="bg-green-500">Start</button>
        <button className="bg-red-500">Stop</button>
        <button className="bg-yellow-500">Reset</button>
       </div>
    </div>
  );
}
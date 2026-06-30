import Image from "next/image";

export function Wordmark() {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/tally-mascot.png"
        alt=""
        width={36}
        height={36}
        className="h-8 w-8 object-contain"
      />
      <span className="text-2xl font-extrabold lowercase tracking-tight text-ink">
        tally <span className="text-brand">tax</span>
      </span>
    </span>
  );
}

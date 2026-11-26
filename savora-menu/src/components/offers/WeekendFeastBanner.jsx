import { useEffect, useState } from "react";

export default function WeekendFeastBanner({
  imageSrc = "/images/weekend-feast.png",
  onOrderClick,
}) {
 
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0)
          return { days: prev.days - 1, hours: 23, minutes: 59 };
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] bg-[#FCE8D8] px-6 py-8 shadow-sm sm:px-10 md:py-10 lg:px-14">
     
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 z-0 h-[280px] w-[380px] rotate-[-21.8deg] rounded-[56px] bg-[#E35922] sm:-bottom-24 sm:-right-12 sm:h-[340px] sm:w-[480px] md:-bottom-20 md:-right-10 md:h-[400px] md:w-[580px] lg:h-[440px] lg:w-[660px]"
      />

    
      <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
        
        <div className="flex flex-col items-start space-y-4 md:col-span-6">
          <span className="inline-block rounded-full bg-[#F8D5BE] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E35922]">
            LIMITED TIME OFFER
          </span>

          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1E1E1E] sm:text-4xl lg:text-[42px]">
            Weekend Feast: Up to 40% OFF
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-[#5C534E] sm:text-base">
            Order your favorite family combos today and enjoy free express
            delivery.
          </p>

         
          <div className="flex items-start gap-3 pt-1">
            <div className="flex flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-base font-bold text-[#1E1E1E] shadow-xs">
                {pad(timeLeft.days)}
              </span>
              <span className="mt-1 text-[11px] font-medium text-[#6E655F]">
                Days
              </span>
            </div>

            <span className="pt-2 text-lg font-bold text-[#E35922]">:</span>

            <div className="flex flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-base font-bold text-[#1E1E1E] shadow-xs">
                {pad(timeLeft.hours)}
              </span>
              <span className="mt-1 text-[11px] font-medium text-[#6E655F]">
                Hrs
              </span>
            </div>

            <span className="pt-2 text-lg font-bold text-[#E35922]">:</span>

            <div className="flex flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-base font-bold text-[#1E1E1E] shadow-xs">
                {pad(timeLeft.minutes)}
              </span>
              <span className="mt-1 text-[11px] font-medium text-[#6E655F]">
                Mins
              </span>
            </div>
          </div>

          
          <div className="pt-2">
            <button
              type="button"
              onClick={onOrderClick}
              className="rounded-xl bg-[#E35922] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#cf4d19] active:scale-[0.98]"
            >
              Order Now
            </button>
          </div>
        </div>

        
        <div className="relative z-10 flex items-center justify-center md:col-span-6 md:justify-end">
          <img
            src={imageSrc}
            alt="Weekend Feast Family Combo"
            className="h-auto max-h-[260px] w-full max-w-[440px] object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.22)] sm:max-h-[300px] lg:max-h-[330px]"
          />
        </div>
      </div>
    </section>
  );
}
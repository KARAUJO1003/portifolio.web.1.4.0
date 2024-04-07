import { HTMLAttributes } from 'react'

export const TimelineCard = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="relative flex items-center justify-between md:justify-normal lg:odd:flex-row-reverse group is-active "
      {...props}
    >
      {/* <div className="flex items-center justify-center w-10 h-10 rounded-full   text-zinc-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <Check size={14} />
      </div> */}

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded  shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-zinc-300">Order Placed</div>
          <time className="font-caveat font-medium text-zinc-500 text-xs">
            08/06/2023
          </time>
        </div>
        <div className="text-zinc-400 text-xs">
          Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi
          blandit cursus risus.
        </div>
      </div>
    </div>
  )
}

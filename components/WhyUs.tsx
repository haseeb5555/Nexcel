import { ArrowBigUpDash, DollarSignIcon, MessageCircleHeart, TagIcon } from 'lucide-react'

const features = [
  {
    name: 'Limitless designs',
    description:
      'Feel free to request as many designs as you require, and we`ll diligently work on each one until we surpass your expectations.',
    icon: ArrowBigUpDash,
  },
  {
    name: 'Flexible subscription',
    description: 'You can upgrade, downgrade, or cancel at any time, based on your project requirements.',
    icon: MessageCircleHeart,
  },
  {
    name: 'Flat-rate pricing',
    description: 'No concealed fees, no intricate contracts, only a straightforward monthly fee.',
    icon: DollarSignIcon,
  },
  {
    name :"Fast turnaround",
    description: "We are committed to delivering your designs within 24 hours, so you can keep your project on track.",
    icon: TagIcon
  }
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-[#0c0c0c] py-24 sm:py-32 rounded-xl" id='why-us'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-pink-950">Develope faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tightsm:text-4xl">Unparalleled convenience</p>
              <p className="mt-6 text-lg leading-8 ">
              Awesome design meets endless possibilities.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 ">
                    <dt className="inline font-semibold ">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-pink-950" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/hero.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

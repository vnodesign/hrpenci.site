import Tilt from 'react-parallax-tilt'

export default function Card({ title, description, icon }) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200 to-white p-px dark:from-zinc-700 dark:to-zinc-800"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
        {icon}
        <div>
          <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </h4>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </div>
    </Tilt>
  )
}

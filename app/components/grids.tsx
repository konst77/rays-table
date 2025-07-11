

export default function Grids({
    children, className
  }: {
    children: React.ReactNode; className: string;
  }) {
    return (
        <section className={`"w-full h-full md:py-10 py-4 lg:px-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " ${className}`}>
            {children}
        </section>
    )
}
export default function Chip({ label }) {
    return (
        <div
            className='flex justify-center items-center bg-secondary/25 text-xs text-primary
                w-fit rounded-full px-3 py-1.5 shadow-lg
                md:text-sm md:px-4 md:py-2'
        >
            {label}
        </div>
    )
}
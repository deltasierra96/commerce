export default function Loading() {
  return (
    <>
      <div className="mb-4 h-6" />
      <div className="grid-cols-2 lg:grid-cols-3">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            return <div key={index} className="h-96 w-96 animate-pulse bg-neutral-900" />;
          })}
      </div>
    </>
  );
}

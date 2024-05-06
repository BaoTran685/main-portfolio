import Link from "next/link";


const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="text--sub--header flex flex-col items-center justify-center w-full h-full space-y-6">
        <h2>The page cannot be found!!!</h2>
        <h3>Go back to the <Link href='/' className="text-[var(--blue-color)] hover:underline">Homepage</Link></h3>
      </div>
    </div>
  );
}

export default NotFound;
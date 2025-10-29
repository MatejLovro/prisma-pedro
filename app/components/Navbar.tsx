import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between h-16">
          {/* logo */}
          <div className="flex">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Job Board Logo"
                width={40}
                height={40}
              />{" "}
            </Link>
          </div>
          {/* navigacija */}
          <div className="flex gap-4 items-center">
            <Link href="/jobs">Browse jobs page</Link>
            <Link href="/jobs/post">Post a job</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/auth/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

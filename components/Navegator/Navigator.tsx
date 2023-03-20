import { Route } from "@ft/app/models/router.model";
import Link from "next/link";

interface Props {
  PathName: Route[];
}

function Navigator({ PathName }: Props) {
  return (
    <div>
      {PathName.map((pathname) => (
        <Link
          className="text-black hover:text-blue-700 p-2 m-2 border-2 border-blue-700 rounded-lg"
          key={pathname.path}
          href={pathname.path}
        >
          {pathname.name}
        </Link>
      ))}
    </div>
  );
}
export default Navigator;

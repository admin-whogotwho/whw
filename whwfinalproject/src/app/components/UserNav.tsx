import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

interface iAppProps {
  email: string;
  name: string;
  userImage: string | undefined;
}

export function UserNav({ email, name, userImage }: iAppProps) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full cursor-pointer">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userImage} alt="User Image" />
            <AvatarFallback>{name.slice(0, 3)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/sell" className="cursor-pointer">Sell your Product</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="cursor-pointer">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="my-products" className="cursor-pointer">My Products</Link>
          </DropdownMenuItem>
        
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink className="cursor-pointer">Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

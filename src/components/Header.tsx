import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

function Header() {
    return (
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
}

export default Header;
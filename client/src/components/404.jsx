import { Button } from "@nextui-org/react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 text-center p-0 overflow-hidden">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                404
            </h1>
            <p className="text-2xl mt-4">
                Oh no! The page you&apos;re looking for is missing.
            </p>
            <p className="text-lg text-gray-600 mt-2">
                Maybe it went out for a walk, or you stumbled on the wrong link. 🤔
            </p>
            <Button
                color="primary"
                className="mt-6"
                size="lg"
                variant="shadow"
                onPress={() => (window.location.href="/home")}
            >
                Back to Home 🏡
            </Button>
            <img
                src="https://media.giphy.com/media/jTNG3RF6EwbkpD4LZx/giphy.gif"
                alt="Funny 404 GIF"
                className="mt-8 max-w-xs md:max-w-md rounded-lg"
            />

        </div>
    );
}

import AccessRequestForm from '@/partials/assets/request-access';
import Link from 'next/link';

export default function Request() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="mt-16 max-w-sm w-full">
                <Link className="text-blue-500" href="/">
                    Go back to home
                </Link>
                <div className="mt-8">
                    <AccessRequestForm />
                </div>
            </div>
        </div>
    );
}

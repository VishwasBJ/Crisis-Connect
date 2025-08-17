import Button from '../components/Button';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-600">CrisisConnect</h1>
            <p className="mt-2 text-gray-700">Welcome to the Disaster Relief Platform</p>

            <div className="mt-8 flex gap-4">
                <Button label="Request Help" onClick={() => console.log('Request Help clicked')} />
                <Button label="Offer Help" onClick={() => console.log('Offer Help clicked')} />
                <Button label="View Crisis Map" onClick={() => console.log('View Map clicked')} />
            </div>
        </div>
    );
}
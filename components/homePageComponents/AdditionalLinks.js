const additionalLinks = ['Help', 'Status', 'About', 'Careers', 'Blog', 'Privacy', 'Terms', 'Text to speech', 'Teams'];

export default function AdditionalLinks() {
    return (
        <main className="pb-8 flex flex-wrap max-w-xs">
            {additionalLinks.map((link, index) => (
                <a key={index} href="#" className="text-xs p-2">{link}</a>
            ))}
        </main>
    )
}
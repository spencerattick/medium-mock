const additionalLinks = ['Help', 'Status', 'About', 'Careers', 'Blog', 'Privacy', 'Terms', 'Text to speech', 'Teams'];

export default function AdditionalLinks() {
    return (
        <main className="pb-8 flex">
            {additionalLinks.map((link, index) => (
                <a key={index} href="" className="text-xs">{link}</a>
            ))}
        </main>
    )
}
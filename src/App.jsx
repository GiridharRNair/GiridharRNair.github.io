import MusicPlayerCard from "./components/MusicCard";

function Socials({ socials }) {
    return (
        <div className="flex flex-row space-x-3">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0000EE] underline"
                >
                    {social.name}
                </a>
            ))}
        </div>
    );
}

function App() {
    const socialData = [
        { name: "GitHub", link: "https://github.com/GiridharRNair" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/giridhar-nair/" },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-2 font-serif">
            <p>Giridhar Nair</p>
            <MusicPlayerCard />
            <Socials socials={socialData} /> 
        </div>
    );
}

export default App;

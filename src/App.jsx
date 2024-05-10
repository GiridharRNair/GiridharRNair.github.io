import MusicPlayerCard from "./components/MusicCard";
import PropTypes from "prop-types";

const socialData = [
    { name: "GitHub", link: "https://github.com/GiridharRNair" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/giridhar-nair/" },
    { name: "Email", link: "mailto:giridhar.r.nair@gmail.com" },
];

function Socials({ socials }) {
    return (
        <div className="flex flex-row space-x-3">
            {socials.map((social, index) => (
                <>
                    <a key={social.name} href={social.link} target="_blank" rel="noreferrer" className="text-[#0000EE] underline">
                        {social.name}
                    </a>
                    {index !== socials.length - 1 && <p>|</p>}
                </>
            ))}
        </div>
    );
}

Socials.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-2 font-serif">
            <p>Giridhar Nair&apos;s Personal Website</p>
            <MusicPlayerCard />
            <Socials socials={socialData} />
        </div>
    );
}

export default App;

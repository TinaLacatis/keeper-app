const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <p>
                copyright ⓒ {year} Tina Lacatis
            </p>
        </footer>
    );
}
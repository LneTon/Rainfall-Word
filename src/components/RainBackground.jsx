export default function RainBackground() 
{
    const lines = Array.from({ length: 80 });

    return (
    <div className="rain">
    {lines.map((_, i) => 
    (
        <div
            key={i}
            className="rain-line"
            style=
            {{
                left: `${Math.random() * 100}vw`,
                animationDuration: `${1 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                height: `${50 + Math.random() * 80}px`,
                opacity: 0.2 + Math.random() * 0.4
            }}
        />
    ))}
    </div>
    );
}

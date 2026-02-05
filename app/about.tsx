import Lightning from '@/components/Lightning';

export default function About() {
    return (
        <div className="about-container">
            <div className="absolute z-0">
                <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                    <Lightning
                        hue={273}
                        xOffset={-0.6}
                        speed={0.4}
                        intensity={1.1}
                        size={1.2}
                    />
                </div>
            </div>
            <div className="about relative z-2">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
            </div>
        </div>
    )
}

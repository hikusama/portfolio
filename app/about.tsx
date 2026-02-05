import Lightning from '@/components/Lightning';
import HeaderNav from './headerNav';

export default function About() {
    return (
        <div className="about-container">
            <div className="absolute top-0 hidden" id='about'></div>
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
                <HeaderNav />
            </div>
        </div>
    )
}

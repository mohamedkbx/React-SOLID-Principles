import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className="max-w-3xl w-full text-center space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
                            SOLID
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-light tracking-wide">
                            Principles • React.js • TypeScript
                        </p>
                    </div>

                    <div className="h-px w-24 bg-slate-200 mx-auto" />

                    <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
                        A clean, minimal exploration of software design principles applied to modern React development.
                    </p>

                    <div className="pt-8">
                        <button
                            onClick={() => navigate('/solid-principles')}
                            className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200/50 cursor-pointer"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

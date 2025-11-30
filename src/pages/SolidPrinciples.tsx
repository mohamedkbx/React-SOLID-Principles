import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const principles = [
    {
        id: 'srp',
        title: 'Single Responsibility Principle (SRP)',
        description: 'A class should have one and only one reason to change.',
        path: '/srp'
    },
    {
        id: 'ocp',
        title: 'Open/Closed Principle (OCP)',
        description: 'Objects or entities should be open for extension but closed for modification.',
        path: '/ocp'
    },
    {
        id: 'lsp',
        title: 'Liskov Substitution Principle (LSP)',
        description: 'Objects of a superclass shall be replaceable with objects of its subclasses.',
        path: '/lsp'
    },
    {
        id: 'isp',
        title: 'Interface Segregation Principle (ISP)',
        description: 'A client should never be forced to implement an interface that it doesn\'t use.',
        path: '/isp'
    },
    {
        id: 'dip',
        title: 'Dependency Inversion Principle (DIP)',
        description: 'Entities must depend on abstractions, not on concretions.',
        path: '/dip'
    }
];

export default function SolidPrinciples() {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <div className="min-h-screen p-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">SOLID Principles</h1>
                        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            SOLID is a set of object-oriented design principles that help developers write clean, scalable, readable, and maintainable code.
                            These principles were introduced by Robert C. Martin. Although originally defined for OOP, they apply effectively in React.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {principles.map((principle) => (
                            <div
                                key={principle.id}
                                onClick={() => navigate(principle.path)}
                                className={`
                bg-white border border-slate-200
                p-6 rounded-xl cursor-pointer transition-all duration-300
                hover:shadow-lg hover:border-slate-900 group
              `}
                            >
                                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                                    {principle.title}
                                </h2>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Summary</h2>
                        <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">
                            Using SOLID principles in frontend code improves clarity, maintainability, and scalability.
                            Aligning to these principles helps create modular, reusable, and robust frontend code that can grow with your application.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <strong className="block text-slate-900 mb-1">S — SRP</strong>
                                <span className="text-slate-600">One component = one responsibility</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <strong className="block text-slate-900 mb-1">O — OCP</strong>
                                <span className="text-slate-600">Open to extension, closed to modification</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <strong className="block text-slate-900 mb-1">L — LSP</strong>
                                <span className="text-slate-600">Components replaceable with subtypes</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <strong className="block text-slate-900 mb-1">I — ISP</strong>
                                <span className="text-slate-600">Don't force props they don't need</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <strong className="block text-slate-900 mb-1">D — DIP</strong>
                                <span className="text-slate-600">Depend on abstractions, not concretions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

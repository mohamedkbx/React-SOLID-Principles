import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

export default function OCP() {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <div className="min-h-screen p-8 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => navigate('/solid-principles')}
                        className="mb-8 text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        ← Back to Principles
                    </button>

                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Open/Closed Principle (OCP)</h1>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                            <h2 className="text-xl font-semibold text-slate-800 mb-3">Definition</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Components should be open for extension but closed for modification.
                                You should be able to extend functionality without changing existing code.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                                <h3 className="text-rose-800 font-semibold mb-4 flex items-center gap-2">
                                    ❌ Bad Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`function Button({ type, label }: { type: "primary" | "secondary"; label: string }) {
  if (type === "primary") return <button className="bg-blue-500">{label}</button>;
  if (type === "secondary") return <button className="bg-gray-500">{label}</button>;
  return <button>{label}</button>;
}`}
                                </pre>
                                <p className="mt-4 text-sm text-rose-700">
                                    Adding a new button type requires modifying the component code.
                                </p>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="text-emerald-800 font-semibold mb-4 flex items-center gap-2">
                                    ✅ Good Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return <button className={\`px-4 py-2 rounded \${className}\`}>{children}</button>;
}

<Button className="bg-blue-500">Primary</Button>
<Button className="bg-gray-500">Secondary</Button>`}
                                </pre>
                                <p className="mt-4 text-sm text-emerald-700">
                                    You can easily create different styled buttons by passing a class name, without modifying the Button component itself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

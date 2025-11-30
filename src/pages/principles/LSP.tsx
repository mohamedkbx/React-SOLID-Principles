import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

export default function LSP() {
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

                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Liskov Substitution Principle (LSP)</h1>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                            <h2 className="text-xl font-semibold text-slate-800 mb-3">Definition</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Subtypes should be replaceable for their base types without breaking the application.
                                In React, this means a component (or hook) should be swappable with another that follows the same contract.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                                <h3 className="text-rose-800 font-semibold mb-4 flex items-center gap-2">
                                    ❌ Bad Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`type InputProps = { value: string; onChange: (val: string) => void };

function FormInput({ value, onChange }: InputProps) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

// Bad: ReadOnlyInput doesn’t call onChange at all
function ReadOnlyInput({ value }: { value: string }) {
  return <input value={value} readOnly />;
}`}
                                </pre>
                                <p className="mt-4 text-sm text-rose-700">
                                    The ReadOnlyInput breaks the contract by not accepting or calling onChange.
                                </p>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="text-emerald-800 font-semibold mb-4 flex items-center gap-2">
                                    ✅ Good Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`function ReadOnlyInput({ value, onChange }: InputProps) {
  const handleChange = () => {
    // still calls onChange with the same value (no violation)
    onChange(value);
  };

  return (
    <input
      value={value}
      readOnly
      onClick={handleChange} // safe noop behavior
    />
  );
}`}
                                </pre>
                                <p className="mt-4 text-sm text-emerald-700">
                                    You can replace FormInput with ReadOnlyInput without breaking the app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

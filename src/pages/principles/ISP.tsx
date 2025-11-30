import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

export default function ISP() {
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

                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Interface Segregation Principle (ISP)</h1>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                            <h2 className="text-xl font-semibold text-slate-800 mb-3">Definition</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Don’t force components or hooks to accept props they don’t actually need.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                                <h3 className="text-rose-800 font-semibold mb-4 flex items-center gap-2">
                                    ❌ Bad Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`type ChartProps = {
  data: any[];
  enableZoom?: boolean;
  enableExport?: boolean;
  showLegend?: boolean;
  enable3D?: boolean;
};

function Chart({ data, enableZoom, enableExport, showLegend, enable3D }: ChartProps) {
  return <div>{JSON.stringify({ data, enableZoom, enableExport, showLegend, enable3D })}</div>;
}`}
                                </pre>
                                <p className="mt-4 text-sm text-rose-700">
                                    The component accepts many props that might not be used by all variants.
                                </p>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="text-emerald-800 font-semibold mb-4 flex items-center gap-2">
                                    ✅ Good Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`type BaseChartProps = { data: any[] };
type ZoomableChartProps = BaseChartProps & { enableZoom: boolean };

function Chart({ data }: BaseChartProps) {
  return <div>{JSON.stringify(data)}</div>;
}

function ZoomableChart({ data, enableZoom }: ZoomableChartProps) {
  return <>
       {/* Use data and enebleZoom props */}
  </>;
}`}
                                </pre>
                                <p className="mt-4 text-sm text-emerald-700">
                                    Split props so each variant only deals with what it actually needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
